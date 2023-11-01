import {PosisionModalLayout} from 'components'
import {useModal} from 'components/Provider/Modal'
import {FC, ReactElement, useRef} from 'react'
import {GestureResponderEvent, Pressable, StyleSheet, View} from 'react-native'

interface Props {
  children: ReactElement
  Anchor: ({onRequestOpen}:{onRequestOpen: (e: GestureResponderEvent) => void}) =>  ReactElement
}

const Menu: FC<Props> = ({children, Anchor}) => {
  const {push} = useModal()
  const ref = useRef<View>(null)

  const openMenu = () => {
    ref.current?.measureInWindow((x, y, width, height) => {
      push({
        dismissable: true,
        transparent: true,
        element: (
          <PosisionModalLayout anchorLayout={{x, y, width, height}}>{children}</PosisionModalLayout>
        ),
      })
    })
  }

  return (
    <View ref={ref}>
      <Anchor onRequestOpen={openMenu}/>
    </View>
  )
}

export default Menu
