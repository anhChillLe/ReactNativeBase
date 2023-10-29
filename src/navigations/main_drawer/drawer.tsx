import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { CommonActions, DrawerActions, useNavigation } from '@react-navigation/native'
import { Button, Card, Column, Row, Screen, Text } from 'components'
import { useAppTheme, useThemeControl } from 'components/theme'

export const DrawerLayout = ({descriptors, navigation, state}: DrawerContentComponentProps) => {
  const {colors} = useAppTheme()
  return (
    <Screen scrollable contentContainerStyle={{gap: 8}}>
      <Card mode="filled" style={{padding: 16, marginHorizontal: 8, marginTop: 16}}>
        <Text variant="headlineMedium" style={{fontWeight: '600', color: colors.primary}}>
          React native base
        </Text>
        <Text variant="bodyMedium" style={{fontWeight: '400', color: colors.secondary}}>
          Base component using Material3 template
        </Text>
      </Card>
      <DarkModeSelect />
      {/* <DrawerItemList {...{descriptors, navigation, state}} /> */}
      <Column style={{marginHorizontal: 8, gap: 8}}>
        {
          state.routes.map((route, index) => {
            const focused = index === state.index
            const onPress = () => {
              const event = navigation.emit({
                type: 'drawerItemPress',
                target: route.key,
                canPreventDefault: true,
              })

              if (!event.defaultPrevented) {
                navigation.dispatch({
                  ...(focused
                    ? DrawerActions.closeDrawer()
                    : CommonActions.navigate({name: route.name, merge: true})),
                  target: state.key,
                })
              }
            }

            const {title, drawerLabel} = descriptors[route.key].options

            return (
              <Button
                key={route.key}
                mode={focused ? 'filled-total' : 'empty'}
                variant='normal'
                title={drawerLabel?.toString() ?? title ?? route.name}
                style={{justifyContent: 'flex-start'}}
                onPress={onPress}
              />
            )
          }) as React.ReactNode as React.ReactElement
        }
      </Column>
    </Screen>
  )
}

const DarkModeSelect = () => {
  const {colorScheme, setColorScheme} = useThemeControl()
  const navigation = useNavigation()
  return (
    <Row style={{alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 8, gap: 8}}>
      <Button
        title="Dark"
        variant={colorScheme == 'dark' ? 'primary' : 'normal'}
        mode="filled-total"
        style={{flex: 1}}
        onPress={() => {
          navigation.dispatch({
            ...DrawerActions.closeDrawer(),
          })
          setColorScheme('dark')
        }}
      />
      <Button
        title="Light"
        variant={colorScheme == 'light' ? 'primary' : 'normal'}
        mode="filled-total"
        style={{flex: 1}}
        onPress={() => {
          navigation.dispatch({
            ...DrawerActions.closeDrawer(),
          })
          setColorScheme('light')
        }}
      />
      <Button
        title="System"
        variant={colorScheme == 'system' ? 'primary' : 'normal'}
        mode="filled-total"
        style={{flex: 1}}
        onPress={() => {
          navigation.dispatch({
            ...DrawerActions.closeDrawer(),
          })
          setColorScheme('system')
        }}
      />
    </Row>
  )
}
