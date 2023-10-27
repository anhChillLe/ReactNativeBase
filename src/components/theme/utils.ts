import {Material3Theme, Styles} from 'components/theme/JsonTheme/type'

export const revertColor: Record<string, keyof ColorScheme> = {
  primary: 'onPrimary',
  primaryContainer: 'onPrimaryContainer',
  primaryFixed: 'onPrimaryFixed',
  primaryFixedDim: 'onPrimaryFixedVariant',
  secondary: 'onSecondary',
  secondaryContainer: 'onSecondaryContainer',
  secondaryFixed: 'primary',
  onSecondaryFixed: 'onSecondaryFixed',
  secondaryFixedDim: 'onSecondaryFixedVariant',
  tertiary: 'onTertiary',
  tertiaryContainer: 'onTertiaryContainer',
  onTertiaryContainer: 'primary',
  tertiaryFixed: 'onTertiaryFixed',
  tertiaryFixedDim: 'onTertiaryFixedVariant',
  error: 'onError',
  errorContainer: 'onErrorContainer',
  background: 'onBackground',
  surface: 'onSurface',
  surfaceVariant: 'onSurfaceVariant',
  inverseSurface: 'inverseOnSurface',
}