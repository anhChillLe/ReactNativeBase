import Text from 'components/Base/Text'
import {useAppTheme} from 'components/theme'
import {ChipProps, TStyle, VStyle} from 'components/types'
import {FC} from 'react'
import {StyleSheet, TouchableOpacity} from 'react-native'

const Chip: FC<ChipProps> = ({mode, Leading, Trailing, style, title, ...props}) => {
  const {colors, roundness, typography} = useAppTheme()

  const chipStyle: VStyle = {
    paddingStart: Leading ? 8 : 16,
    paddingEnd: Trailing ? 8 : 16,

    borderRadius: roundness,
    backgroundColor: mode == 'filled' ? colors.primaryContainer : colors.surfaceContainer,
    borderColor: mode == 'filled' ? colors.primaryContainer : colors.outline,
  }

  const titleStyle: TStyle = {
    ...typography['labelSmall'],
    color: mode == 'filled' ? colors.onPrimaryContainer : colors.onSecondaryContainer,
  }

  return (
    <TouchableOpacity style={[chipStyle, staticStyles.container, style]}>
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
