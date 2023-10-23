import { FC } from "react";
import { View, ViewProps } from "react-native";

const Column: FC<ViewProps> = ({style, ...props}) => {
  return <View style={[{flexDirection: 'column'}, style]} {...props}/>
}

export default Column