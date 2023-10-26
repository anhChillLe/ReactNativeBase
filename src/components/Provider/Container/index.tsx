import {FC, useEffect, useState} from 'react'
import {
  Modal,
  ModalProps,
  Pressable,
  SafeAreaView,
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  ViewStyle,
} from 'react-native'
import Animated, {
  Easing,
  FadeIn,
  Layout,
  SlideInDown,
  SlideInUp,
  SlideOutUp,
  ZoomIn,
  runOnJS,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

interface ModalBackdropProps extends ModalProps {
  duration?: number
  opacity?: number
  position?: 'top' | 'bottom' | 'center'
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
  const [modalVisible, setModalvisible] = useState(false)
  const opacity = useSharedValue(0)

  const hideModal = () => setModalvisible(false)

  useEffect(() => {
    if (visible) {
      setModalvisible(true)
      opacity.value = withTiming(maxOpacity, {
        easing: Easing.ease,
        duration,
      })
    } else {
      opacity.value = withTiming(
        0,
        {
          easing: Easing.ease,
          duration,
        },
        finished => {
          if (finished) {
            runOnJS(hideModal)()
          }
        },
      )
    }
  }, [visible])

  // const top = useSlideFromTop(!!visible)

  return (
    <Modal
      visible={modalVisible}
      transparent
      animationType="none"
      onRequestClose={onRequestClose}
      {...props}>
      <Animated.View style={[styles.backdrop, {opacity}]}/>
      <SafeAreaView style={{flex: 1}}>
        <Pressable
          style={[styles.backdropTouch, {justifyContent: positionMap[position]}]}
          onPress={onRequestClose}
          disabled={!dismissable}>
          <TouchableWithoutFeedback disabled={!dismissable}>
            <Animated.View entering={SlideInUp} exiting={SlideInDown}>
              {children}
            </Animated.View>
          </TouchableWithoutFeedback>
        </Pressable>
      </SafeAreaView>
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
    backgroundColor: 'black',
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
