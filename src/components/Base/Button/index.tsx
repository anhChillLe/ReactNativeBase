import {AppColor, useAppTheme} from 'components/theme'
import {ButtonProps, ButtonSize, ButtonVariant, TStyle, VStyle} from 'components/types'
import {FC, ReactElement} from 'react'
import {ActivityIndicator, Platform, StyleSheet, Text, TouchableOpacity} from 'react-native'

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
  const sizeMap = getSizeMap(roundness)
  const styles = (() => {
    switch (mode) {
      case 'outlined':
        return outlinedButtonStyles(variant, colors)
      case 'filled':
        return filledButtonStyles(variant, colors)
      case 'empty':
        return textButtonStyles(variant, colors)
    }
  })()

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

  const titleStyle = StyleSheet.flatten([
    styles.title,
    buttonStyles.title,
    {fontSize: sizeMap[size].title},
    textStyle,
  ])

  return (
    <TouchableOpacity style={containerStyle} activeOpacity={0.6} {...props}>
      {loading && (
        <ButtonLoadingIndicator size={size} sizeMap={sizeMap} color={styles.title.color} />
      )}
      {Icon && !loading && (
        <Icon fill={styles.title.color} width={sizeMap[size].icon} height={sizeMap[size].icon} />
      )}
      <Text style={titleStyle}>{title}</Text>
    </TouchableOpacity>
  )
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
    fontWeight: '500',
  },
})

type Sizes = {
  container: number
  title: number
  icon: number
  space: number
  roundness: number
}
const getSizeMap = (roundness: number) => {
  const sizeMap: Record<ButtonSize, Sizes> = {
    small: {
      container: 8,
      title: 12,
      icon: 12,
      space: 4,
      roundness: (roundness * 28) / 40,
    },
    medium: {
      container: 12,
      title: 14,
      icon: 14,
      space: 6,
      roundness: (roundness * 38) / 40,
    },
    large: {
      container: 16,
      title: 18,
      icon: 18,
      space: 8,
      roundness: roundness,
    },
  }

  return sizeMap
}

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
    title: {
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
    title: {
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
    title: {
      color: colors[colorsMap[variant]],
    },
  })
}

export default Button
