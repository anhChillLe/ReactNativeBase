import { Mail } from 'assets/icons'
import { Button, Card, Center, Column, Fill, Row, Screen, Switch, Text } from 'components'
import { ButtonMode, ButtonSize, ButtonVariant } from 'components/types'
import { useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'

const variants: ButtonVariant[] = ['primary', 'secondary', 'tertiary', 'error', 'normal']
const modes: ButtonMode[] = ['filled', 'filled-total', 'outlined', 'empty']
const sizes: ButtonSize[] = ['small', 'medium', 'large']

const ButtonScreen = () => {
  const [size, setSize] = useState<ButtonSize>('medium')
  const [mode, setMode] = useState<ButtonMode>('filled')
  const [variant, setVariant] = useState<ButtonVariant>('primary')
  const [isLoading, setLoading] = useState(false)
  const [showIcon, setShowIcon] = useState(false)
  const [disable, setDisable] = useState(false)

  return (
    <Screen scrollable contentContainerStyle={{paddingHorizontal: 16, gap: 8}}>
      <Center style={{padding: 32}}>
        <Button
          Icon={showIcon ? Mail : undefined}
          loading={isLoading}
          disabled={disable}
          variant={variant}
          mode={mode}
          size={size}
          title="Show modal"
        />
      </Center>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{alignItems: 'center', gap: 8}}>
        {variants.map(vr => {
          return (
            <Button
              key={vr}
              mode="outlined"
              variant={variant == vr ? 'primary' : 'normal'}
              title={vr}
              onPress={() => setVariant(vr)}
            />
          )
        })}
      </ScrollView>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{alignItems: 'center', gap: 8}}>
        {modes.map(md => {
          return (
            <Button
              key={md}
              mode="outlined"
              variant={mode == md ? 'primary' : 'normal'}
              title={md}
              onPress={() => setMode(md)}
            />
          )
        })}
      </ScrollView>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{alignItems: 'center', gap: 8}}>
        {sizes.map(si => {
          return (
            <Button
              key={si}
              mode="outlined"
              variant={size == si ? 'primary' : 'normal'}
              title={si}
              onPress={() => setSize(si)}
            />
          )
        })}
      </ScrollView>

      <Column style={{gap: 8, paddingVertical: 8}}>
        <Card mode="outlined" style={styles.card}>
          <Text variant="titleMedium">Isloading</Text>
          <Fill />
          <Switch value={isLoading} onValueChange={setLoading} />
        </Card>
        <Card mode="outlined" style={styles.card}>
          <Text variant="titleMedium">Show Icon</Text>
          <Fill />
          <Switch value={showIcon} onValueChange={setShowIcon} />
        </Card>
        <Card mode="outlined" style={styles.card}>
          <Text variant="titleMedium">Disable</Text>
          <Fill />
          <Switch value={disable} onValueChange={setDisable} />
        </Card>
      </Column>

      <Column style={{gap: 16, alignItems: 'stretch', justifyContent: 'space-between'}}>
        {variants.map(variant => {
          return (
            <Row key={variant} style={{alignItems: 'center', justifyContent: 'space-between'}}>
              {modes.map(mode => {
                return <Button key={mode} {...{variant, mode}} size="small" title="Click me" />
              })}
            </Row>
          )
        })}
      </Column>
    </Screen>
  )
}

const styles = StyleSheet.create({
  card: {alignItems: 'center', flexDirection: 'row', gap: 16, padding: 16},
})

export default ButtonScreen
