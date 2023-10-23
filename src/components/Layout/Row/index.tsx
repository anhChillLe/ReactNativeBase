import { FC } from "react";
import { View, ViewProps } from "react-native";

const Row: FC<ViewProps> = ({style, ...props}) => {
  return <View style={[{flexDirection: 'row'}, style]} {...props}/>
}

export default Row