import Fill from 'components/Layout/Fill'
import {FC} from 'react'
import {Keyboard, TouchableNativeFeedback, ViewProps} from 'react-native'

const KeyboardDismiss: FC<ViewProps> = ({children, ...props}) => {
  return (
    <TouchableNativeFeedback onPress={Keyboard.dismiss} style={[{flex: 1}]}>
      <Fill {...props}>{children}</Fill>
    </TouchableNativeFeedback>
  )
}

export default KeyboardDismiss