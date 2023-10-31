import {PosisionModalLayout} from 'components'
import {usePopup} from 'components/Provider/Modal'
import {FC, ReactElement, useRef} from 'react'
import {Pressable, StyleSheet, View} from 'react-native'

interface Props {
  children: ReactElement
  anchor: ReactElement
}

const Menu: FC<Props> = ({children, anchor}) => {
  const {push} = usePopup()
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
      {anchor}
      <Pressable style={StyleSheet.absoluteFill} onPress={openMenu} />
    </View>
  )
}

export default Menu
