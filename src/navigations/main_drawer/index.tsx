import {createDrawerNavigator} from '@react-navigation/drawer'
import ButtonScreen from 'screens/button'
import TextFieldScreen from 'screens/textfield'

const Drawer = createDrawerNavigator()

const MainDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="button" component={ButtonScreen} options={{title: 'Button'}} />
      <Drawer.Screen name="textfield" component={TextFieldScreen} options={{title: 'TextField'}} />
    </Drawer.Navigator>
  )
}

export default MainDrawer
