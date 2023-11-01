import {Bell, Mail} from 'assets/icons'
import {
  Button,
  Center,
  Column,
  ConfirmPopup,
  Divider,
  LoadingPopup,
  Menu,
  MenuItem,
  RadioButtonGroup,
  RadioButtonItem,
  Row,
  Screen,
  usePopup,
} from 'components'
import {useAppTheme} from 'components/theme'
import {useState} from 'react'
import { ActivityIndicator } from 'react-native'

const ModalControllerScreen = () => {
  const {push, pop} = usePopup()
  const [option, setOption] = useState<string>()
  const {colors, roundness} = useAppTheme()

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

  return (
    <Screen>
      <Center style={{flex: 1, gap: 16}}>
        <Row style={{gap: 64}}>
          <Menu
            Anchor={({onRequestOpen}) => (
              <Button title="Left menu" size="medium" mode="filled" onPress={onRequestOpen} />
            )}>
            <Column style={{backgroundColor: colors.surfaceContainer, borderRadius: roundness}}>
              <MenuItem title="Left menu" Leading={Mail} Trailing={Bell} />
              <Divider />
              <MenuItem title="Log out" Leading={Mail} Trailing={Bell} />
            </Column>
          </Menu>

          <Menu
            Anchor={({onRequestOpen}) => (
              <Button title="Right menu" size="medium" mode="filled" onPress={onRequestOpen} />
            )}>
            <Column style={{backgroundColor: colors.surfaceContainer, borderRadius: roundness}}>
              <MenuItem title="Right menu" Leading={Mail} Trailing={Bell} />
              <Divider />
              <MenuItem title="Log out" Leading={Mail} Trailing={Bell} />
            </Column>
          </Menu>
        </Row>

        <Button title="Confirm popup" onPress={sendConfirm} />

        <Button title="Loading popup" onPress={sendLoading} />

        <Menu
          Anchor={({onRequestOpen}) => (
            <Button
              title={option ? option : 'Select option'}
              mode="outlined"
              onPress={onRequestOpen}
            />
          )}>
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
        </Menu>
      </Center>
    </Screen>
  )
}

export default ModalControllerScreen
