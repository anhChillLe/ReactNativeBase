export interface Material3Theme {
  seed: string
  name: string
  description: string
  baseline: boolean
  extendedColors: string[]
  coreColors: CoreColors
  schemes: {
    light: ColorSchemeDetail
    dark: ColorSchemeDetail
  }
  palettes: {
    primary: Palette
    secondary: Palette
    tertiary: Palette
    error: Palette
    neutral: Palette
    neutralVariant: Palette
  }
  styles: Styles
  customColors: string[]
}

interface CoreColors {
  primary: string
}

interface ColorSchemeDetail {
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
  inversePrimary: string
  shadow: string
  surfaceTint: string
  outlineVariant: string
  scrim: string
  surfaceContainerHighest: string
  surfaceContainerHigh: string
  surfaceContainer: string
  surfaceContainerLow: string
  surfaceContainerLowest: string
  surfaceBright: string
  surfaceDim: string
}

interface Palette {
  '0': string
  '10': string
  '20': string
  '30': string
  '40': string
  '50': string
  '60': string
  '70': string
  '80': string
  '90': string
  '95': string
  '99': string
  '100': string
}

export interface Styles {
  display: {
    large: FontStyle
    medium: FontStyle
    small: FontStyle
  }
  headline: {
    large: FontStyle
    medium: FontStyle
    small: FontStyle
  }
  body: {
    large: FontStyle
    medium: FontStyle
    small: FontStyle
  }
  label: {
    large: FontStyle
    medium: FontStyle
    small: FontStyle
  }
  title: {
    large: FontStyle
    medium: FontStyle
    small: FontStyle
  }
}

interface FontStyle {
  fontFamilyName: string
  fontFamilyStyle: string
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
