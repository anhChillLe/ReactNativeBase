import { theme1, themeConvert } from 'components/theme/ThemeData'
const themes = themeConvert(theme1)
export const appLightTheme: AppTheme = themes.light
export const appDarkTheme: AppTheme = themes.dark
