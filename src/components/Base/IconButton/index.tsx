import { AppColor, useAppTheme } from 'components/theme'
import { ButtonSize, IconButtonProps, ButtonVariant } from 'components/types'
import { FC, ReactElement } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

const IconButton: FC<IconButtonProps> = ({
  mode = 'filled',
  variant = 'primary',
  size = 'medium',
  badge,
  Icon,
  style,
  theme: overideTheme,
  ...props
}): ReactElement => {
  const {colors, roundness} = useAppTheme(overideTheme)
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
      icon: number
      roundness: number
    }
  > = {
    small: {
      container: 8,
      icon: 12,
      roundness: (roundness * 28) / 40,
    },
    medium: {
      container: 12,
      icon: 18,
      roundness: (roundness * 38) / 40,
    },
    large: {
      container: 16,
      icon: 24,
      roundness: roundness,
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
          padding: sizeMap[size].container
        },
        style,
      ]}
      activeOpacity={0.6}
      {...props}>
      <Icon fill={styles.icon.color} width={sizeMap[size].icon} height={sizeMap[size].icon} />
    </TouchableOpacity>
  )
}

const buttonStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
  },
})

const outlinedButtonStyles = (variant: ButtonVariant, colors: AppColor) => {
  const colorMap: Record<ButtonVariant, keyof AppColor> = {
    primary: 'primary',
    secondary: 'secondary',
    error: 'error',
    normal: 'surface',
  }

  return StyleSheet.create({
    container: {
      borderColor: colors[colorMap[variant]],
    },
    icon: {
      color: colors[colorMap[variant]],
    },
  })
}

const filledButtonStyles = (variant: ButtonVariant, colors: AppColor) => {
  const bgColorsMap: Record<ButtonVariant, keyof AppColor> = {
    primary: 'primary',
    secondary: 'secondary',
    error: 'error',
    normal: 'surface',
  }
  const titleColorMap: Record<ButtonVariant, keyof AppColor> = {
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
    icon: {
      color: colors[titleColorMap[variant]],
    },
  })
}

const textButtonStyles = (variant: ButtonVariant, colors: AppColor) => {
  const colorsMap: Record<ButtonVariant, keyof AppColor> = {
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
    icon: {
      color: colors[colorsMap[variant]],
    },
  })
}

export default IconButton
