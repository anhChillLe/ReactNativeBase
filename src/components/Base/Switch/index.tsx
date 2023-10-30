import {useAppTheme} from 'components/theme'
import {VStyle} from 'components/types'
import {FC, useEffect} from 'react'
import {Pressable, StyleSheet, SwitchProps} from 'react-native'
import Animated, {
  Easing,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

const CustomSwitch: FC<SwitchProps> = ({value, onValueChange}) => {
  const {colors, isDark} = useAppTheme()
  const fillFlex = useSharedValue(0)

  const trackAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: interpolate(fillFlex.value, [0, 1], [16, 24]),
      backgroundColor: interpolateColor(fillFlex.value, [0, 1], [colors.outline, colors.onPrimary]),
      margin: interpolate(fillFlex.value, [0, 1], [8, 4]),
    }
  }, [value, isDark, colors])

  const containerAnimatedStyle = useAnimatedStyle(
    () => ({
      backgroundColor: interpolateColor(
        fillFlex.value,
        [0, 1],
        [colors.surfaceVariant, colors.primary],
      ),
    }),
    [value, isDark, colors],
  )

  const fillAnimatedStyle = useAnimatedStyle(
    () => ({
      backgroundColor: interpolateColor(
        fillFlex.value,
        [0, 1],
        [colors.surfaceVariant, colors.primary],
      ),
      flex: fillFlex.value,
    }),
    [value, isDark, colors],
  )

  useEffect(() => {
    if (value) {
      fillFlex.value = withTiming(1, {
        easing: Easing.ease,
        duration: 100,
      })
    } else {
      fillFlex.value = withTiming(0, {
        easing: Easing.ease,
        duration: 100,
      })
    }
  }, [value])

  return (
    <Pressable
      onPress={() => {
        onValueChange && onValueChange(!value)
      }}>
      <Animated.View style={[styles.container, containerAnimatedStyle]}>
        <Animated.View style={[fillAnimatedStyle]} />
        <Animated.View style={[styles.track, trackAnimatedStyle]} />
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
    borderRadius: 20,
  },
})

export default CustomSwitch
