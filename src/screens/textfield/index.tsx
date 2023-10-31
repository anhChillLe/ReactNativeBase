import {Mail} from 'assets/icons'
import {Card, Center, Column, Fill, Screen, Switch, Text, TextField} from 'components'
import Button from 'components/Base/Button'
import Row from 'components/Layout/Row'
import {TextFieldMode, TextFieldVariant} from 'components/types'
import {useState} from 'react'
import {StyleSheet, View} from 'react-native'

const variants: TextFieldVariant[] = ['primary', 'error']
const modes: TextFieldMode[] = ['filled', 'outlined', 'underlined']

const TextFieldScreen = () => {
  const [mode, setMode] = useState<TextFieldMode>('filled')
  const [variant, setVariant] = useState<TextFieldVariant>('primary')
  const [showLeadingIcon, setShowLeadingIcon] = useState(false)
  const [showTrailingIcon, setShowTrailingIcon] = useState(false)
  const [multiline, setMultiline] = useState(false)
  const [disable, setDisable] = useState(false)

  return (
    <Screen scrollable contentContainerStyle={{padding: 16, gap: 16}}>
      <Center style={{height: 128, alignItems: 'stretch', gap: 16}}>
        <TextField
          Leading={showLeadingIcon ? Mail : undefined}
          Trailing={showTrailingIcon ? Mail : undefined}
          {...{mode, variant}}
          placeholder="Text field placeholder"
        />
      </Center>
      <Row style={{alignItems: 'center', gap: 8}}>
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
      </Row>
      <Row style={{alignItems: 'center', gap: 8}}>
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
      </Row>

      <Column style={{gap: 8}}>
        <Card mode="outlined" style={styles.card}>
          <Text variant="titleLarge">Leading Icon</Text>
          <Fill />
          <Switch value={showLeadingIcon} onValueChange={setShowLeadingIcon} />
        </Card>
        <Card mode="outlined" style={styles.card}>
          <Text variant="titleLarge">Trailing Icon</Text>
          <Fill />
          <Switch value={showTrailingIcon} onValueChange={setShowTrailingIcon} />
        </Card>
        <Card mode="outlined" style={styles.card}>
          <Text variant="titleLarge">Disable</Text>
          <Fill />
          <Switch value={disable} onValueChange={setDisable} />
        </Card>
        <Card mode="outlined" style={styles.card}>
          <Text variant="titleLarge">Multiline</Text>
          <Fill />
          <Switch value={multiline} onValueChange={setMultiline} />
        </Card>
      </Column>

      <Center style={{height: 128, alignItems: 'stretch', gap: 16}}>
        <TextField
          Leading={showLeadingIcon ? Mail : undefined}
          Trailing={showTrailingIcon ? Mail : undefined}
          {...{mode, variant}}
          placeholder="Text field placeholder"
        />
      </Center>
    </Screen>
  )
}

const styles = StyleSheet.create({
  card: {alignItems: 'center', flexDirection: 'row', gap: 16, padding: 16},
})

export default TextFieldScreen
