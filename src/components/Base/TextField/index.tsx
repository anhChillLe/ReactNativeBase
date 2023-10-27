import {useAppTheme} from 'components/theme'
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

  const fontMap: Record<TextFieldSize, keyof Typography> = {
    small: 'bodySmall',
    medium: 'bodyMedium',
    large: 'bodyLarge',
  }

  const sizeMap = getSizeMap()
  const icSize = theme.typography[fontMap[size]].fontSize
  const containerSize = sizeMap[size].container

  const containerStyle: VStyle = {
    padding: containerSize,
    flexDirection: 'row',
    alignItems: 'center',
    gap: containerSize / 2,
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
    <Animated.View style={[containerStyle, styles.container]}>
      {Leading && (
        <Leading width={icSize} height={icSize} onPress={onLeadingPress} fill={styles.icon.color} />
      )}
      <TextInput
        style={[{flex: 1}, theme.typography[fontMap[size]], {lineHeight: undefined, textAlignVertical: 'center'}]}
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
          fill={styles.icon.color}
        />
      )}
    </Animated.View>
  )
}

type Sizes = {
  container: number
  icon: number
}
const getSizeMap = () => {
  const map: Record<TextFieldSize, Sizes> = {
    small: {
      container: 12,
      icon: 12,
    },
    medium: {
      container: 16,
      icon: 16,
    },
    large: {
      container: 18,
      icon: 18,
    },
  }
  return map
}

const filledStyles = (
  {colors, roundness}: AppTheme,
  variant: TextFieldVariant,
  isFocus: boolean,
) => {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.surfaceContainerHighest,
      borderColor: isFocus ? colors[variant] : colors.surfaceContainerHighest,
      borderWidth: 1,
      borderRadius: roundness,
    },
    input: {
      color: colors.onSurfaceVariant,
    },
    icon: {
      color: isFocus ? colors[variant] : colors.onSurfaceVariant,
    },
  })
}

const outlinedStyles = (
  {colors, roundness}: AppTheme,
  variant: TextFieldVariant,
  isFocus: boolean,
) => {
  return StyleSheet.create({
    container: {
      borderColor: isFocus ? colors[variant] : colors.onSurfaceVariant,
      borderWidth: 1,
      borderRadius: roundness,
    },
    input: {
      color: colors.onBackground,
    },
    icon: {
      color: isFocus ? colors[variant] : colors.onSurfaceVariant,
    },
  })
}

const underlinedStyles = (
  {colors, roundness}: AppTheme,
  variant: TextFieldVariant,
  isFocus: boolean,
) => {
  return StyleSheet.create({
    container: {
      borderBottomColor: isFocus ? colors[variant] : colors.onSurfaceVariant,
      borderWidth: 1,
      borderColor: colors.surfaceContainerHighest,
      backgroundColor: colors.surfaceContainerHighest,
      borderTopLeftRadius: roundness,
      borderTopRightRadius: roundness,
    },
    input: {
      color: colors.onSurface,
    },
    icon: {
      color: isFocus ? colors[variant] : colors.onSurfaceVariant,
    },
  })
}

export default TextField
