import { FC, PropsWithChildren, ReactElement, useEffect, useMemo, useState } from 'react'
import {
  DeviceEventEmitter,
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native'
import Animated, {
  Easing,
  Layout,
  ReduceMotion,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'

const SHOW_POPUP = 'SHOW_POPUP'
const HIDE_POPUP = 'HIDE_POPUP'

export const showPopup = (content: ReactElement) => {
  DeviceEventEmitter.emit(SHOW_POPUP, content)
}

export const hidePopup = () => {
  DeviceEventEmitter.emit(HIDE_POPUP)
}

const GlobalPopup = () => {
  const [contentQueue, setContentQueue] = useState<ReactElement[]>([])
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const listenerShow = DeviceEventEmitter.addListener(SHOW_POPUP, (content: ReactElement) => {
      open()
      setContentQueue(contentQueue => {
        return [...contentQueue, content]
      })
    })
    const listenerHide = DeviceEventEmitter.addListener(HIDE_POPUP, () => {
      setContentQueue([])
      close()
    })

    return () => {
      listenerShow.remove()
      listenerHide.remove()
    }
  }, [])

  const open = () => setVisible(true)
  const close = () => setVisible(false)

  const content = useMemo(() => contentQueue[contentQueue.length - 1], [contentQueue])

  return (
    <Modal visible={visible} transparent onRequestClose={close} animationType='none'>
      <ModalBackdrop onClose={close} visible={visible}>
        {content}
      </ModalBackdrop>
    </Modal>
  )
}

type ModalBackdropProps = PropsWithChildren<{
  onClose?: () => void
  visible?: boolean
  duration?: number
  opacity?: number
}>
const ModalBackdrop: FC<ModalBackdropProps> = ({
  onClose,
  duration = 200,
  children,
  visible,
  opacity: maxOpacity = 0.5,
}) => {
  const opacity = useSharedValue(0)
  useEffect(() => {
    if (visible)
      opacity.value = withTiming(maxOpacity, {
        easing: Easing.ease,
        duration,
      })
    else
      opacity.value = withTiming(0, {
        easing: Easing.ease,
        duration,
      })
  }, [visible])

  return (
    <>
      <Animated.View style={{...styles.backdrop, opacity}} />

      <SafeAreaView style={{flex: 1}}>
        <Pressable style={styles.backdropTouch} onPress={onClose}>
          <TouchableWithoutFeedback>
            <Animated.View>{children}</Animated.View>
          </TouchableWithoutFeedback>
        </Pressable>
      </SafeAreaView>
    </>
  )
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
  },
  backdropTouch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default GlobalPopup
