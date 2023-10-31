import {useAppTheme} from 'components/theme'
import {ScreenProps} from 'components/types'
import {FC} from 'react'
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, View} from 'react-native'

const Screen: FC<ScreenProps> = ({
  style,
  appBar,
  dismissKeyboard,
  scrollable,
  children,
  statusBarstyle,
  ...props
}) => {
  const {
    isDark,
    colors: {background},
  } = useAppTheme()
  const Container = scrollable ? ScrollView : View

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: background}]}>
      <StatusBar
        backgroundColor={background}
        barStyle={isDark ? 'light-content' : 'dark-content'}
      />
      {appBar}
      <Container
        style={[styles.container, style]}
        automaticallyAdjustKeyboardInsets
        {...props}>
        {children}
      </Container>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Screen
