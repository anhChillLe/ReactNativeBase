import {createDrawerNavigator} from '@react-navigation/drawer'
import ButtonScreen from 'screens/button'

const Drawer = createDrawerNavigator()

const MainDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="button"  component={ButtonScreen} options={{title: 'Button'}}/>
    </Drawer.Navigator>
  )
}

export default MainDrawer
