import { Mail } from 'assets/icons'
import Button from 'components/Base/Button'
import Row from 'components/Layout/Row'
import { ButtonMode, ButtonSize, ButtonVariant } from 'components/types'
import { useState } from 'react'
import { SafeAreaView, ScrollView, Switch, Text } from 'react-native'

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
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{padding: 16, flexGrow: 1, gap: 16}}>
        <Row style={{padding: 32, alignItems: 'center', justifyContent: 'center'}}>
          <Button
            Icon={showIcon ? Mail : undefined}
            loading={isLoading}
            disabled={disable}
            variant={variant}
            mode={mode}
            size={size}
            title="Show modal"
            // onPress={() =>
            //   PopupController.push({
            //     dismissable: true,
            //     element: <Button title="Click me" />,
            //   })
            // }
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
          <Text style={{fontSize: 20, fontWeight: '500'}}>Isloading</Text>
          <Switch value={isLoading} onChange={() => setLoading(loading => !loading)} />
        </Row>
        <Row style={{alignItems: 'center', gap: 16}}>
          <Text style={{fontSize: 20, fontWeight: '500'}}>Show Icon</Text>
          <Switch value={showIcon} onChange={() => setShowIcon(show => !show)} />
        </Row>
        <Row style={{alignItems: 'center', gap: 16}}>
          <Text style={{fontSize: 20, fontWeight: '500'}}>Disable</Text>
          <Switch value={disable} onChange={() => setDisable(disable => !disable)} />
        </Row>
        <Row style={{flexWrap: 'wrap', gap: 16, alignItems: 'center', justifyContent: 'center'}}>
          {modes.map(mode => {
            return variants.map(variant => {
              return sizes.map(size => {
                return (
                  <Button
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
      </ScrollView>
    </SafeAreaView>
  )
}

export default ButtonScreen
