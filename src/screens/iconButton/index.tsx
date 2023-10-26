import {Mail} from 'assets/icons'
import {Center, Column, IconButton, Row} from 'components'
import {ButtonVariant, ButtonMode, ButtonSize} from 'components/types'
import {SafeAreaView, ScrollView} from 'react-native'

const variants: ButtonVariant[] = ['primary', 'secondary', 'error', 'normal']
const modes: ButtonMode[] = ['filled', 'outlined', 'empty']
const sizes: ButtonSize[] = ['small', 'medium', 'large']

const IconButtonScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'flex-start',
          justifyContent: 'center',
          paddingHorizontal: 8,
        }}>
        <Row style={{flexWrap: 'wrap', gap: 16, alignItems: 'flex-end', justifyContent: 'center'}}>
          {modes.map(mode => {
            return variants.map(variant => {
              return sizes.map(size => {
                return <IconButton Icon={Mail} {...{variant, mode, size}} style={{flexGrow: 1}} />
              })
            })
          })}
        </Row>
      </ScrollView>
    </SafeAreaView>
  )
}

export default IconButtonScreen
