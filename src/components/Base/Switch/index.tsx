import { useAppTheme } from 'components/theme'
import { FC, useEffect } from 'react'
import { Pressable, StyleSheet, SwitchProps } from 'react-native'
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

const CustomSwitch: FC<SwitchProps> = ({value, onValueChange}) => {
  const {colors} = useAppTheme()
  const fillFlex = useSharedValue(0)

  const trackStyle = useAnimatedStyle(() => {
    return {
      width: 24,
      backgroundColor: interpolateColor(fillFlex.value, [0, 1], [colors.outline, colors.onPrimary]),
      margin: 4,
    }
  }, [value])

  const containerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(fillFlex.value, [0, 1], [colors.surfaceVariant, colors.primary]),
    }
  }, [value])

  const fillstyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(fillFlex.value, [0, 1], [colors.surfaceVariant, colors.primary]),
      flex: fillFlex.value,
    }
  }, [value])

  useEffect(() => {
    if (value) {
      fillFlex.value = withTiming(1, {
        easing: Easing.ease,
        duration: 200,
      })
    } else {
      fillFlex.value = withTiming(0, {
        easing: Easing.ease,
        duration: 200,
      })
    }
  }, [value])

  return (
    <Pressable
      onTouchStart={() => {
        onValueChange && onValueChange(!value)
      }}>
      <Animated.View style={[styles.container, containerStyle]}>
        <Animated.View style={[fillstyle]} />
        <Animated.View style={[styles.track, trackStyle]} />
      </Animated.View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 52,
    height: 32,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  track: {
    aspectRatio: 1,
    borderRadius: 14,
  },
})

export default CustomSwitch
