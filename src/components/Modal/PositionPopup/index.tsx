import { usePopup } from 'components'
import { useAppTheme } from 'components/theme'
import { MenuProps } from 'components/types'
import { FC, PropsWithChildren, useRef } from 'react'
import { Dimensions, LayoutRectangle, StyleSheet, View } from 'react-native'
import Animated, { ZoomIn } from 'react-native-reanimated'

const PositionPopup: FC<MenuProps> = ({Anchor, children}) => {
  const popup = usePopup()
  const ref = useRef<View>(null)

  return (
    <View ref={ref} collapsable={false}>
      <Anchor
        onRequestOpen={() => {
          ref.current?.measureInWindow((x, y, width, height) => {
            popup.push({
              transparent: true,
              dismissable: true,
              element: <MenuLayout layout={{x, y, width, height}}>{children}</MenuLayout>,
            })
          })
        }}
      />
    </View>
  )
}

const MenuLayout = ({layout, children}:PropsWithChildren<{layout: LayoutRectangle}>) => {
  const {x, y, width, height} = layout
  const {colors, roundness} = useAppTheme()
  const {width: windowWidth} = Dimensions.get('window')

  console.log(layout)

  return (
    <Animated.View
      entering={ZoomIn.duration(100)}
      style={[
        {
          backgroundColor: colors.surfaceContainer,
          top: y + height + 8,
          right: Math.max(windowWidth - (x + width), 8),
          borderRadius: roundness,
          shadowColor: colors.scrim,
        },
        styles.menu,
      ]}>
        {children}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  menu: {
    shadowRadius: 4,
    elevation: 2,
    position: 'absolute',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
})

export default PositionPopup
