import { NavigationContainer } from '@react-navigation/native'
import { ModalProvider, ThemeProvider } from 'components'
import { useNavigationTheme } from 'components/theme'
import { appDarkTheme, appLightTheme } from 'components/theme/default_theme'
import MainDrawer from 'navigations/main_drawer'
import React from 'react'
import { useColorScheme } from 'react-native'
import 'react-native-gesture-handler'

const App = () => {
  const colorScheme = useColorScheme()

  return (
    <ThemeProvider defaultTheme={colorScheme == 'light' ? appLightTheme : appDarkTheme}>
      <ModalProvider>
        <RootNavigation />
      </ModalProvider>
    </ThemeProvider>
  )
}

const RootNavigation = () => {
  const navTheme = useNavigationTheme()
  return (
    <NavigationContainer theme={navTheme}>
      <MainDrawer />
    </NavigationContainer>
  )
}

export default App
