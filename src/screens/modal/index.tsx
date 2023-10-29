import {Mail} from 'assets/icons'
import {Button, Center, ConfirmPopup, LoadingPopup, Screen, usePopup} from 'components'

const ModalControllerScreen = () => {
  const {push, pop} = usePopup()
  const sendConfirm = () => {
    return push({
      position: 'center',
      dismissable: true,
      element: (
        <ConfirmPopup
          Icon={Mail}
          title="Confirm popup"
          message="Please confirm"
          positive={{
            title: 'OK',
            onPress: () => {
              pop()
            },
          }}
          negative={{
            title: 'Cancel',
            onPress: pop,
          }}
        />
      ),
    })
  }

  const sendLoading = () => {
    return push({
      position: 'center',
      dismissable: true,
      element: <LoadingPopup />,
    })
  }

  return (
    <Screen>
      <Center style={{flex: 1, gap: 16}}>
        <Button title="Confirm popup" onPress={sendConfirm} />
        <Button title="Loading popup" onPress={sendLoading} />
      </Center>
    </Screen>
  )
}

export default ModalControllerScreen
