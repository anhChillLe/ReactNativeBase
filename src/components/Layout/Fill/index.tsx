import {FC} from 'react'
import {View, ViewProps} from 'react-native'

const Fill: FC<ViewProps> = ({style, ...props}) => {
  return <View style={[{flex: 1}, style]} {...props} />
}

export default Fill