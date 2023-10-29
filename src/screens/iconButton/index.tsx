import {Mail} from 'assets/icons'
import {IconButton, Row, Screen} from 'components'
import {ButtonMode, ButtonSize, ButtonVariant} from 'components/types'

const variants: ButtonVariant[] = ['primary', 'secondary', 'tertiary', 'error', 'normal']
const modes: ButtonMode[] = ['filled', 'filled-total', 'outlined', 'empty']
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
        {modes.map(mode => (
          <Row key={mode} style={{gap: 8}}>
            {variants.map(variant => (
              <IconButton key={variant} Icon={Mail} {...{variant, mode}} size="medium" />
            ))}
          </Row>
        ))}
      </Row>
    </Screen>
  )
}

export default IconButtonScreen
