# Flutter Stack Reference

Cross-platform with Material Design 3 as the default design language.

## Theme System

Flutter uses `ThemeData` for design tokens:

```dart
final theme = ThemeData(
  colorScheme: ColorScheme.fromSeed(seedColor: Color(0xFF6750A4)),
  useMaterial3: true,
  textTheme: GoogleFonts.satoshiTextTheme(),
);
```

- Use `ColorScheme.fromSeed()` for automatic palette generation
- Override specific roles: `colorScheme.copyWith(primary: ...)`
- Access tokens: `Theme.of(context).colorScheme.primary`

## Typography

```dart
Text('Headline', style: Theme.of(context).textTheme.headlineLarge)
Text('Body', style: Theme.of(context).textTheme.bodyMedium)
```

For custom fonts, use `google_fonts` package. Don't hardcode font families in individual widgets.

## Layout

- `Column`, `Row`, `Stack` for simple layouts
- `GridView.builder` for grids with dynamic content
- `SliverList` / `SliverGrid` for scrollable layouts with sticky headers
- Use `Padding` and `SizedBox` for spacing — not `Container` with only padding
- `LayoutBuilder` for responsive layouts based on parent constraints

## Motion

```dart
AnimatedContainer(
  duration: Duration(milliseconds: 300),
  curve: Curves.easeOutQuart,
  // properties
)
```

- Use `AnimatedFoo` widgets for implicit animations (AnimatedOpacity, AnimatedScale)
- Use `AnimationController` + `Tween` for explicit animations
- Spring physics: `SpringSimulation` with damping and stiffness
- Respect `MediaQuery.of(context).disableAnimations`

## Platform Adaptation

- Use `Platform.isIOS` / `Platform.isAndroid` for platform-specific behavior
- Cupertino widgets (`CupertinoNavigationBar`, `CupertinoButton`) for iOS feel
- Material widgets for Android
- Or: design your own that feels native on both
