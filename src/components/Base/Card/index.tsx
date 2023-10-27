import {useAppTheme} from 'components/theme'
import {CardProps, VStyle} from 'components/types'
import {FC} from 'react'
import {Pressable, TouchableWithoutFeedback, View} from 'react-native'

const Card: FC<CardProps> = ({mode, style, children, ...props}) => {
  const {isDark, colors, roundness} = useAppTheme()

  const cardStyle: VStyle = {
    borderRadius: roundness,
    backgroundColor: mode == 'filled' ? colors.surfaceContainer : colors.surface,
    borderColor: mode == 'filled' ? colors.surfaceContainer : colors.outlineVariant,
    borderWidth: 1,
  }

  return (
    <TouchableWithoutFeedback {...props}>
      <View style={[cardStyle, style]}>{children}</View>
    </TouchableWithoutFeedback>
  )
}

export default Card
