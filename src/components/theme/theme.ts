export interface AppTheme {
  isDark: boolean
  typography: AppFonts
  colors: AppColor
  roundness: number
}

// Material2 Color
export interface AppColor {
  primary: string
  secondary: string
  background: string
  surface: string
  error: string
  container: string
  onPrimary: string
  onSecondary: string
  onBackground: string
  onSurface: string
  onError: string
  onContainer: string
}

export type Font = {
  fontSize?: number | undefined
  fontFamily: string
  fontWeight?:
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
  fontStyle?: 'normal' | 'italic' | undefined
}

export enum FontVariant {
  displayLarge = 'displayLarge',
  displayMedium = 'displayMedium',
  displaySmall = 'displaySmall',

  headlineLarge = 'headlineLarge',
  headlineMedium = 'headlineMedium',
  headlineSmall = 'headlineSmall',

  titleLarge = 'titleLarge',
  titleMedium = 'titleMedium',
  titleSmall = 'titleSmall',

  labelLarge = 'labelLarge',
  labelMedium = 'labelMedium',
  labelSmall = 'labelSmall',

  bodyLarge = 'bodyLarge',
  bodyMedium = 'bodyMedium',
  bodySmall = 'bodySmall',
}

export type AppFonts = {
  [K in FontVariant]: Font
}
