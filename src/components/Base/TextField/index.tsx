import {AppTheme, useAppTheme} from 'components/theme'
import {TStyle, TextFieldProps, TextFieldSize, TextFieldVariant, VStyle} from 'components/types'
import React, {FC, useState} from 'react'
import {Platform, StyleSheet, TextInput} from 'react-native'
import Animated from 'react-native-reanimated'

const TextField: FC<TextFieldProps> = ({
  size = 'medium',
  mode = 'outlined',
  variant = 'primary',
  onLeadingPress,
  onTrailingPress,
  Leading,
  Trailing,
  theme: overideTheme,
  style,
  ...props
}) => {
  const theme = useAppTheme(overideTheme)
  const [isFocused, setFocused] = useState(false)
  const focus = () => setFocused(true)
  const blur = () => setFocused(false)

  const sizeMap = getSizeMap()
  const icSize = sizeMap[size].icon
  const textSize = sizeMap[size].input
  const containerSize = sizeMap[size].container

  const containerStyle: VStyle = {
    paddingVertical: Platform.select({
      android: containerSize,
      ios: containerSize,
    }),
    paddingHorizontal: containerSize,
    // padding: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: containerSize / 2,
  }

  const inputStyle: TStyle = {
    fontSize: textSize,
    lineHeight: textSize,
    paddingTop: 0,
    paddingBottom: 0,
  }

  const styles = (() => {
    switch (mode) {
      case 'underlined':
        return underlinedStyles(theme, variant, isFocused)
      case 'outlined':
        return outlinedStyles(theme, variant, isFocused)
      case 'filled':
        return filledStyles(theme, variant, isFocused)
    }
  })()

  return (
    <Animated.View
      style={[containerStyle, styles.container]}
      onLayout={e => {
        console.log(Platform.OS, size, e.nativeEvent.layout.height)
      }}>
      {Leading && (
        <Leading
          width={icSize}
          height={icSize}
          onPress={onLeadingPress}
          fill={isFocused ? theme.colors[variant] : styles.input.color}
          style={styles.icon}
        />
      )}
      <TextInput
        style={[{flex: 1}, inputStyle, styles.input, style]}
        onFocus={focus}
        onBlur={blur}
        blurOnSubmit
        cursorColor={theme.colors[variant]}
        selectionColor={theme.colors[variant]}
        placeholderTextColor={styles.input.color + Math.floor(0.25 * 255)}
        {...props}
      />
      {Trailing && (
        <Trailing
          width={icSize}
          height={icSize}
          onPress={onTrailingPress}
          fill={isFocused ? theme.colors[variant] : styles.input.color}
          style={styles.icon}
        />
      )}
    </Animated.View>
  )
}

type Sizes = {
  container: number
  icon: number
  input: number
}
const getSizeMap = () => {
  const map: Record<TextFieldSize, Sizes> = {
    small: {
      container: 12,
      icon: 12,
      input: 12,
    },
    medium: {
      container: 16,
      icon: 16,
      input: 16,
    },
    large: {
      container: 18,
      icon: 18,
      input: 18,
    },
  }
  return map
}

const outlinedStyles = (
  {colors, roundness}: AppTheme,
  variant: TextFieldVariant,
  isFocus: boolean,
) => {
  return StyleSheet.create({
    container: {
      borderColor: isFocus ? colors[variant] : colors.surface,
      borderWidth: 1,
      borderRadius: roundness,
    },
    input: {
      color: colors.onBackground,
    },
    icon: {},
  })
}

const filledStyles = (
  {colors, roundness}: AppTheme,
  variant: TextFieldVariant,
  isFocus: boolean,
) => {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.container,
      borderColor: isFocus ? colors[variant] : colors.container,
      borderWidth: 1,
      borderRadius: roundness,
    },
    input: {
      color: colors.onContainer,
    },
    icon: {},
  })
}

const underlinedStyles = (
  {colors, roundness}: AppTheme,
  variant: TextFieldVariant,
  isFocus: boolean,
) => {
  return StyleSheet.create({
    container: {
      borderBottomColor: isFocus ? colors[variant] : colors.surface,
      borderWidth: 1,
      borderColor: colors.container,
      backgroundColor: colors.container,
      borderTopLeftRadius: roundness,
      borderTopRightRadius: roundness,
    },
    input: {
      color: colors.onContainer,
    },
    icon: {},
  })
}

export default TextField
