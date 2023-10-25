import {FC} from 'react'
import {Keyboard, TouchableNativeFeedback, TouchableWithoutFeedbackProps} from 'react-native'

const KeyboardDismiss: FC<TouchableWithoutFeedbackProps> = ({style, ...props}) => {
  return (
    <TouchableNativeFeedback onPress={Keyboard.dismiss} style={[{flex: 1}, style]} {...props} />
  )
}

export default KeyboardDismiss
