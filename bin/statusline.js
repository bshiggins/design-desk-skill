#!/usr/bin/env node
// Design Desk statusline — shows update indicator
// Configure in settings.json: "statusLine": { "type": "command", "command": "node path/to/statusline.js" }
// If you also use GSD, see README for how to chain both statuslines.

const fs = require('fs');
const path = require('path');
const os = require('os');

const homeDir = os.homedir();

let input = '';
const stdinTimeout = setTimeout(() => process.exit(0), 3000);
process.stdin.setEncoding('utf8');
process.stdin.on('data', chunk => input += chunk);
process.stdin.on('end', () => {
  clearTimeout(stdinTimeout);

  const parts = [];

  // Design Desk update check
  const cacheFile = path.join(homeDir, '.cache', 'designdesk', 'update-check.json');
  if (fs.existsSync(cacheFile)) {
    try {
      const cache = JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
      if (cache.update_available) {
        parts.push('\x1b[33m⬆ /designdesk-update\x1b[0m');
      }
    } catch (e) {}
  }

  if (parts.length > 0) {
    process.stdout.write(parts.join(' │ '));
  }
});
