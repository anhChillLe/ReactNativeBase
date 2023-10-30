import { NavigationContainer } from '@react-navigation/native'
import { ModalProvider, ThemeProvider } from 'components'
import { useNavigationTheme } from 'components/theme'
import MainDrawer from 'navigations/main_drawer'
import React from 'react'
import 'react-native-gesture-handler'

const App = () => {
  return (
    <ThemeProvider>
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
