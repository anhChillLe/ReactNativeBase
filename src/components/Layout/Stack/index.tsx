import React, { Children, FC, useMemo } from 'react'
import { ViewProps } from 'react-native'
import Animated from 'react-native-reanimated'

const Stack: FC<ViewProps> = ({children, ...props}) => {
  const topChild = useMemo(() => {
    const allChild = Children.toArray(children)
    return allChild[allChild.length - 1]
  }, [children])

  return <Animated.View {...props}>{topChild}</Animated.View>
}

export default Stack
