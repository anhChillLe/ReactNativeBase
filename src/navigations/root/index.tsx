import { NavigationContainer } from "@react-navigation/native"
import { useNavigationTheme } from "components/theme"
import MainDrawer from "navigations/main_drawer"

const RootNavigation = () => {
  const navTheme = useNavigationTheme()
  return (
    <NavigationContainer theme={navTheme}>
      <MainDrawer />
    </NavigationContainer>
  )
}

export default RootNavigation