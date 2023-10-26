import {createDrawerNavigator} from '@react-navigation/drawer'
import ButtonScreen from 'screens/button'
import CheckBoxScreen from 'screens/checkbox'
import IconButtonScreen from 'screens/iconButton'
import ModalControllerScreen from 'screens/modal'
import TextFieldScreen from 'screens/textfield'

const Drawer = createDrawerNavigator()

const MainDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName='popup'>
      <Drawer.Screen name="button" component={ButtonScreen} options={{title: 'Button'}} />
      <Drawer.Screen name="iconButton" component={IconButtonScreen} options={{title: 'Icon Button'}} />
      <Drawer.Screen name="textfield" component={TextFieldScreen} options={{title: 'TextField'}} />
      <Drawer.Screen name="popup" component={ModalControllerScreen} options={{title: 'Modal'}} />
      <Drawer.Screen name="checkbox" component={CheckBoxScreen} options={{title: 'Checkbox'}} />
    </Drawer.Navigator>
  )
}

export default MainDrawer
