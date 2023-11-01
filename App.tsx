import {ModalProvider, ThemeProvider} from 'components'
import RootNavigation from 'navigations/root'
import React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context'

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <ModalProvider>
          <RootNavigation />
        </ModalProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default App
