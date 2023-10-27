import {Theme} from '@react-navigation/native'
import {theme, theme2, theme3} from './themeData'

const {schemes: colors, styles: typography} = theme3

const baseTheme = {
  typography: {
    displaySmall: typography.display.small,
    displayMedium: typography.display.medium,
    displayLarge: typography.display.large,
    headlineSmall: typography.headline.small,
    headlineMedium: typography.headline.medium,
    headlineLarge: typography.headline.large,
    bodySmall: typography.body.small,
    bodyMedium: typography.body.medium,
    bodyLarge: typography.body.large,
    labelSmall: typography.label.small,
    labelMedium: typography.label.medium,
    labelLarge: typography.label.large,
    titleSmall: typography.title.small,
    titleMedium: typography.title.medium,
    titleLarge: typography.title.large,
  },
  roundness: 8,
}

export const appLightTheme: AppTheme = {
  ...baseTheme,
  isDark: false,
  colors: colors.light,
}

export const appDarkTheme: AppTheme = {
  ...baseTheme,
  isDark: true,
  colors: colors.dark,
}

export const navigationLightTheme: Theme = {
  dark: false,
  colors: {
    primary: colors.light.primary,
    background: colors.light.background,
    card: colors.light.surface,
    text: colors.light.onBackground,
    border: colors.light.outline,
    notification: colors.light.tertiary,
  },
}

export const navigationDarkTheme: Theme = {
  dark: true,
  colors: {
    primary: colors.dark.primary,
    background: colors.dark.background,
    card: colors.dark.surface,
    text: colors.dark.onBackground,
    border: colors.dark.outline,
    notification: colors.dark.tertiary,
  },
}
