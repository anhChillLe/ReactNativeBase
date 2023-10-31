import Text from 'components/Base/Text'
import Fill from 'components/Layout/Fill'
import { useAppTheme } from 'components/theme'
import { MenuItemProps } from 'components/types'
import { FC } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

const MenuItem: FC<MenuItemProps> = ({Leading, Trailing, title}) => {
  const {colors} = useAppTheme()
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.75}>
      {Leading && <Leading width={18} height={18} fill={colors.onSurfaceVariant}/>}
      <Text style={{color: colors.onSurface}} numberOfLines={1} ellipsizeMode='tail'>{title}</Text>
      <Fill />
      {Trailing && <Trailing  width={18} height={18} fill={colors.onSurfaceVariant}/>}
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    gap: 16,
    alignItems: 'center',
  },
})

export default MenuItem
