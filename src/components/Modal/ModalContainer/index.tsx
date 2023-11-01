import { useAppTheme } from 'components/theme'
import { VStyle } from 'components/types'
import { FC, useEffect } from 'react'
import { Modal, ModalProps, Pressable, StyleSheet } from 'react-native'
import Animated, { Easing, useSharedValue, withTiming } from 'react-native-reanimated'

interface ModalBackdropProps extends ModalProps {
  duration?: number
  opacity?: number
  position?: 'top' | 'bottom' | 'center'
  containerstyle?: VStyle
  dismissable?: boolean
}
const ModalContainer: FC<ModalBackdropProps> = ({
  duration = 200,
  children,
  visible,
  onRequestClose,
  position = 'center',
  dismissable,
  opacity = 0.25,
  ...props
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={dismissable ? onRequestClose : undefined}
      {...props}>
      {opacity > 0 && <ModalBackdrop visible={visible} opacity={opacity}/>}
      <Pressable
        style={[styles.backdropTouch, {justifyContent: positionMap[position]}]}
        onPress={onRequestClose}
        disabled={!dismissable}>
        {children}
      </Pressable>
    </Modal>
  )
}

const ModalBackdrop = ({visible, opacity : maxOpacity}: {visible?: boolean; opacity: number}) => {
  const {colors} = useAppTheme()
  const opacity = useSharedValue(0)

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

  return <Animated.View style={[styles.backdrop, {opacity, backgroundColor: colors.scrim}]} />
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
