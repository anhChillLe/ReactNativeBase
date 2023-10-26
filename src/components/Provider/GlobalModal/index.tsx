import ModalContainer from 'components/Provider/Container'
import {useStack} from 'hooks'
import {ReactElement, useEffect, useMemo, useState} from 'react'
import {DeviceEventEmitter} from 'react-native'

const POPUP_PUSH = 'POPUP_PUSH'
const POPUP_POP = 'POPUP_POP'
const POPUP_POPTOTOP = 'POPUP_POPTOTOP'
const POPUP_REPLACE = 'POPUP_REPLACE'

interface ContentProps {
  position?: 'top' | 'bottom' | 'center'
  transitionIn?: 'slideFromTop' | 'fade' | 'slideFromBottom'
  transitionOut?: 'slideFromTop' | 'fade' | 'slideFromBottom'
  transparent?: boolean
  dismissable?: boolean
  timeout?: number
  element: ReactElement
}

export const PopupController = {
  push: (content: ContentProps) => {
    DeviceEventEmitter.emit(POPUP_PUSH, content)
  },
  pop: () => {
    DeviceEventEmitter.emit(POPUP_POP)
  },
  popToTop: () => {
    DeviceEventEmitter.emit(POPUP_POPTOTOP)
  },
  replace: (content: ContentProps) => {
    DeviceEventEmitter.emit(POPUP_REPLACE, content)
  },
}

const GlobalPopup = () => {
  const [visible, setVisible] = useState(false)
  const {stack: contentStack, push, replace, pop, popToTop} = useStack<ContentProps>([])
  const content = contentStack[contentStack.length - 1]

  useEffect(() => {
    setVisible(contentStack.length > 0)
  }, [contentStack.length > 0])

  useEffect(() => {
    const listenerPush = DeviceEventEmitter.addListener(POPUP_PUSH, push)
    const listenerPop = DeviceEventEmitter.addListener(POPUP_POP, pop)
    const listenerPopToTop = DeviceEventEmitter.addListener(POPUP_POPTOTOP, popToTop)
    const listenerReplace = DeviceEventEmitter.addListener(POPUP_REPLACE, replace)
    return () => {
      listenerPush.remove()
      listenerPopToTop.remove()
      listenerPop.remove()
      listenerReplace.remove()
    }
  }, [])

  useEffect(() => {
    if (content?.timeout) {
      setTimeout(() => {
        setVisible(false)
      }, content.timeout)
      setTimeout(() => {
        content && pop()
      }, content.timeout)
    }
  }, [content])

  return (
    <ModalContainer
      visible={visible}
      onRequestClose={popToTop}
      dismissable={content?.dismissable}
      position={content?.position}
      opacity={content?.transparent ? 0 : 0.25}>
      {content?.element}
    </ModalContainer>
  )
}

export default GlobalPopup
