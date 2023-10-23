import { AppColor, useAppTheme } from 'components/theme'
import { ButtonSize, IconButtonProps, Variant } from 'components/types'
import { FC, ReactElement } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

const IconButton: FC<IconButtonProps> = ({
  mode = 'filled',
  variant = 'primary',
  size = 'medium',
  badge,
  Icon,
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
    icon: {
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
    icon: {
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
    icon: {
      color: colors[colorsMap[variant]],
    },
  })
}

export default IconButton
