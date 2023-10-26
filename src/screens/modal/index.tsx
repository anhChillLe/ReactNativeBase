import {Button, Center} from 'components'
import {PopupController} from 'components/Provider/GlobalModal'
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
    <SafeAreaView style={{flex: 1}}>
      <Center style={{flex: 1, gap: 16}}>
        <Button title="Open modal" onPress={showConfirm} />
      </Center>
    </SafeAreaView>
  )
}

export default ModalControllerScreen

const Popup = () => {
  return (
    <Center
      style={{
        backgroundColor: 'green',
        width: Dimensions.get('window').width - 16,
        borderRadius: 8,
        gap: 16,
        padding: 16,
        alignItems: 'stretch',
        shadowOffset: {
          height: 2,
          width: 2
        },
        shadowRadius: 8,
        shadowColor: 'green',
        shadowOpacity: 0.5
      }}>
      <Text style={{fontSize: 16, fontWeight: '500', color: 'white'}}>Login success</Text>
    </Center>
  )
}
