import {Check} from 'assets/icons'
import {useAppTheme} from 'components/theme'
import {ButtonSize, CheckBoxProps, RadioButtonProps, VStyle} from 'components/types'
import {FC} from 'react'
import {Pressable, View} from 'react-native'
import {Circle} from 'react-native-svg'

const RadioButton: FC<RadioButtonProps> = ({
  checked,
  variant = 'primary',
  size = 'medium',
  onCheckedChange,
  ...props
}) => {
  const {colors} = useAppTheme()

  const containerStyle: VStyle = {
    aspectRatio: 1,
    padding: sizeMap[size].container / 4,
    width: sizeMap[size].container,
    borderRadius: sizeMap[size].container / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: sizeMap[size].container / 12,
    borderColor: checked ? colors[variant] : colors.surface,
  }

  const innerStyle: VStyle = {
    width: sizeMap[size].container / 2,
    aspectRatio: 1,
    borderRadius: sizeMap[size].container / 4,
    backgroundColor: checked ? colors[variant] : 'transparent',
  }

  return (
    <Pressable
      style={containerStyle}
      onPress={() => onCheckedChange(!checked)}
      {...props}>
        <View style={innerStyle}/>
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

export default RadioButton
