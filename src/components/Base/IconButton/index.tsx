import {revertColor, useAppTheme} from 'components/theme'
import {ButtonSize, IconButtonProps, ButtonVariant} from 'components/types'
import {FC, ReactElement} from 'react'
import {StyleSheet, TouchableOpacity} from 'react-native'

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
  const styles = (() => {
    switch (mode) {
      case 'outlined':
        return outlinedButtonStyles(variant, colors)
      case 'filled':
        return filledButtonStyles(variant, colors)
      case 'filled-total':
        return filledTotalButtonStyles(variant, colors)
      case 'empty':
        return emptyButtonStyles(variant, colors)
    }
  })()

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
          padding: sizeMap[size].container,
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

const outlinedButtonStyles = (variant: ButtonVariant, colors: ColorScheme) => {
  const colorMap: Record<ButtonVariant, keyof ColorScheme> = {
    primary: 'primary',
    secondary: 'secondary',
    tertiary: 'tertiary',
    error: 'error',
    normal: 'onSurfaceVariant',
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

const filledButtonStyles = (variant: ButtonVariant, colors: ColorScheme) => {
  const bgColorsMap: Record<ButtonVariant, keyof ColorScheme> = {
    primary: 'primary',
    secondary: 'secondary',
    tertiary: 'tertiary',
    error: 'error',
    normal: 'surfaceVariant',
  }
  const containerColor = bgColorsMap[variant]
  const iconColor = revertColor[containerColor]

  return StyleSheet.create({
    container: {
      backgroundColor: colors[containerColor],
      borderColor: colors[containerColor],
    },
    icon: {
      color: colors[iconColor],
    },
  })
}

const filledTotalButtonStyles = (variant: ButtonVariant, colors: ColorScheme) => {
  const bgColorsMap: Record<ButtonVariant, keyof ColorScheme> = {
    primary: 'primaryContainer',
    secondary: 'secondaryContainer',
    tertiary: 'tertiaryContainer',
    error: 'errorContainer',
    normal: 'surfaceContainer',
  }
  const containerColor = bgColorsMap[variant]
  const iconColor = revertColor[containerColor]

  return StyleSheet.create({
    container: {
      backgroundColor: colors[containerColor],
      borderColor: colors[containerColor],
    },
    icon: {
      color: colors[iconColor],
    },
  })
}

const emptyButtonStyles = (variant: ButtonVariant, colors: ColorScheme) => {
  const colorsMap: Record<ButtonVariant, keyof ColorScheme> = {
    primary: 'primary',
    secondary: 'secondary',
    tertiary: 'tertiary',
    error: 'error',
    normal: 'onSurfaceVariant',
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
