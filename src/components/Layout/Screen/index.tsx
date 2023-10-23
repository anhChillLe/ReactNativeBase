import { FC } from "react";
import { StyleSheet, View, ViewProps } from "react-native";

const Screen: FC<ViewProps> = ({style, ...props}) => {
  return <View style={[styles.container, style]} {...props}/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Screen