# SwiftUI Stack Reference

Native iOS/macOS design follows Apple's Human Interface Guidelines while allowing brand expression.

## Design Principles

- **Platform conventions first.** iOS users expect tab bars at the bottom, navigation titles at the top, swipe gestures. Don't fight the platform.
- **Dynamic Type.** Always support Dynamic Type scaling. Use `.font(.title)`, `.font(.body)`, etc. — never hardcoded point sizes for body text.
- **Safe areas.** Respect safe area insets. Don't put content behind the notch, home indicator, or status bar.

## Typography

Use system fonts by default (SF Pro) — they're optimized for Apple hardware. Custom fonts for brand expression in headers only.

```swift
Text("Headline").font(.system(.title, design: .rounded, weight: .bold))
Text("Body").font(.body)
```

## Color

- Use semantic colors: `.primary`, `.secondary`, `.background`, `.label`
- These automatically adapt to light/dark mode and accessibility settings
- For brand colors, define in asset catalog with light/dark variants

## Layout

- Use `VStack`, `HStack`, `ZStack` for simple layouts
- Use `LazyVGrid` / `LazyHGrid` for grids
- Use `GeometryReader` sparingly — prefer relative sizing
- Spacing: use `.padding()` with consistent values (8, 12, 16, 24)

## Motion

SwiftUI has built-in spring animations:
```swift
withAnimation(.spring(response: 0.3, dampingFraction: 0.6)) {
    // state change
}
```

- Use `.animation(.default, value: trigger)` for implicit animations
- Respect `UIAccessibility.isReduceMotionEnabled`
- Keep transitions under 300ms for interactions

## Components

- Use native components where possible: `NavigationStack`, `TabView`, `Sheet`, `Alert`
- Customize with `.tint()`, `.accentColor()`, modifiers
- Custom components should feel native — don't import Material Design patterns into iOS
