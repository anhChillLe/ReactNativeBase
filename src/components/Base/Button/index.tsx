import Text from 'components/Base/Text'
import {revertColor, useAppTheme, useMemoStyle} from 'components/theme'
import {ButtonProps, ButtonSize, ButtonVariant} from 'components/types'
import {FC, ReactElement, useMemo} from 'react'
import {ActivityIndicator, Platform, StyleSheet, TouchableOpacity} from 'react-native'

const Button: FC<ButtonProps> = ({
  title,
  mode = 'filled',
  variant = 'primary',
  size = 'medium',
  loading,
  Icon,
  textStyle,
  theme: overideTheme,
  style,
  ...props
}): ReactElement => {
  const {colors, roundness} = useAppTheme(overideTheme)

  const sizeMap: Record<ButtonSize, Sizes> = useMemo(() => {
    return {
      small: {
        container: 8,
        icon: 12,
        space: 4,
        roundness: (roundness * 28) / 40,
      },
      medium: {
        container: 12,
        icon: 14,
        space: 6,
        roundness: (roundness * 38) / 40,
      },
      large: {
        container: 16,
        icon: 18,
        space: 8,
        roundness: roundness,
      },
    }
  }, [roundness])

  const styles = useMemo(() => {
    switch (mode) {
      case 'outlined':
        return outlinedButtonStyles(variant, colors)
      case 'filled':
        return filledButtonStyles(variant, colors)
      case 'empty':
        return textButtonStyles(variant, colors)
      case 'filled-total':
        return filledTotalButtonStyles(variant, colors)
    }
  }, [colors, variant, mode])

  const containerStyle = StyleSheet.flatten([
    styles.container,
    buttonStyles.container,
    {
      borderRadius: sizeMap[size].roundness,
      opacity: props.disabled ? 0.5 : 1,
      padding: sizeMap[size].container,
      gap: sizeMap[size].space,
    },
    style,
  ])
  const titleStyle = StyleSheet.flatten([styles.title, buttonStyles.title, textStyle])

  return (
    <TouchableOpacity style={containerStyle} activeOpacity={0.6} {...props}>
      {loading && (
        <ButtonLoadingIndicator size={size} sizeMap={sizeMap} color={styles.title.color} />
      )}
      {Icon && !loading && (
        <Icon fill={styles.title.color} width={sizeMap[size].icon} height={sizeMap[size].icon} />
      )}
      <Text variant={fontMap[size]} style={titleStyle}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const fontMap: Record<ButtonSize, keyof Typography> = {
  small: 'bodySmall',
  medium: 'bodyMedium',
  large: 'bodyLarge',
}

interface ButtonIndicatorProps {
  size: ButtonSize
  color: string
  sizeMap: Record<ButtonSize, Sizes>
}

const ButtonLoadingIndicator = ({size, color, sizeMap}: ButtonIndicatorProps) => {
  const indicatorSize = sizeMap[size].icon
  const style = Platform.select({
    android: {},
    ios: {
      transform: [
        {scaleX: indicatorSize / sizeMap['large'].icon},
        {scaleY: indicatorSize / sizeMap['large'].icon},
      ],
    },
  })

  return <ActivityIndicator color={color} size={indicatorSize} style={style} />
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
    fontWeight: '600',
  },
})

type Sizes = {
  container: number
  icon: number
  space: number
  roundness: number
}

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
    title: {
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
  const titleColor = revertColor[containerColor]

  return StyleSheet.create({
    container: {
      backgroundColor: colors[containerColor],
      borderColor: colors[containerColor],
    },
    title: {
      color: colors[titleColor],
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
  const titleColor = revertColor[containerColor]

  return StyleSheet.create({
    container: {
      backgroundColor: colors[containerColor],
      borderColor: colors[containerColor],
    },
    title: {
      color: colors[titleColor],
    },
  })
}

const textButtonStyles = (variant: ButtonVariant, colors: ColorScheme) => {
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
    title: {
      color: colors[colorsMap[variant]],
    },
  })
}

export default Button
