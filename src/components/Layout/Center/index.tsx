import {FC} from 'react'
import {View, ViewProps} from 'react-native'

const Center: FC<ViewProps> = ({style, ...props}) => {
  return <View style={[{justifyContent: 'center', alignItems: 'center'}, style]} {...props} />
}

export default Center
