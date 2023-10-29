import theme1 from './theme1.json'
import theme2 from './theme2.json'
import theme3 from './theme3.json'
import theme4 from './theme4.json'
import theme5 from './theme5.json'
import theme6 from './theme6.json'
import theme7 from './theme7.json'
import theme8 from './theme8.json'

export {theme1, theme2, theme3, theme4, theme5, theme6, theme7, theme8}
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

type FontSize = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'

interface JsonFontStyle {
  fontFamilyName: string
  fontFamilyStyle: string
  fontWeight: number | string
  fontSize: number
  lineHeight: number
  letterSpacing: number
}

interface Styles {
  large: JsonFontStyle
  medium: JsonFontStyle
  small: JsonFontStyle
}

export interface JSONTheme {
  schemes: {
    light: ColorScheme
    dark: ColorScheme
    [key: string]: any
  }
  palettes?: any
  styles: {
    display: Styles
    headline: Styles
    body: Styles
    label: Styles
    title: Styles
  }
  [key: string]: any
}

export const themeConvert = (theme: JSONTheme): {light: AppTheme; dark: AppTheme} => {
  const {schemes: colors, styles: typography} = theme

  const baseTheme = {
    typography: {
      displaySmall: fontStyleConvert(typography.display.small),
      displayMedium: fontStyleConvert(typography.display.medium),
      displayLarge: fontStyleConvert(typography.display.large),
      headlineSmall: fontStyleConvert(typography.headline.small),
      headlineMedium: fontStyleConvert(typography.headline.medium),
      headlineLarge: fontStyleConvert(typography.headline.large),
      bodySmall: fontStyleConvert(typography.body.small),
      bodyMedium: fontStyleConvert(typography.body.medium),
      bodyLarge: fontStyleConvert(typography.body.large),
      labelSmall: fontStyleConvert(typography.label.small),
      labelMedium: fontStyleConvert(typography.label.medium),
      labelLarge: fontStyleConvert(typography.label.large),
      titleSmall: fontStyleConvert(typography.title.small),
      titleMedium: fontStyleConvert(typography.title.medium),
      titleLarge: fontStyleConvert(typography.title.large),
    },
    roundness: 8,
  }

  const appLightTheme: AppTheme = {
    ...baseTheme,
    isDark: false,
    colors: colors.light,
  }

  const appDarkTheme: AppTheme = {
    ...baseTheme,
    isDark: true,
    colors: colors.dark,
  }

  return {
    light: appLightTheme,
    dark: appDarkTheme,
  }
}

const fontStyleConvert = (style: JsonFontStyle): FontStyle => {
  return {
    fontFamily: style.fontFamilyName,
    fontWeight: style.fontWeight.toString() as FontSize,
    fontSize: style.fontSize,
    lineHeight: style.lineHeight,
    letterSpacing: style.letterSpacing,
  }
}
