import {NavigationContainer} from '@react-navigation/native'
import {DefaultLightTheme, ThemeProvider, useNavigationTheme} from 'components/theme'
import MainDrawer from 'navigations/main_drawer'
import React from 'react'
import 'react-native-gesture-handler'

const App = () => {
  const navTheme = useNavigationTheme()

  return (
    <ThemeProvider value={DefaultLightTheme}>
      <NavigationContainer theme={navTheme}>
        <MainDrawer />
      </NavigationContainer>
    </ThemeProvider>
  )
}
export default App
