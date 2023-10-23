import {AppColor, useAppTheme} from 'components/theme'
import {ButtonProps, ButtonSize, Variant} from 'components/types'
import {FC, ReactElement} from 'react'
import {ActivityIndicator, Platform, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native'

const Button: FC<ButtonProps> = ({
  title,
  mode = 'filled',
  variant = 'primary',
  size = 'medium',
  loading,
  Icon,
  textStyle,
  style,
  ...props
}): ReactElement => {
  const {colors, roundness} = useAppTheme()
  const styles =
    mode == 'outlined'
      ? outlinedButtonStyles(variant, colors)
      : mode == 'filled'
      ? filledButtonStyles(variant, colors)
      : textButtonStyles(variant, colors)
  const sizeMap: Record<
    ButtonSize,
    {
      container: number
      title: number
      icon: number
      space: number
      roundness: number
    }
  > = {
    small: {
      container: 8,
      title: 12,
      icon: 12,
      space: 4,
      roundness: roundness * 28 / 40
    },
    medium: {
      container: 12,
      title: 14,
      icon: 14,
      space: 6,
      roundness: roundness * 38 / 40
    },
    large: {
      container: 16,
      title: 18,
      icon: 18,
      space: 8,
      roundness: roundness
    },
  }

  return (
    <TouchableOpacity
      style={[
        styles.container,
        buttonStyles.container,
        {
          borderRadius: sizeMap[size].roundness,
          opacity: props.disabled ? 0.5 : 1,
          padding: sizeMap[size].container,
          gap: sizeMap[size].space,
        },
        style,
      ]}
      activeOpacity={0.6}
      {...props}>
      {loading && (
        <ActivityIndicator
          color={styles.title.color}
          size={sizeMap[size].icon}
          style={
            Platform.OS == 'ios'
              ? {
                  transform: [
                    {
                      scaleX: sizeMap[size].icon / sizeMap['large'].icon,
                    },
                    {
                      scaleY: sizeMap[size].icon / sizeMap['large'].icon,
                    },
                  ],
                }
              : undefined
          }
        />
      )}
      {Icon && !loading && <Icon fill={styles.title.color} width={sizeMap[size].icon} height={sizeMap[size].icon} />}
      <Text style={[styles.title, buttonStyles.title, {fontSize: sizeMap[size].title}, textStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

const buttonStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    fontWeight: '500',
  },
})

const outlinedButtonStyles = (variant: Variant, colors: AppColor) => {
  const colorMap: Record<Variant, keyof AppColor> = {
    primary: 'primary',
    secondary: 'secondary',
    error: 'error',
    normal: 'surface',
  }

  return StyleSheet.create({
    container: {
      borderColor: colors[colorMap[variant]],
    },
    title: {
      color: colors[colorMap[variant]],
    },
  })
}

const filledButtonStyles = (variant: Variant, colors: AppColor) => {
  const bgColorsMap: Record<Variant, keyof AppColor> = {
    primary: 'primary',
    secondary: 'secondary',
    error: 'error',
    normal: 'surface',
  }
  const titleColorMap: Record<Variant, keyof AppColor> = {
    primary: 'onPrimary',
    secondary: 'onSecondary',
    error: 'onError',
    normal: 'onSurface',
  }

  return StyleSheet.create({
    container: {
      backgroundColor: colors[bgColorsMap[variant]],
      borderColor: colors[bgColorsMap[variant]],
    },
    title: {
      color: colors[titleColorMap[variant]],
    },
  })
}

const textButtonStyles = (variant: Variant, colors: AppColor) => {
  const colorsMap: Record<Variant, keyof AppColor> = {
    primary: 'primary',
    secondary: 'secondary',
    error: 'error',
    normal: 'surface',
  }

  return StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
    },
    title: {
      color: colors[colorsMap[variant]],
    },
  })
}

export default Button
