import {Bell, Mail} from 'assets/icons'
import {
  Button,
  Center,
  Column,
  ConfirmPopup,
  Divider,
  LoadingPopup,
  MenuItem,
  PosisionModalLayout,
  RadioButtonGroup,
  RadioButtonItem,
  Row,
  Screen,
  usePopup,
} from 'components'
import {useAppTheme} from 'components/theme'
import {useRef, useState} from 'react'
import {GestureResponderEvent, TouchableOpacity} from 'react-native'

const ModalControllerScreen = () => {
  const {push, pop} = usePopup()
  const [option, setOption] = useState<string>()
  const {colors, roundness} = useAppTheme()
  const selectionRef = useRef<TouchableOpacity>(null)
  const leftRef = useRef<TouchableOpacity>(null)
  const rightRef = useRef<TouchableOpacity>(null)

  const sendConfirm = () => {
    push({
      position: 'center',
      dismissable: true,
      element: (
        <ConfirmPopup
          Icon={Mail}
          title="Confirm popup"
          message="Please confirm"
          positive={{
            title: 'OK',
            onPress: pop,
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
    push({
      position: 'center',
      dismissable: true,
      element: <LoadingPopup />,
    })
  }

  const sendSelection = () => {
    selectionRef.current?.measureInWindow((x, y, width, height) => {
      push({
        dismissable: true,
        transparent: true,
        element: (
          <PosisionModalLayout anchorLayout={{x, y, width, height}}>
            <RadioButtonGroup
              onValueChanged={setOption}
              defaultVaulue={option}
              style={{
                backgroundColor: colors.surfaceContainer,
                borderRadius: roundness,
                alignItems: 'stretch',
              }}>
              <RadioButtonItem title="This is value 1" value="item1" style={{padding: 16}} />
              <Divider />
              <RadioButtonItem title="This is value 2" value="item2" style={{padding: 16}} />
              <Divider />
              <RadioButtonItem title="This is value 3" value="item3" style={{padding: 16}} />
            </RadioButtonGroup>
          </PosisionModalLayout>
        ),
      })
    })
  }

  const sendMenuLeft = () => {
    leftRef.current?.measureInWindow((x, y, width, height) => {
      push({
        dismissable: true,
        transparent: true,
        element: (
          <PosisionModalLayout anchorLayout={{x, y, width, height}}>
            <Column style={{backgroundColor: colors.surfaceContainer, borderRadius: roundness}}>
              <MenuItem title="Left menu" Leading={Mail} Trailing={Bell} />
              <Divider />
              <MenuItem title="Log out" Leading={Mail} Trailing={Bell} />
            </Column>
          </PosisionModalLayout>
        ),
      })
    })
  }

  const sendMenuRight = () => {
    rightRef.current?.measureInWindow((x, y, width, height) => {
      push({
        dismissable: true,
        transparent: true,
        element: (
          <PosisionModalLayout anchorLayout={{x, y, width, height}} anchorRef={leftRef}>
            <Column style={{backgroundColor: colors.surfaceContainer, borderRadius: roundness}}>
              <MenuItem title="Left menu" Leading={Mail} Trailing={Bell} />
              <Divider />
              <MenuItem title="Log out" Leading={Mail} Trailing={Bell} />
            </Column>
          </PosisionModalLayout>
        ),
      })
    })
  }

  return (
    <Screen>
      <Center style={{flex: 1, gap: 16}}>
        <Row style={{gap: 64}}>
          <Button
            ref={leftRef}
            title="Left menu"
            size="medium"
            mode="filled"
            variant="primary"
            onPress={sendMenuLeft}
          />

          <Button
            ref={rightRef}
            title="Right menu"
            size="medium"
            mode="filled"
            variant="primary"
            onPress={sendMenuRight}
          />
        </Row>

        <Button title="Confirm popup" onPress={sendConfirm} />
        
        <Button title="Loading popup" onPress={sendLoading} />

        <Button
          ref={selectionRef}
          title={option ? option : 'Select an option'}
          mode="outlined"
          onPress={sendSelection}
        />
      </Center>
    </Screen>
  )
}

export default ModalControllerScreen
