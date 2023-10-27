import { appLightTheme } from 'components/theme/default_theme'
import { createContext } from 'react'

const ThemeContext = createContext<AppTheme>(appLightTheme)

export default ThemeContext