import {createContext, useContext} from 'react'
import {AppColor, AppFonts, AppTheme, FontVariant} from './theme'
import {Theme} from '@react-navigation/native'
import {Colors} from 'react-native/Libraries/NewAppScreen'

const typography: AppFonts = {
  [FontVariant.displayLarge]: {
    fontSize: undefined,
    fontFamily: '',
    fontWeight: undefined,
    fontStyle: undefined,
  },
  [FontVariant.displayMedium]: {
    fontSize: undefined,
    fontFamily: '',
    fontWeight: undefined,
    fontStyle: undefined,
  },
  [FontVariant.displaySmall]: {
    fontSize: undefined,
    fontFamily: '',
    fontWeight: undefined,
    fontStyle: undefined,
  },
  [FontVariant.headlineLarge]: {
    fontSize: undefined,
    fontFamily: '',
    fontWeight: undefined,
    fontStyle: undefined,
  },
  [FontVariant.headlineMedium]: {
    fontSize: undefined,
    fontFamily: '',
    fontWeight: undefined,
    fontStyle: undefined,
  },
  [FontVariant.headlineSmall]: {
    fontSize: undefined,
    fontFamily: '',
    fontWeight: undefined,
    fontStyle: undefined,
  },
  [FontVariant.titleLarge]: {
    fontSize: undefined,
    fontFamily: '',
    fontWeight: undefined,
    fontStyle: undefined,
  },
  [FontVariant.titleMedium]: {
    fontSize: undefined,
    fontFamily: '',
    fontWeight: undefined,
    fontStyle: undefined,
  },
  [FontVariant.titleSmall]: {
    fontSize: undefined,
    fontFamily: '',
    fontWeight: undefined,
    fontStyle: undefined,
  },
  [FontVariant.labelLarge]: {
    fontSize: undefined,
    fontFamily: '',
    fontWeight: undefined,
    fontStyle: undefined,
  },
  [FontVariant.labelMedium]: {
    fontSize: undefined,
    fontFamily: '',
    fontWeight: undefined,
    fontStyle: undefined,
  },
  [FontVariant.labelSmall]: {
    fontSize: undefined,
    fontFamily: '',
    fontWeight: undefined,
    fontStyle: undefined,
  },
  [FontVariant.bodyLarge]: {
    fontSize: undefined,
    fontFamily: '',
    fontWeight: undefined,
    fontStyle: undefined,
  },
  [FontVariant.bodyMedium]: {
    fontSize: undefined,
    fontFamily: '',
    fontWeight: undefined,
    fontStyle: undefined,
  },
  [FontVariant.bodySmall]: {
    fontSize: undefined,
    fontFamily: '',
    fontWeight: undefined,
    fontStyle: undefined,
  },
}

const lightColors: AppColor = {
  primary: '#6200EE',
  secondary: '#03DAC6',
  background: '#FFFFFF',
  surface: '#999999',
  error: '#B00020',
  onPrimary: '#FFFFFF',
  onSecondary: '#FFFFFF',
  onBackground: '#000000',
  onSurface: '#FFFFFF',
  onError: '#FFFFFF',
}

const appLightTheme: AppTheme = {
  isDark: false,
  typography: typography,
  colors: lightColors,
  roundness: 8,
}

const ThemeContext = createContext<AppTheme>(appLightTheme)

const useAppTheme = () => {
  const theme = useContext(ThemeContext)
  return theme
}

const useNavigationTheme = () => {
  const {isDark, colors} = useContext(ThemeContext)
  const navigationTheme: Theme = {
    dark: isDark,
    colors: {
      primary: colors.primary,
      background: colors.background,
      card: colors.surface,
      text: colors.onBackground,
      border: colors.surface,
      notification: colors.primary,
    },
  }
  return navigationTheme
}

export default ThemeContext
export {appLightTheme as DefaultLightTheme, useAppTheme, useNavigationTheme}
