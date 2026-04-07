# React Native Stack Reference

Mobile cross-platform with native performance.

## Design Principles

- **Platform-aware.** iOS and Android have different interaction patterns. Navigation, gestures, and component styles should feel native to each platform.
- **Density.** Mobile screens are small. Every pixel matters. Respect the 44pt touch target minimum.
- **Performance.** Heavy animations and complex layouts can drop frames. Profile on real devices.

## Styling

React Native uses a subset of CSS via StyleSheet:

```tsx
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#0a0a0c' },
  heading: { fontSize: 24, fontWeight: '700', color: '#e5e5e5' },
});
```

- No cascading — styles are scoped to components
- Use `Dimensions.get('window')` for responsive calculations
- Consider `react-native-responsive-screen` for percentage-based sizing

## Typography

- Default system fonts: San Francisco (iOS), Roboto (Android)
- Custom fonts: load via `expo-font` or `react-native.config.js`
- Use a type scale with named constants:

```tsx
const TYPE = {
  hero: { fontSize: 32, fontWeight: '800', lineHeight: 38 },
  heading: { fontSize: 24, fontWeight: '700', lineHeight: 30 },
  body: { fontSize: 16, fontWeight: '400', lineHeight: 24 },
  caption: { fontSize: 12, fontWeight: '400', lineHeight: 16 },
};
```

## Motion

- **Reanimated 3** for performant animations (runs on UI thread)
- **Shared Element Transitions** for screen-to-screen animations
- Spring animations: `withSpring(value, { damping: 20, stiffness: 100 })`
- Respect `AccessibilityInfo.isReduceMotionEnabled()`

## Navigation

- `@react-navigation/native` is the standard
- Bottom tab navigator for primary navigation
- Stack navigator for drill-down flows
- Use native header behavior (large titles on iOS, toolbar on Android)

## Touch Targets

Minimum 44x44 points. Use `hitSlop` to extend touch area without visual change:

```tsx
<Pressable hitSlop={8} onPress={handlePress}>
```
