import {AppTheme, useAppTheme} from 'components/theme'
import {TStyle, TextFieldProps, TextFieldSize, TextFieldVariant, VStyle} from 'components/types'
import React, {FC, useState} from 'react'
import {StyleSheet, TextInput} from 'react-native'
import Animated from 'react-native-reanimated'

const TextField: FC<TextFieldProps> = ({
  size = 'medium',
  mode = 'outlined',
  variant = 'primary',
  Leading,
  Trailing,
  ...props
}) => {
  const theme = useAppTheme()
  const sizeMap = getSizeMap()
  const [isFocused, setFocused] = useState(false)

  const icSize = sizeMap[size].icon
  const textSize = sizeMap[size].input
  const containerSize = sizeMap[size].container
  const containerStyle: VStyle = {
    padding: containerSize,
    flexDirection: 'row',
    alignItems: 'center',
    gap: containerSize / 2,
  }
  const inputStyle: TStyle = {
    fontSize: textSize,
  }

  const getStyles = mode == 'filled' ? filledStyles : mode == 'outlined' ? outlinedStyles : underlinedStyles
  const styles = getStyles(theme, variant, isFocused)

  return (
    <Animated.View style={[containerStyle, styles.container]}>
      {Leading && (
        <Leading
          width={icSize}
          height={icSize}
          fill={isFocused ? theme.colors[variant] : styles.input.color}
          style={styles.icon}
        />
      )}
      <TextInput
        style={[{flex: 1}, inputStyle, styles.input, props.style]}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        cursorColor={theme.colors[variant]}
        selectionColor={theme.colors[variant]}
        placeholderTextColor={styles.input.color + '77'}
        {...props}
      />
      {Trailing && (
        <Trailing
          width={icSize}
          height={icSize}
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

const outlinedStyles = ({colors, roundness}: AppTheme, variant: TextFieldVariant, isFocus: boolean) => {
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

const filledStyles = ({colors, roundness}: AppTheme, variant: TextFieldVariant, isFocus: boolean) => {
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

const underlinedStyles = ({colors, roundness}: AppTheme, variant: TextFieldVariant, isFocus: boolean) => {
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
