interface AppTheme {
  isDark: boolean
  roundness: number
  colors: ColorScheme
  typography: Typography
}

interface FontStyle {
  fontFamily: string
  fontWeight:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
  fontSize: number
  lineHeight: number
  letterSpacing: number
}

interface Typography {
  displaySmall: FontStyle
  headlineSmall: FontStyle
  bodySmall: FontStyle
  labelSmall: FontStyle
  titleSmall: FontStyle
  displayMedium: FontStyle
  headlineMedium: FontStyle
  bodyMedium: FontStyle
  labelMedium: FontStyle
  titleMedium: FontStyle
  displayLarge: FontStyle
  headlineLarge: FontStyle
  bodyLarge: FontStyle
  labelLarge: FontStyle
  titleLarge: FontStyle
}

interface ColorScheme {
  primary: string
  onPrimary: string
  primaryContainer: string
  onPrimaryContainer: string
  primaryFixed: string
  onPrimaryFixed: string
  primaryFixedDim: string
  onPrimaryFixedVariant: string

  secondary: string
  onSecondary: string
  secondaryContainer: string
  onSecondaryContainer: string
  secondaryFixed: string
  onSecondaryFixed: string
  secondaryFixedDim: string
  onSecondaryFixedVariant: string

  tertiary: string
  onTertiary: string
  tertiaryContainer: string
  onTertiaryContainer: string
  tertiaryFixed: string
  onTertiaryFixed: string
  tertiaryFixedDim: string
  onTertiaryFixedVariant: string

  error: string
  onError: string
  errorContainer: string
  onErrorContainer: string

  outline: string
  background: string
  onBackground: string

  surface: string
  onSurface: string
  surfaceVariant: string
  onSurfaceVariant: string
  inverseSurface: string
  inverseOnSurface: string
  surfaceContainerHighest: string
  surfaceContainerHigh: string
  surfaceContainer: string
  surfaceContainerLow: string
  surfaceContainerLowest: string 
  surfaceBright: string
  surfaceDim: string
  surfaceTint: string

  inversePrimary: string
  shadow: string
  outlineVariant: string
  scrim: string
}
