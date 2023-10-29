import { Button, Column, Fill, Row, Screen, Text } from 'components'
import { useThemeControl } from 'components/theme'
import { JSONTheme, themeConvert } from 'components/theme/ThemeData'
import { Pressable, StyleSheet, View, useColorScheme } from 'react-native'

import {
  theme1,
  theme2,
  theme3,
  theme4,
  theme5,
  theme6,
  theme7,
  theme8,
} from 'components/theme/ThemeData'

const themes: JSONTheme[] = [theme1, theme2, theme3, theme4, theme5, theme6, theme7, theme8]

const ThemePickerScreen = () => {
  const systemColorScheme = useColorScheme() ?? 'light'
  const {setTheme, colorScheme} = useThemeControl()
  const scheme = colorScheme == 'system' ? systemColorScheme : colorScheme

  return (
    <Screen scrollable contentContainerStyle={{gap: 64, padding: 16}}>
      {themes.map((theme, index) => {
        const themes = themeConvert(theme)
        return (
          <Column key={index} style={{gap: 16}}>
            <Text variant="headlineMedium">Theme {index + 1}</Text>
            <ThemeRow theme={themes[scheme]} />
            <Row>
              <Fill />
              <Button
                mode="filled-total"
                theme={themes[scheme]}
                title="Use this theme"
                onPress={() => {
                  setTheme(themes)
                }}
              />
            </Row>
          </Column>
        )
      })}
    </Screen>
  )
}

const ThemeRow = ({theme}: {theme: AppTheme}) => {
  const colors = Object.values(theme.colors)

  return (
    <Pressable>
      <Row style={{flexWrap: 'wrap', justifyContent: 'space-between', gap: 16}}>
        {colors.map((color, index) => (
          <View
            key={index}
            style={[
              styles.color,
              {
                backgroundColor: color,
                borderWidth: 0.5,
                borderColor: theme.colors.surfaceContainerHighest,
              },
            ]}
          />
        ))}
      </Row>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  color: {width: 32, height: 32, borderRadius: 4, aspectRatio: 1},
})

export default ThemePickerScreen
