import {appDarkTheme, appLightTheme} from 'components/theme/default_theme'
import {FC, PropsWithChildren, createContext, useState} from 'react'
import {useColorScheme} from 'react-native'

type ColorScheme = 'dark' | 'light' | 'system'
interface AppStyle {
  theme: AppTheme
  setTheme: (themes: {light: AppTheme; dark: AppTheme}) => void
  colorScheme: ColorScheme
  setColorScheme: (status: ColorScheme) => void
}
type ThemeProviderProps = PropsWithChildren<{
  themeLight?: AppTheme
  themeDark?: AppTheme
  defaultColorScheme?: ColorScheme
}>

const default_style: AppStyle = {
  theme: appLightTheme,
  setTheme: () => {
    throw new Error('ThemeContext is not provided, please wrap your app with ThemeProvider')
  },
  colorScheme: 'light',
  setColorScheme: () => {
    throw new Error('ThemeContext is not provided, please wrap your app with ThemeProvider')
  },
}

export const ThemeContext = createContext<AppStyle>(default_style)

const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  themeLight = appLightTheme,
  themeDark = appDarkTheme,
  defaultColorScheme = 'light',
}) => {
  const systemColorScheme = useColorScheme() ?? 'light'

  const [theme, setTheme] = useState<{light: AppTheme; dark: AppTheme}>({
    light: themeLight,
    dark: themeDark,
  })

  const [colorScheme, setColorScheme] = useState<ColorScheme>(defaultColorScheme)

  const clscheme = colorScheme == 'system' ? systemColorScheme : colorScheme 

  const appStyle: AppStyle = {
    theme: theme[clscheme],
    setTheme,
    colorScheme,
    setColorScheme,
  }
  return <ThemeContext.Provider value={appStyle}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
