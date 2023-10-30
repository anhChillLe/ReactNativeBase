import { createDrawerNavigator } from '@react-navigation/drawer'
import { Bell, Mail, Menu as MenuDrawer, MoreVert } from 'assets/icons'
import { Column, Divider, IconButton, MenuItem, PositionPopup, Row } from 'components'
import { DrawerLayout } from 'navigations/main_drawer/drawer'
import ButtonScreen from 'screens/button'
import CardScreen from 'screens/card'
import CheckBoxScreen from 'screens/checkbox'
import ChipScreen from 'screens/chip'
import IconButtonScreen from 'screens/iconButton'
import ModalControllerScreen from 'screens/modal'
import TextScreen from 'screens/text'
import TextFieldScreen from 'screens/textfield'
import ThemePickerScreen from 'screens/theme'

const Drawer = createDrawerNavigator()

const MainDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="modal"
      screenOptions={({navigation}) => ({
        headerTitleAlign: 'left',
        headerLeft: () => (
          <IconButton
            Icon={MenuDrawer}
            size="medium"
            mode="empty"
            variant="normal"
            onPress={navigation.toggleDrawer}
          />
        ),
        headerRight: () => (
          <Row>
            <IconButton Icon={Mail} size="medium" mode="empty" variant="normal" />
            <IconButton Icon={Bell} size="medium" mode="empty" variant="normal" />
            <PositionPopup
              dismissable
              Anchor={({onRequestOpen}) => (
                <IconButton
                  onPress={onRequestOpen}
                  Icon={MoreVert}
                  size="medium"
                  mode="empty"
                  variant="normal"
                />
              )}>
              <Column>
                <MenuItem title='Change password' Leading={Mail} Trailing={Bell}/>
                <Divider />
                <MenuItem title='Logout' Leading={Mail} Trailing={Bell}/>
              </Column>
            </PositionPopup>
          </Row>
        ),
      })}
      drawerContent={DrawerLayout}>
      <Drawer.Screen name="button" component={ButtonScreen} options={{title: 'Button'}} />
      <Drawer.Screen
        name="iconButton"
        component={IconButtonScreen}
        options={{title: 'Icon Button'}}
      />
      <Drawer.Screen name="textfield" component={TextFieldScreen} options={{title: 'TextField'}} />
      <Drawer.Screen name="popup" component={ModalControllerScreen} options={{title: 'Modal'}} />
      <Drawer.Screen name="checkbox" component={CheckBoxScreen} options={{title: 'Checkbox'}} />
      <Drawer.Screen name="text" component={TextScreen} options={{title: 'Typography'}} />
      <Drawer.Screen name="card" component={CardScreen} options={{title: 'Card'}} />
      <Drawer.Screen name="chip" component={ChipScreen} options={{title: 'Chip'}} />
      <Drawer.Screen name="theme" component={ThemePickerScreen} options={{title: 'Theme picker'}} />
    </Drawer.Navigator>
  )
}

export default MainDrawer
