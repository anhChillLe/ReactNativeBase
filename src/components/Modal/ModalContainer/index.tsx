import {useAppTheme} from 'components/theme'
import {VStyle} from 'components/types'
import {FC, useEffect} from 'react'
import {
  Dimensions,
  LayoutRectangle,
  Modal,
  ModalProps,
  Pressable,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native'
import Animated, {Easing, useSharedValue, withTiming} from 'react-native-reanimated'

interface ModalBackdropProps extends ModalProps {
  duration?: number
  opacity?: number
  position?: 'top' | 'bottom' | 'center' | LayoutRectangle
  containerstyle?: StyleProp<ViewStyle>
  dismissable?: boolean
}
const ModalContainer: FC<ModalBackdropProps> = ({
  duration = 200,
  children,
  visible,
  onRequestClose,
  position = 'center',
  dismissable,
  opacity: maxOpacity = 0.25,
  ...props
}) => {
  const {colors} = useAppTheme()
  const opacity = useSharedValue(0)
  const {width} = Dimensions.get('window')

  useEffect(() => {
    if (visible) {
      opacity.value = withTiming(maxOpacity, {
        easing: Easing.ease,
        duration: 100,
      })
    } else {
      opacity.value = withTiming(
        0,
        {
          easing: Easing.ease,
          duration: 100,
        },
        finished => {
          if (finished) {
          }
        },
      )
    }
  }, [visible])

  const justify: VStyle =
    typeof position != 'object'
      ? {justifyContent: positionMap[position]}
      : {
        position: 'absolute',
        top: position.y + position.height + 8,
        right: Math.max(width - (position.x + position.width), 8),
      }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={dismissable ? onRequestClose : undefined}
      {...props}>
      {maxOpacity != 0 && (
        <Animated.View style={[styles.backdrop, {opacity, backgroundColor: colors.scrim}]} />
      )}
      <Pressable
        style={[styles.backdropTouch, justify]}
        onPress={onRequestClose}
        disabled={!dismissable}>
        {children}
      </Pressable>
    </Modal>
  )
}

const positionMap = {
  center: 'center' as 'center',
  top: 'flex-start' as 'flex-start',
  bottom: 'flex-end' as 'flex-end',
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.25,
  },
  backdropTouch: {
    flex: 1,
    alignItems: 'center',
  },
})

export default ModalContainer
