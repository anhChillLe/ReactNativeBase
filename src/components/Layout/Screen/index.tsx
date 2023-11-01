import {useHeaderHeight} from '@react-navigation/elements'
import Fill from 'components/Layout/Fill'
import KeyboardDismiss from 'components/Layout/KeyboardDismiss'
import {useAppTheme} from 'components/theme'
import {ScreenProps} from 'components/types'
import {FC} from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native'

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
  const headerHeight = useHeaderHeight()

  const Container = scrollable ? ScrollView : dismissKeyboard ? KeyboardDismiss : Fill

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={background}
        barStyle={isDark ? 'light-content' : 'dark-content'}
      />
      {appBar}
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={headerHeight}>
        <Container style={[styles.container, style]} {...props}>
          {children}
        </Container>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Screen
