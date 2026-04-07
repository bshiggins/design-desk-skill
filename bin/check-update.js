#!/usr/bin/env node
// designdesk-hook-version: 0.1.0
// Check for Design Desk skill updates
// Called by SessionStart hook - reads cached state immediately, fetches in background for next time

const fs = require('fs');
const path = require('path');
const os = require('os');
const { spawn } = require('child_process');

const homeDir = os.homedir();
const configDir = process.env.CLAUDE_CONFIG_DIR || path.join(homeDir, '.claude');
const installDir = path.join(configDir, 'design-desk-skill');
const versionFile = path.join(installDir, 'VERSION');

const cacheDir = path.join(homeDir, '.cache', 'designdesk');
const cacheFile = path.join(cacheDir, 'update-check.json');

// Only run if design-desk-skill is installed
if (!fs.existsSync(versionFile)) {
  process.exit(0);
}

// Ensure cache directory exists
if (!fs.existsSync(cacheDir)) {
  fs.mkdirSync(cacheDir, { recursive: true });
}

// Step 1: Read existing cache and notify immediately (from previous session's fetch)
if (fs.existsSync(cacheFile)) {
  try {
    const cache = JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
    if (cache.update_available) {
      console.log(`IMPORTANT: Design Desk skill is outdated (${cache.installed} → ${cache.latest}).`);
      console.log('Strongly recommend updating with /designdesk-update for best compatibility.');
    }
  } catch (e) {}
}

// Step 2: Fetch remote in background to update cache for next session
const child = spawn(process.execPath, ['-e', `
  const fs = require('fs');
  const path = require('path');
  const { execSync } = require('child_process');

  const installDir = ${JSON.stringify(installDir)};
  const versionFile = ${JSON.stringify(versionFile)};
  const cacheFile = ${JSON.stringify(cacheFile)};

  let installed = '0.0.0';
  try {
    installed = fs.readFileSync(versionFile, 'utf8').trim();
  } catch (e) {}

  let remoteVersion = null;
  let remoteCommit = null;
  let localCommit = null;
  try {
    execSync('git fetch origin --quiet', { cwd: installDir, timeout: 10000, windowsHide: true, stdio: 'ignore' });
    localCommit = execSync('git rev-parse HEAD', { cwd: installDir, encoding: 'utf8', timeout: 5000, windowsHide: true }).trim();
    remoteCommit = execSync('git rev-parse origin/main', { cwd: installDir, encoding: 'utf8', timeout: 5000, windowsHide: true }).trim();

    try {
      remoteVersion = execSync('git show origin/main:VERSION', { cwd: installDir, encoding: 'utf8', timeout: 5000, windowsHide: true }).trim();
    } catch (e) {
      remoteVersion = installed;
    }
  } catch (e) {}

  const updateAvailable = remoteCommit && localCommit && remoteCommit !== localCommit;

  const result = {
    update_available: updateAvailable,
    installed: installed,
    latest: remoteVersion || installed,
    local_commit: localCommit ? localCommit.substring(0, 7) : 'unknown',
    remote_commit: remoteCommit ? remoteCommit.substring(0, 7) : 'unknown',
    checked: Math.floor(Date.now() / 1000)
  };

  fs.writeFileSync(cacheFile, JSON.stringify(result));
`], {
  stdio: 'ignore',
  windowsHide: true,
  detached: true
});

child.unref();
