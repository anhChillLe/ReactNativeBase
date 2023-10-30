import ModalContainer from 'components/Modal/ModalContainer'
import {useStack} from 'hooks'
import {
  FC,
  PropsWithChildren,
  ReactElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { LayoutRectangle } from 'react-native'

interface ModalController {
  push: (content: ContentProps) => void
  pop: () => void
  popToTop: () => void
  replace: (content: ContentProps) => void
}
const ModalContext = createContext<ModalController | undefined>(undefined)
interface ContentProps {
  position?: 'top' | 'bottom' | 'center' | LayoutRectangle
  transparent?: boolean
  dismissable?: boolean
  timeout?: number
  element: ReactElement
}

const ModalProvider: FC<PropsWithChildren> = ({children}) => {
  const [visible, setVisible] = useState(false)
  const {stack: contentStack, push, replace, pop, popToTop} = useStack<ContentProps>([])
  const content = contentStack[contentStack.length - 1]

  useEffect(() => {
    setVisible(contentStack.length > 0)
    if(content?.timeout){
      setTimeout(() => {
        pop()
      }, content.timeout)
    }
  }, [content])

  return (
    <ModalContext.Provider value={{pop, popToTop, push, replace}}>
      <ModalContainer
        visible={visible}
        onRequestClose={popToTop}
        dismissable={content?.dismissable}
        position={content?.position}
        opacity={content?.transparent ? 0 : 0.25}>
        {content?.element}
      </ModalContainer>
      {children}
    </ModalContext.Provider>
  )
}

export const usePopup = (): ModalController => {
  const controller = useContext(ModalContext)
  if (controller == undefined) {
    throw new Error('usePopup must be used within a ModalProvider')
  }
  return controller
}

export default ModalProvider
