# Vue / Nuxt Stack Reference

## Vue 3 Composition API

- Use `<script setup>` for concise component definitions
- `ref()` and `reactive()` for state management
- `computed()` for derived values
- `watch()` / `watchEffect()` for side effects

## Styling

- **Scoped styles:** `<style scoped>` for component isolation
- **CSS Modules:** `<style module>` for generated class names
- **Tailwind:** Works seamlessly with Vue SFC. Use `class` binding for dynamic classes:

```vue
<div :class="[
  'rounded-lg p-4',
  isActive ? 'bg-primary text-white' : 'bg-surface text-muted'
]">
```

## Nuxt Specifics

- **Auto-imports:** Components, composables, and utilities auto-imported
- **Server Components:** `.server.vue` for server-only rendering
- **SEO:** Use `useHead()` for meta tags, `definePageMeta()` for page config
- **Images:** Use `<NuxtImg>` for automatic optimization

## Motion

- **Vue Transition:** Built-in `<Transition>` and `<TransitionGroup>` components
- CSS-based transitions for simple enter/leave:

```vue
<Transition name="fade-up">
  <div v-if="show">Content</div>
</Transition>
```

```css
.fade-up-enter-active, .fade-up-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.fade-up-enter-from, .fade-up-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
```

- **GSAP integration:** Use in `onMounted()` with cleanup in `onUnmounted()`
- Respect `prefers-reduced-motion` via `window.matchMedia`

## Component Libraries

- **Radix Vue:** Unstyled accessible primitives for Vue
- **PrimeVue:** Full component library (customize don't default)
- **Headless UI Vue:** Tailwind-friendly headless components
- Same rule as React: never use component libraries in their default state. Customize to match DESIGN.md.
