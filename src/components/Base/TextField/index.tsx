import {useAppTheme} from 'components/theme'
import {TextFieldProps, TextFieldVariant} from 'components/types'
import React, {
  ForwardRefRenderFunction,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import {Pressable, StyleSheet, TextInput} from 'react-native'

const TextField: ForwardRefRenderFunction<Partial<TextInput>, TextFieldProps> = (
  {
    mode = 'outlined',
    variant = 'primary',
    onLeadingPress,
    onTrailingPress,
    Leading,
    Trailing,
    theme: overideTheme,
    style,
    ...props
  },
  ref,
) => {
  const theme = useAppTheme(overideTheme)
  const [isFocused, setFocused] = useState(false)
  const input = useRef<TextInput>(null)
  const focus = () => {
    input.current?.focus()
  }
  const blur = () => {
    input.current?.blur()
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

  useImperativeHandle(ref, () => ({
    ...input.current,
  }))

  return (
    <Pressable style={[staticStyles.container, styles.container]} onPress={focus}>
      {Leading && (
        <Leading width={18} height={18} onPress={onLeadingPress} fill={styles.icon.color} />
      )}
      <TextInput
        style={[theme.typography['bodyMedium'], styles.input, staticStyles.input]}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        blurOnSubmit
        cursorColor={theme.colors[variant]}
        selectionColor={theme.colors[variant]}
        placeholderTextColor={styles.input.color + Math.floor(0.25 * 255)}
        ref={input}
        {...props}
      />
      {Trailing && (
        <Trailing width={18} height={18} onPress={onTrailingPress} fill={styles.icon.color} />
      )}
    </Pressable>
  )
}

const staticStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  input: {
    flex: 1,
    lineHeight: undefined,
    textAlignVertical: 'center',
    paddingVertical: 0,
    height: 56,
  },
})

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

export default forwardRef(TextField)
