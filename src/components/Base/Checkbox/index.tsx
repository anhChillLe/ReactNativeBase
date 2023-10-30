import {Check} from 'assets/icons'
import {useAppTheme} from 'components/theme'
import {ButtonSize, CheckBoxProps, VStyle} from 'components/types'
import {FC} from 'react'
import {Pressable} from 'react-native'

const CheckBox: FC<CheckBoxProps> = ({
  checked,
  variant = 'primary',
  Icon = Check,
  size = 'medium',
  onCheckedChange,
  ...props
}) => {
  const {colors} = useAppTheme()

  const containerStyle: VStyle = {
    backgroundColor: checked ? colors[variant] : 'transparent',
    aspectRatio: 1,
    padding: sizeMap[size].container / 8,
    width: sizeMap[size].container,
    borderRadius: sizeMap[size].container / 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: sizeMap[size].container / 12,
    borderColor: checked ? colors[variant] : colors.onSurfaceVariant,
  }

  return (
    <Pressable style={containerStyle} onPress={() => onCheckedChange && onCheckedChange(!checked)} {...props}>
      {checked && <Icon width="100%" height="100%" fill={colors.onPrimary} />}
    </Pressable>
  )
}

interface Sizes {
  container: number
}
const sizeMap: Record<ButtonSize, Sizes> = {
  small: {
    container: 16,
  },
  medium: {
    container: 24,
  },
  large: {
    container: 32,
  },
}

export default CheckBox
