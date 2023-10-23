import {Icon} from 'assets/icons'
import {StyleProp, TextInputProps, TextStyle, TouchableOpacityProps, ViewStyle} from 'react-native'

type VStyle = StyleProp<ViewStyle>
type TStyle = StyleProp<TextStyle>
type Variant = 'primary' | 'normal' | 'secondary' | 'error'
type ButtonMode = 'outlined' | 'filled' | 'empty'
type ButtonSize = 'small' | 'medium' | 'large'
type TextFieldMode = 'underlined' | 'outlined' | 'filled'
type TextFieldSize = 'small' | 'medium' | 'large'

interface ButtonBaseProps extends Omit<TouchableOpacityProps, 'children'> {
  mode?: ButtonMode
  variant?: Variant
  size?: ButtonSize
}

interface ButtonProps extends ButtonBaseProps {
  textStyle?: TStyle
  Icon?: Icon
  loading?: boolean,
  title: string
}

interface IconButtonProps extends ButtonBaseProps {
  Icon: Icon,
  badge?: number
}

interface TextFieldProps extends TextInputProps {
  Leading?: Icon
  Trailing?: Icon
  size?: TextFieldSize
  variant?: Variant
  mode?: TextFieldMode
}