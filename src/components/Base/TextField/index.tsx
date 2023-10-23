import {TextFieldProps} from 'components/types'
import React, {FC} from 'react'
import Animated from 'react-native-reanimated'

const TexatField: FC<TextFieldProps> = ({
  size = 'medium',
  mode = 'outlined',
  variant = 'primary',
  Leading,
  Trailing,
  ...props
}) => {
  return <Animated.View></Animated.View>
}

class TextField extends React.Component<TextFieldProps, TextFieldProps & {isFocus: boolean}> {
  constructor(props: TextFieldProps) {
    super(props)
    this.setState(props)
  }

  render(): React.ReactNode {
    return <Animated.View>
      
    </Animated.View>
  }
}
