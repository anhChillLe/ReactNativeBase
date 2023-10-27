import {Mail} from 'assets/icons'
import {Screen, Switch, Text} from 'components'
import Button from 'components/Base/Button'
import Row from 'components/Layout/Row'
import {ButtonMode, ButtonSize, ButtonVariant} from 'components/types'
import {useState} from 'react'

const variants: ButtonVariant[] = ['primary', 'secondary', 'error', 'normal']
const modes: ButtonMode[] = ['filled', 'outlined', 'empty']
const sizes: ButtonSize[] = ['small', 'medium', 'large']

const ButtonScreen = () => {
  const [size, setSize] = useState<ButtonSize>('small')
  const [mode, setMode] = useState<ButtonMode>('filled')
  const [variant, setVariant] = useState<ButtonVariant>('primary')
  const [isLoading, setLoading] = useState(false)
  const [showIcon, setShowIcon] = useState(false)
  const [disable, setDisable] = useState(false)

  return (
    <Screen scrollable contentContainerStyle={{paddingHorizontal: 16, gap: 8}}>
      <Row style={{padding: 32, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          Icon={showIcon ? Mail : undefined}
          loading={isLoading}
          disabled={disable}
          variant={variant}
          mode={mode}
          size={size}
          title="Show modal"
        />
      </Row>

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
        <Text variant="titleLarge">Isloading</Text>
        <Switch value={isLoading} onValueChange={setLoading} />
      </Row>
      <Row style={{alignItems: 'center', gap: 16}}>
        <Text variant="titleLarge">Show Icon</Text>
        <Switch value={showIcon} onValueChange={setShowIcon} />
      </Row>
      <Row style={{alignItems: 'center', gap: 16}}>
        <Text variant="titleLarge">Disable</Text>
        <Switch value={disable} onValueChange={setDisable} />
      </Row>
      <Row style={{flexWrap: 'wrap', gap: 16, alignItems: 'center', justifyContent: 'center'}}>
        {modes.map(mode => {
          return variants.map(variant => {
            return sizes.map(size => {
              return (
                <Button
                  key={variant + mode + size}
                  Icon={showIcon ? Mail : undefined}
                  loading={isLoading}
                  disabled={disable}
                  {...{variant, mode, size}}
                  style={{flexGrow: 1}}
                  title="Click me"
                />
              )
            })
          })
        })}
      </Row>
    </Screen>
  )
}

export default ButtonScreen
