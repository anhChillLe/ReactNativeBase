import {AppColor, AppFonts, AppTheme, FontVariant} from './theme'
import ThemeContext, {DefaultLightTheme, useAppTheme, useNavigationTheme} from './theme_provider'

export type {AppColor, AppFonts, AppTheme, FontVariant}
export const ThemeProvider = ThemeContext.Provider
export {DefaultLightTheme, ThemeContext, useAppTheme, useNavigationTheme}
