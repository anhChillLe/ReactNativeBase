import {Mail} from 'assets/icons'
import {IconButton, Row, Screen} from 'components'
import {ButtonMode, ButtonSize, ButtonVariant} from 'components/types'
import {ScrollView} from 'react-native'

const variants: ButtonVariant[] = ['primary', 'secondary', 'error', 'normal']
const modes: ButtonMode[] = ['filled', 'outlined', 'empty']
const sizes: ButtonSize[] = ['small', 'medium', 'large']

const IconButtonScreen = () => {
  return (
    <Screen
      scrollable
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
              return (
                <IconButton
                  key={variant + mode + size}
                  Icon={Mail}
                  {...{variant, mode, size}}
                  style={{flexGrow: 1}}
                />
              )
            })
          })
        })}
      </Row>
    </Screen>
  )
}

export default IconButtonScreen
