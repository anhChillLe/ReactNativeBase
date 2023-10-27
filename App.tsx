import {NavigationContainer} from '@react-navigation/native'
import GlobalPopup from 'components/Provider/GlobalModal'
import {ThemeProvider, useNavigationTheme} from 'components/theme'
import {appDarkTheme, appLightTheme} from 'components/theme/default_theme'
import MainDrawer from 'navigations/main_drawer'
import React from 'react'
import {useColorScheme} from 'react-native'
import 'react-native-gesture-handler'

const App = () => {
  const colorScheme = useColorScheme()

  return (
    <ThemeProvider value={colorScheme == 'light' ? appLightTheme : appDarkTheme}>
      <RootNavigation />
      <GlobalPopup />
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
