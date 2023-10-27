import {useAppTheme} from 'components/theme'
import {TStyle, TextProps} from 'components/types'
import {FC} from 'react'
import {Text as RNText, StyleSheet} from 'react-native'

const Text: FC<TextProps> = ({variant, style, ...props}) => {
  const {colors, typography} = useAppTheme()
  const variantStye: TStyle = variant ? typography[variant] : {}
  const textStyle = StyleSheet.flatten([variantStye, {color: colors.onBackground}, style])
  return <RNText style={textStyle} {...props} />
}

export default Text