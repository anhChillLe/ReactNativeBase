import {FC} from 'react'
import {View, ViewProps} from 'react-native'

const Overlay: FC<ViewProps> = ({style, ...props}) => {
  return (
    <View
      style={[{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}, style]}
      {...props}
    />
  )
}

export default Overlay
