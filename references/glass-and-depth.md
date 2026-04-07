# Glass & Depth Reference

Glass morphism, shadows, and elevation done right. These effects create spatial hierarchy — a sense that elements exist in physical space. Used poorly, they're decorative noise. Used well, they communicate what's above, below, and in front.

## Glass Morphism (When It's Earned)

Glass morphism works when there's something behind the glass worth seeing — a gradient, image, 3D scene, or video. A glass card over a solid white background is pointless.

### Basic Glass
```css
.glass {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
}
```

### Premium Glass (with refraction)
Beyond basic blur — simulate physical glass edges catching light:

```css
.liquid-glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(24px) saturate(200%) brightness(1.10);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;

  /* Inner refraction — simulates glass edge */
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.1),      /* top rim light */
    inset 0 -1px 0 rgba(0, 0, 0, 0.05),            /* bottom shadow */
    0 20px 40px -15px rgba(0, 0, 0, 0.25);          /* floating shadow */
}

/* Specular highlight — prismatic top edge */
.liquid-glass::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg,
    transparent,
    rgba(255, 255, 255, 0.3) 30%,
    rgba(201, 160, 85, 0.2) 50%,
    rgba(255, 255, 255, 0.3) 70%,
    transparent
  );
}
```

### Mobile Performance
Glass morphism is GPU-expensive. On mobile:
- Reduce blur: 24px → 10px
- Remove `saturate()` and `brightness()` adjustments
- Remove `::before` pseudo-elements for specular highlights
- Reduce shadow layers to 1-2

```css
@media (max-width: 768px) {
  .liquid-glass {
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }
  .liquid-glass::before { display: none; }
}
```

## Shadow Systems

Shadows communicate elevation. A consistent shadow scale makes depth predictable.

### The Scale
```css
--shadow-xs:    0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-sm:    0 2px 8px rgba(0, 0, 0, 0.08);
--shadow-md:    0 4px 16px rgba(0, 0, 0, 0.12);
--shadow-lg:    0 8px 32px rgba(0, 0, 0, 0.16);
--shadow-xl:    0 16px 48px rgba(0, 0, 0, 0.20);
--shadow-float: 0 24px 64px rgba(0, 0, 0, 0.25);
```

### Tinted Shadows
Don't use pure black shadows. Tint toward the element's color or the background hue:

```css
/* Instead of pure black */
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);

/* Tinted toward blue brand color */
box-shadow: 0 4px 16px rgba(37, 99, 235, 0.15);

/* Tinted toward background */
box-shadow: 0 4px 16px oklch(0.3 0.02 var(--hue) / 0.15);
```

### Shadow Rules
- More elevation = larger blur radius + more offset + darker opacity
- Hover states: increase shadow by one step (sm → md)
- Active/pressed states: decrease shadow (md → sm) — feels like pressing down
- Dark mode: shadows are nearly invisible. Use borders or subtle background shifts
- Cards should use shadow OR border, rarely both

## Elevation Layers

Think of your interface as physical layers:

| Layer | Z-Index | Shadow | Examples |
|---|---|---|---|
| Base | 0 | none | Page background |
| Surface | 0 | xs-sm | Cards, panels |
| Raised | 10 | sm-md | Sticky headers, floating buttons |
| Overlay | 30 | lg | Backdrops, scrims |
| Modal | 40 | xl | Dialogs, popovers |
| Toast | 50 | xl-float | Notifications |

## When NOT to Use Depth Effects

- **Glass over solid backgrounds** — there's nothing to see through
- **Shadows on dark mode** — they disappear. Use borders or background shifts instead
- **Cards inside cards** — double elevation is confusing. Flatten
- **Every element elevated** — when everything floats, nothing has grounding
- **Glass as the default surface** — it should be special, not standard
