import {createDrawerNavigator} from '@react-navigation/drawer'
import ButtonScreen from 'screens/button'
import ModalControllerScreen from 'screens/modal'
import TextFieldScreen from 'screens/textfield'

const Drawer = createDrawerNavigator()

const MainDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName='popup'>
      <Drawer.Screen name="button" component={ButtonScreen} options={{title: 'Button'}} />
      <Drawer.Screen name="textfield" component={TextFieldScreen} options={{title: 'TextField'}} />
      <Drawer.Screen name="popup" component={ModalControllerScreen} options={{title: 'Modal'}} />
    </Drawer.Navigator>
  )
}

export default MainDrawer
