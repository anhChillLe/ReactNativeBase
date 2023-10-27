import {Button, Center, Screen} from 'components'
import {PopupController} from 'components/Provider/GlobalModal'
import { useAppTheme } from 'components/theme'
import {Dimensions, SafeAreaView, Text} from 'react-native'

const ModalControllerScreen = () => {
  const showConfirm = () => {
    PopupController.push({
      timeout: 2000,
      position: 'top',
      dismissable: true,
      element: <Popup key={0} />,
    })
  }

  return (
    <Screen>
      <Center style={{flex: 1, gap: 16}}>
        <Button title="Open modal" onPress={showConfirm} />
      </Center>
    </Screen>
  )
}

export default ModalControllerScreen

const Popup = () => {
  const {isDark, colors: {primary, onPrimary}} = useAppTheme()
  return (
    <Center
      style={{
        backgroundColor: primary,
        width: Dimensions.get('window').width - 16,
        borderRadius: 8,
        gap: 16,
        padding: 16,
        alignItems: 'stretch',
      }}>
      <Text style={{fontSize: 16, fontWeight: '500', color: onPrimary}}>Login success</Text>
    </Center>
  )
}
