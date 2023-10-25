import {Icon} from 'assets/icons'
import { AppTheme } from 'components/theme'
import {
  GestureResponderEvent,
  StyleProp,
  TextInputProps,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native'

type VStyle = StyleProp<ViewStyle>
type TStyle = StyleProp<TextStyle>
type ButtonVariant = 'primary' | 'normal' | 'secondary' | 'error'
type ButtonMode = 'outlined' | 'filled' | 'empty'
type ButtonSize = 'small' | 'medium' | 'large'
type TextFieldMode = 'underlined' | 'outlined' | 'filled'
type TextFieldSize = 'small' | 'medium' | 'large'
type TextFieldVariant = 'primary' | 'secondary' | 'error'

interface ButtonBaseProps extends Omit<TouchableOpacityProps, 'children'> {
  mode?: ButtonMode
  variant?: ButtonVariant
  size?: ButtonSize
  theme?: AppTheme
}

interface ButtonProps extends ButtonBaseProps {
  textStyle?: TStyle
  Icon?: Icon
  loading?: boolean
  title: string
}

interface IconButtonProps extends ButtonBaseProps {
  Icon: Icon
  badge?: number
}

interface TextFieldProps extends TextInputProps {
  Leading?: Icon
  onLeadingPress?: (e: GestureResponderEvent) => void
  Trailing?: Icon
  onTrailingPress?: (e: GestureResponderEvent) => void
  size?: TextFieldSize
  variant?: TextFieldVariant
  mode?: TextFieldMode
  theme?: AppTheme
}
