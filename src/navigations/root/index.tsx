import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {useNavigationTheme} from 'components/theme'
import MainDrawer from 'navigations/main_drawer'

const RootStack = createNativeStackNavigator()

const RootNavigation = () => {
  const navTheme = useNavigationTheme()
  return (
    <NavigationContainer theme={navTheme}>
      <RootStack.Navigator>
        <RootStack.Screen name='drawer' component={MainDrawer} options={{headerShown: false}}/>
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation