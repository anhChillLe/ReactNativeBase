import {Icon} from 'assets/icons'
import {AppTheme, FontVariant} from 'components/theme'
import {ReactElement, ReactNode} from 'react'
import {
  GestureResponderEvent,
  LayoutChangeEvent,
  PressableProps,
  TextProps as RNTextProps,
  StyleProp,
  TextInputProps,
  TextStyle,
  TouchableOpacityProps,
  TouchableWithoutFeedbackProps,
  ViewProps,
  ViewStyle,
} from 'react-native'
import {NumberProp} from 'react-native-svg'

type VStyle = StyleProp<ViewStyle>
type TStyle = StyleProp<TextStyle>

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'error' | 'normal'
type ButtonMode = 'outlined' | 'filled' | 'filled-total' | 'empty'
type ButtonSize = 'small' | 'medium' | 'large'

type TextFieldMode = 'underlined' | 'outlined' | 'filled'
type TextFieldSize = 'small' | 'medium' | 'large'
type TextFieldVariant = 'primary' | 'secondary' | 'error'

type TextVariant = keyof Typography

type CheckBoxVariant = 'primary' | 'secondary'
type CheckBoxSize = 'small' | 'medium' | 'large'

type CardMode = 'filled' | 'outlined'
type ChipMode = 'filled' | 'filled-total' | 'outlined'

type NotificationVariant = 'success' | 'error' | 'warning' | 'normal'

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

type DividerProps = ViewProps & {
  width?: NumberProp
  height?: NumberProp
  color?: string
  mode?: 'vertical' | 'horizontal'
}

interface TextProps extends RNTextProps {
  variant?: TextVariant
}

interface CheckableProps extends PressableProps {
  checked: boolean
  onCheckedChange?: (checked: boolean) => void
}

interface CheckBoxProps extends CheckableProps {
  size?: CheckBoxSize
  variant?: CheckBoxVariant
  Icon?: Icon
}

interface RadioButtonProps extends CheckableProps {
  size?: CheckBoxSize
  variant?: CheckBoxVariant
}

interface ScreenProps extends ViewProps {
  scrollable?: boolean
  appBar?: ReactElement
  dismissKeyboard?: boolean
  statusBarstyle?: 'light' | 'dark'
  contentContainerStyle?: VStyle
}
interface CardProps extends TouchableWithoutFeedbackProps {
  mode?: CardMode
}

interface ChipProps extends Omit<TouchableOpacityProps, 'children'> {
  Leading?: Icon
  Trailing?: Icon
  title: string
  mode?: ChipMode
}

interface ConfirmPopupProps extends ViewProps {
  Icon?: Icon
  title: string
  message: string
  positive: {
    title: string
    onPress?: () => void
  }
  negative?: {
    title: string
    onPress?: () => void
  }
  neutral?: {
    title: string
    onPress?: () => void
  }
}

interface PopupNotificationProps extends ViewProps {
  variant?: NotificationVariant
}

interface MenuProps {
  children?: ReactElement
  Anchor: (props: {onRequestOpen: () => void;}) => ReactElement
  dismissable?: boolean
}


interface MenuItemProps extends Omit<TouchableOpacityProps, 'children'> {
  Leading?: Icon
  Trailing?: Icon
  title: string
}