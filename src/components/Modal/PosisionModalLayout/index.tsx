import {VStyle} from 'components/types'
import {ReactNode} from 'react'
import {Dimensions, LayoutRectangle, Pressable} from 'react-native'
import Animated, {ZoomIn} from 'react-native-reanimated'

interface Props {
  anchorLayout: LayoutRectangle
  children: ReactNode
}

const PositionModalLayout = ({anchorLayout, children}: Props) => {
  const {x, y, width, height} = anchorLayout
  const windowWidth = Dimensions.get('window').width
  const isLeftOfScreen = x + width / 2 < windowWidth / 2

  const style: VStyle = isLeftOfScreen
    ? {
        left: Math.max(x, 8),
      }
    : {
        right: Math.max(windowWidth - (x + width), 8),
      }

  return (
    <Animated.View
      entering={ZoomIn.duration(100)}
      style={[{top: y + height + 8, position: 'absolute'}, style]}>
      <Pressable>{children}</Pressable>
    </Animated.View>
  )
}

export default PositionModalLayout
