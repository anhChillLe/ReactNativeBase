import {Mail} from 'assets/icons'
import {Center, KeyboardDismiss, Screen, Switch, Text, TextField} from 'components'
import Button from 'components/Base/Button'
import Row from 'components/Layout/Row'
import {TextFieldMode, TextFieldSize, TextFieldVariant} from 'components/types'
import {useState} from 'react'

const variants: TextFieldVariant[] = ['primary', 'secondary', 'error']
const modes: TextFieldMode[] = ['filled', 'outlined', 'underlined']
const sizes: TextFieldSize[] = ['small', 'medium', 'large']

const TextFieldScreen = () => {
  const [size, setSize] = useState<TextFieldSize>('small')
  const [mode, setMode] = useState<TextFieldMode>('filled')
  const [variant, setVariant] = useState<TextFieldVariant>('primary')
  const [showLeadingIcon, setShowLeadingIcon] = useState(false)
  const [showTrailingIcon, setShowTrailingIcon] = useState(false)
  const [multiline, setMultiline] = useState(false)
  const [disable, setDisable] = useState(false)

  return (
    <Screen scrollable contentContainerStyle={{padding: 16, flexGrow: 1, gap: 16}}>
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
      <Row style={{alignItems: 'center', gap: 8}}>
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
      </Row>
      <Row style={{alignItems: 'center', gap: 16}}>
        <Text variant="titleLarge">Show Leading Icon</Text>
        <Switch value={showLeadingIcon} onValueChange={setShowLeadingIcon} />
      </Row>
      <Row style={{alignItems: 'center', gap: 16}}>
        <Text variant="titleLarge">Show Trailing Icon</Text>
        <Switch value={showTrailingIcon} onValueChange={setShowTrailingIcon} />
      </Row>
      <Row style={{alignItems: 'center', gap: 16}}>
        <Text variant="titleLarge">Disable</Text>
        <Switch value={disable} onValueChange={setDisable} />
      </Row>
      <Row style={{alignItems: 'center', gap: 16}}>
        <Text variant="titleLarge">Multiline</Text>
        <Switch value={multiline} onValueChange={setMultiline} />
      </Row>
      <KeyboardDismiss>
        <Center style={{flex: 1, alignItems: 'stretch'}}>
          <TextField
            Leading={showLeadingIcon ? Mail : undefined}
            Trailing={showTrailingIcon ? Mail : undefined}
            {...{size, mode, variant}}
            multiline={multiline}
            placeholder="Text field placeholder"
          />
        </Center>
      </KeyboardDismiss>
    </Screen>
  )
}

export default TextFieldScreen
