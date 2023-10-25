import {Button, Center, Fill} from 'components'
import {hidePopup, showPopup} from 'components/Provider/PopupProvider'
import {ActivityIndicator, SafeAreaView, Text} from 'react-native'

const ModalControllerScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Center style={{flex: 1, gap: 16}}>
        <Button
          title="Open modal"
          onPress={() => {
            showPopup(
              <Center style={{backgroundColor: 'white', padding: 128, borderRadius: 16}}>
                <ActivityIndicator size='large'/>
              </Center>,
            )
          }}
        />

        <Button
          title="Close modal"
          onPress={hidePopup}
        />
      </Center>
    </SafeAreaView>
  )
}

export default ModalControllerScreen
