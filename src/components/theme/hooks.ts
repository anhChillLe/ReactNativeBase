import { Theme } from '@react-navigation/native'
import { ThemeContext } from 'components/Provider/Theme'
import { useContext, useMemo } from 'react'
import { ImageStyle, TextStyle, ViewStyle } from 'react-native'

export const useAppTheme = (overideTheme?: Partial<AppTheme>): AppTheme => {
  const {theme} = useContext(ThemeContext)
  return overideTheme
    ? {
        ...theme,
        ...overideTheme,
        colors: {
          ...theme.colors,
          ...overideTheme?.colors,
        },
        typography: {
          ...theme.typography,
          ...overideTheme?.typography,
        },
      }
    : theme
}

export const useThemeControl = () => {
  return useContext(ThemeContext)
}

export const useNavigationTheme = () => {
  const {
    theme: {isDark, colors},
  } = useContext(ThemeContext)

  const navigationTheme: Theme = {
    dark: isDark,
    colors: {
      primary: colors.primary,
      background: colors.background,
      card: colors.background,
      text: colors.onBackground,
      border: colors.surfaceVariant,
      notification: colors.tertiary,
    },
  }
  return navigationTheme
}

export const useMemoStyle = (inputStyle: ViewStyle | TextStyle | ImageStyle) => {
  const appStyle = useThemeControl()
  const style = useMemo(() => inputStyle, [appStyle])
  return style
}
