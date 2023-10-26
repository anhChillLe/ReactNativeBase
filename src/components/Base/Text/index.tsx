import {useAppTheme} from 'components/theme'
import {TextProps} from 'components/types'
import {FC} from 'react'
import {Text as RNText} from 'react-native'

const Text: FC<TextProps> = ({variant = 'labelMedium', style, ...props}) => {
  const {typography} = useAppTheme()
  return <RNText style={[typography[variant], style]} {...props} />
}

export default Text