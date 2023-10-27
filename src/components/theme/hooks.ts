import { Theme } from "@react-navigation/native"
import ThemeContext from "components/Provider/Theme/theme_provider"
import { useContext } from "react"

export const useAppTheme = (overideTheme?: AppTheme): AppTheme => {
  const theme = useContext(ThemeContext)
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

export const useNavigationTheme = () => {
  const {isDark, colors} = useContext(ThemeContext)
  const navigationTheme: Theme = {
    dark: isDark,
    colors: {
      primary: colors.primary,
      background: colors.background,
      card: colors.background,
      text: colors.onBackground,
      border: colors.surface,
      notification: colors.tertiary,
    },
  }
  return navigationTheme
}