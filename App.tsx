import { ModalProvider, ThemeProvider } from 'components'
import RootNavigation from 'navigations/root'
import React from 'react'

const App = () => {
  return (
    <ThemeProvider>
      <ModalProvider>
        <RootNavigation />
      </ModalProvider>
    </ThemeProvider>
  )
}

export default App
