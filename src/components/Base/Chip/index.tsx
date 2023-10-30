import Text from 'components/Base/Text'
import {revertColor, useAppTheme} from 'components/theme'
import {ChipProps, TStyle, VStyle} from 'components/types'
import {FC} from 'react'
import {StyleSheet, TouchableOpacity} from 'react-native'

const Chip: FC<ChipProps> = ({mode, Leading, Trailing, style, title, ...props}) => {
  const {colors, roundness, typography} = useAppTheme()

  const chipStyle: VStyle = {
    paddingStart: Leading ? 8 : 16,
    paddingEnd: Trailing ? 8 : 16,
    borderRadius: roundness,
    backgroundColor: (() => {
      switch (mode) {
        case 'filled':
          return colors.primary
        case 'filled-total':
          return colors.primaryContainer
        case 'outlined':
          return colors.surfaceContainer
      }
    })(),
    borderColor: (() => {
      switch (mode) {
        case 'filled':
          return colors.primary
        case 'filled-total':
          return colors.primaryContainer
        case 'outlined':
          return colors.outline
      }
    })(),
  }

  const titleStyle: TStyle = {
    ...typography['labelSmall'],
    color: (() => {
      switch (mode) {
        case 'filled':
          return colors.onPrimary
        case 'filled-total':
          return colors.onPrimaryContainer
        case 'outlined':
          return colors.onSurface
      }
    })(),
  }

  return (
    <TouchableOpacity style={[chipStyle, staticStyles.container, style]} activeOpacity={0.75} {...props}>
      {Leading && (
        <Leading width={titleStyle.fontSize} height={titleStyle.fontSize} fill={titleStyle.color} />
      )}
      <Text style={titleStyle}>{title}</Text>
      {Trailing && (
        <Trailing
          width={titleStyle.fontSize}
          height={titleStyle.fontSize}
          fill={titleStyle.color}
        />
      )}
    </TouchableOpacity>
  )
}

const staticStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    gap: 8,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default Chip
