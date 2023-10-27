export interface ColorPalette {
  [key: string]: string
}

interface Style {
  fontFamily: string
  fontWeight:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
  fontSize: number
  lineHeight: number
  letterSpacing: number
}

interface DisplayStyles {
  large: Style
  medium: Style
  small: Style
}

interface ColorScheme {
  primary: string
  onPrimary: string
  primaryContainer: string
  onPrimaryContainer: string
  primaryFixed: string
  onPrimaryFixed: string
  primaryFixedDim: string
  onPrimaryFixedVariant: string
  secondary: string
  onSecondary: string
  secondaryContainer: string
  onSecondaryContainer: string
  secondaryFixed: string
  onSecondaryFixed: string
  secondaryFixedDim: string
  onSecondaryFixedVariant: string
  tertiary: string
  onTertiary: string
  tertiaryContainer: string
  onTertiaryContainer: string
  tertiaryFixed: string
  onTertiaryFixed: string
  tertiaryFixedDim: string
  onTertiaryFixedVariant: string
  error: string
  onError: string
  errorContainer: string
  onErrorContainer: string
  outline: string
  background: string
  onBackground: string
  surface: string
  onSurface: string
  surfaceVariant: string
  onSurfaceVariant: string
  inverseSurface: string
  inverseOnSurface: string
  inversePrimary: string
  shadow: string
  surfaceTint: string
  outlineVariant: string
  scrim: string
  surfaceContainerHighest: string
  surfaceContainerHigh: string
  surfaceContainer: string
  surfaceContainerLow: string
  surfaceContainerLowest: string
  surfaceBright: string
  surfaceDim: string
}

interface ColorSchemes {
  light: ColorScheme
  dark: ColorScheme
}

interface Palette {
  [key: string]: ColorPalette
}

export interface MaterialTheme {
  schemes: ColorSchemes
  palettes?: Palette
  styles: {
    display: DisplayStyles
    headline: DisplayStyles
    body: DisplayStyles
    label: DisplayStyles
    title: DisplayStyles
  }
}

export const theme: MaterialTheme = {
  schemes: {
    light: {
      primary: '#6750A4',
      onPrimary: '#FFFFFF',
      primaryContainer: '#EADDFF',
      onPrimaryContainer: '#21005D',
      primaryFixed: '#EADDFF',
      onPrimaryFixed: '#21005D',
      primaryFixedDim: '#D0BCFF',
      onPrimaryFixedVariant: '#4F378B',
      secondary: '#625B71',
      onSecondary: '#FFFFFF',
      secondaryContainer: '#E8DEF8',
      onSecondaryContainer: '#1D192B',
      secondaryFixed: '#E8DEF8',
      onSecondaryFixed: '#1D192B',
      secondaryFixedDim: '#CCC2DC',
      onSecondaryFixedVariant: '#4A4458',
      tertiary: '#7D5260',
      onTertiary: '#FFFFFF',
      tertiaryContainer: '#FFD8E4',
      onTertiaryContainer: '#31111D',
      tertiaryFixed: '#FFD8E4',
      onTertiaryFixed: '#31111D',
      tertiaryFixedDim: '#EFB8C8',
      onTertiaryFixedVariant: '#633B48',
      error: '#B3261E',
      onError: '#FFFFFF',
      errorContainer: '#F9DEDC',
      onErrorContainer: '#410E0B',
      outline: '#79747E',
      background: '#FEF7FF',
      onBackground: '#1D1B20',
      surface: '#FEF7FF',
      onSurface: '#1D1B20',
      surfaceVariant: '#E7E0EC',
      onSurfaceVariant: '#49454F',
      inverseSurface: '#322F35',
      inverseOnSurface: '#F5EFF7',
      inversePrimary: '#D0BCFF',
      shadow: '#000000',
      surfaceTint: '#6750A4',
      outlineVariant: '#CAC4D0',
      scrim: '#000000',
      surfaceContainerHighest: '#E6E0E9',
      surfaceContainerHigh: '#ECE6F0',
      surfaceContainer: '#F3EDF7',
      surfaceContainerLow: '#F7F2FA',
      surfaceContainerLowest: '#FFFFFF',
      surfaceBright: '#FEF7FF',
      surfaceDim: '#DED8E1',
    },
    dark: {
      primary: '#D0BCFF',
      onPrimary: '#381E72',
      primaryContainer: '#4F378B',
      onPrimaryContainer: '#EADDFF',
      primaryFixed: '#EADDFF',
      onPrimaryFixed: '#21005D',
      primaryFixedDim: '#D0BCFF',
      onPrimaryFixedVariant: '#4F378B',
      secondary: '#CCC2DC',
      onSecondary: '#332D41',
      secondaryContainer: '#4A4458',
      onSecondaryContainer: '#E8DEF8',
      secondaryFixed: '#E8DEF8',
      onSecondaryFixed: '#1D192B',
      secondaryFixedDim: '#CCC2DC',
      onSecondaryFixedVariant: '#4A4458',
      tertiary: '#EFB8C8',
      onTertiary: '#492532',
      tertiaryContainer: '#633B48',
      onTertiaryContainer: '#FFD8E4',
      tertiaryFixed: '#FFD8E4',
      onTertiaryFixed: '#31111D',
      tertiaryFixedDim: '#EFB8C8',
      onTertiaryFixedVariant: '#633B48',
      error: '#F2B8B5',
      onError: '#601410',
      errorContainer: '#8C1D18',
      onErrorContainer: '#F9DEDC',
      outline: '#938F99',
      background: '#141218',
      onBackground: '#E6E0E9',
      surface: '#141218',
      onSurface: '#E6E0E9',
      surfaceVariant: '#49454F',
      onSurfaceVariant: '#CAC4D0',
      inverseSurface: '#E6E0E9',
      inverseOnSurface: '#322F35',
      inversePrimary: '#6750A4',
      shadow: '#000000',
      surfaceTint: '#D0BCFF',
      outlineVariant: '#49454F',
      scrim: '#000000',
      surfaceContainerHighest: '#36343B',
      surfaceContainerHigh: '#2B2930',
      surfaceContainer: '#211F26',
      surfaceContainerLow: '#1D1B20',
      surfaceContainerLowest: '#0F0D13',
      surfaceBright: '#3B383E',
      surfaceDim: '#141218',
    },
  },
  palettes: {
    primary: {
      '0': '#000000',
      '10': '#21005D',
      '20': '#381E72',
      '30': '#4F378B',
      '40': '#6750A4',
      '50': '#7F67BE',
      '60': '#9A82DB',
      '70': '#B69DF8',
      '80': '#D0BCFF',
      '90': '#EADDFF',
      '95': '#F6EDFF',
      '99': '#FFFBFE',
      '100': '#FFFFFF',
    },
    secondary: {
      '0': '#000000',
      '10': '#1D192B',
      '20': '#332D41',
      '30': '#4A4458',
      '40': '#625B71',
      '50': '#7A7289',
      '60': '#958DA5',
      '70': '#B0A7C0',
      '80': '#CCC2DC',
      '90': '#E8DEF8',
      '95': '#F6EDFF',
      '99': '#FFFBFE',
      '100': '#FFFFFF',
    },
    tertiary: {
      '0': '#000000',
      '10': '#31111D',
      '20': '#492532',
      '30': '#633B48',
      '40': '#7D5260',
      '50': '#986977',
      '60': '#B58392',
      '70': '#D29DAC',
      '80': '#EFB8C8',
      '90': '#FFD8E4',
      '95': '#FFECF1',
      '99': '#FFFBFA',
      '100': '#FFFFFF',
    },
    error: {
      '0': '#000000',
      '10': '#410E0B',
      '20': '#601410',
      '30': '#8C1D18',
      '40': '#B3261E',
      '50': '#DC362E',
      '60': '#E46962',
      '70': '#EC928E',
      '80': '#F2B8B5',
      '90': '#F9DEDC',
      '95': '#FCEEEE',
      '99': '#FFFBF9',
      '100': '#FFFFFF',
    },
    neutral: {
      '0': '#000000',
      '4': '#0F0D13',
      '6': '#141218',
      '10': '#1D1B20',
      '12': '#211F26',
      '17': '#2B2930',
      '20': '#322F35',
      '22': '#36343B',
      '24': '#3B383E',
      '30': '#48464C',
      '40': '#605D64',
      '50': '#79767D',
      '60': '#938F96',
      '70': '#AEA9B1',
      '80': '#CAC5CD',
      '87': '#DED8E1',
      '90': '#E6E0E9',
      '92': '#ECE6F0',
      '94': '#F3EDF7',
      '95': '#F5EFF7',
      '96': '#F7F2FA',
      '98': '#FEF7FF',
      '99': '#FFFBFF',
      '100': '#FFFFFF',
    },
    neutralVariant: {
      '0': '#000000',
      '10': '#1D1A22',
      '20': '#322F37',
      '30': '#49454F',
      '40': '#605D66',
      '50': '#79747E',
      '60': '#938F99',
      '70': '#AEA9B4',
      '80': '#CAC4D0',
      '90': '#E7E0EC',
      '95': '#F5EEFA',
      '99': '#FFFBFE',
      '100': '#FFFFFF',
    },
  },
  styles: {
    display: {
      large: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 57,
        lineHeight: 64,
        letterSpacing: -0.25,
      },
      medium: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 45,
        lineHeight: 52,
        letterSpacing: 0,
      },
      small: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 36,
        lineHeight: 44,
        letterSpacing: 0,
      },
    },
    headline: {
      large: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 32,
        lineHeight: 40,
        letterSpacing: 0,
      },
      medium: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 28,
        lineHeight: 36,
        letterSpacing: 0,
      },
      small: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 32,
        letterSpacing: 0,
      },
    },
    body: {
      large: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.5,
      },
      medium: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.25,
      },
      small: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.4000000059604645,
      },
    },
    label: {
      large: {
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.10000000149011612,
      },
      medium: {
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.5,
      },
      small: {
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 11,
        lineHeight: 16,
        letterSpacing: 0.5,
      },
    },
    title: {
      large: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 22,
        lineHeight: 28,
        letterSpacing: 0,
      },
      medium: {
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.15000000596046448,
      },
      small: {
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.10000000149011612,
      },
    },
  },
}

export const theme2: MaterialTheme = {
  schemes: {
    light: {
      primary: '#005ac1',
      onPrimary: '#ffffff',
      primaryContainer: '#d8e2ff',
      onPrimaryContainer: '#001a41',
      primaryFixed: '#d8e2ff',
      onPrimaryFixed: '#001a41',
      primaryFixedDim: '#adc6ff',
      onPrimaryFixedVariant: '#004494',
      secondary: '#575e71',
      onSecondary: '#ffffff',
      secondaryContainer: '#dbe2f9',
      onSecondaryContainer: '#141b2c',
      secondaryFixed: '#dbe2f9',
      onSecondaryFixed: '#141b2c',
      secondaryFixedDim: '#bfc6dc',
      onSecondaryFixedVariant: '#3f4759',
      tertiary: '#715573',
      onTertiary: '#ffffff',
      tertiaryContainer: '#fbd7fc',
      onTertiaryContainer: '#29132d',
      tertiaryFixed: '#fbd7fc',
      onTertiaryFixed: '#29132d',
      tertiaryFixedDim: '#debcdf',
      onTertiaryFixedVariant: '#583e5b',
      error: '#ba1a1a',
      errorContainer: '#ffdad6',
      onError: '#ffffff',
      onErrorContainer: '#410002',
      background: '#fefbff',
      onBackground: '#1b1b1f',
      outline: '#74777f',
      inverseOnSurface: '#f2f0f4',
      inverseSurface: '#303033',
      inversePrimary: '#adc6ff',
      shadow: '#000000',
      surfaceTint: '#005ac1',
      outlineVariant: '#c4c6d0',
      scrim: '#000000',
      surface: '#faf9fd',
      onSurface: '#1b1b1f',
      surfaceVariant: '#e1e2ec',
      onSurfaceVariant: '#44474f',
      surfaceContainerHighest: '#e3e2e6',
      surfaceContainerHigh: '#e9e7ec',
      surfaceContainer: '#efedf1',
      surfaceContainerLow: '#f5f3f7',
      surfaceContainerLowest: '#ffffff',
      surfaceDim: '#dbd9dd',
      surfaceBright: '#faf9fd',
    },
    dark: {
      primary: '#adc6ff',
      onPrimary: '#002e69',
      primaryContainer: '#004494',
      onPrimaryContainer: '#d8e2ff',
      primaryFixed: '#d8e2ff',
      onPrimaryFixed: '#001a41',
      primaryFixedDim: '#adc6ff',
      onPrimaryFixedVariant: '#004494',
      secondary: '#bfc6dc',
      onSecondary: '#293041',
      secondaryContainer: '#3f4759',
      onSecondaryContainer: '#dbe2f9',
      secondaryFixed: '#dbe2f9',
      onSecondaryFixed: '#141b2c',
      secondaryFixedDim: '#bfc6dc',
      onSecondaryFixedVariant: '#3f4759',
      tertiary: '#debcdf',
      onTertiary: '#402843',
      tertiaryContainer: '#583e5b',
      onTertiaryContainer: '#fbd7fc',
      tertiaryFixed: '#fbd7fc',
      onTertiaryFixed: '#29132d',
      tertiaryFixedDim: '#debcdf',
      onTertiaryFixedVariant: '#583e5b',
      error: '#ffb4ab',
      errorContainer: '#93000a',
      onError: '#690005',
      onErrorContainer: '#ffdad6',
      background: '#1b1b1f',
      onBackground: '#e3e2e6',
      outline: '#8e9099',
      inverseOnSurface: '#1b1b1f',
      inverseSurface: '#e3e2e6',
      inversePrimary: '#005ac1',
      shadow: '#000000',
      surfaceTint: '#adc6ff',
      outlineVariant: '#44474f',
      scrim: '#000000',
      surface: '#121316',
      onSurface: '#c7c6ca',
      surfaceVariant: '#44474f',
      onSurfaceVariant: '#c4c6d0',
      surfaceContainerHighest: '#343538',
      surfaceContainerHigh: '#292a2d',
      surfaceContainer: '#1f1f23',
      surfaceContainerLow: '#1b1b1f',
      surfaceContainerLowest: '#0d0e11',
      surfaceDim: '#121316',
      surfaceBright: '#38393c',
    },
  },
  styles: {
    display: {
      large: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 57,
        lineHeight: 64,
        letterSpacing: -0.25,
      },
      medium: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 45,
        lineHeight: 52,
        letterSpacing: 0,
      },
      small: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 36,
        lineHeight: 44,
        letterSpacing: 0,
      },
    },
    headline: {
      large: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 32,
        lineHeight: 40,
        letterSpacing: 0,
      },
      medium: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 28,
        lineHeight: 36,
        letterSpacing: 0,
      },
      small: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 32,
        letterSpacing: 0,
      },
    },
    body: {
      large: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.5,
      },
      medium: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.25,
      },
      small: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.4000000059604645,
      },
    },
    label: {
      large: {
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.10000000149011612,
      },
      medium: {
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.5,
      },
      small: {
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 11,
        lineHeight: 16,
        letterSpacing: 0.5,
      },
    },
    title: {
      large: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 22,
        lineHeight: 28,
        letterSpacing: 0,
      },
      medium: {
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.15000000596046448,
      },
      small: {
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.10000000149011612,
      },
    },
  },
}

export const theme3: MaterialTheme = {
  schemes: {
    light: {
      primary: '#526600',
      onPrimary: '#ffffff',
      primaryContainer: '#d4ed7f',
      onPrimaryContainer: '#171e00',
      primaryFixed: '#d4ed7f',
      onPrimaryFixed: '#171e00',
      primaryFixedDim: '#b8d166',
      onPrimaryFixedVariant: '#3d4d00',
      secondary: '#5b6146',
      onSecondary: '#ffffff',
      secondaryContainer: '#e0e6c4',
      onSecondaryContainer: '#191e08',
      secondaryFixed: '#e0e6c4',
      onSecondaryFixed: '#191e08',
      secondaryFixedDim: '#c4caa9',
      onSecondaryFixedVariant: '#444930',
      tertiary: '#3a665e',
      onTertiary: '#ffffff',
      tertiaryContainer: '#bdece1',
      onTertiaryContainer: '#00201b',
      tertiaryFixed: '#bdece1',
      onTertiaryFixed: '#00201b',
      tertiaryFixedDim: '#a1d0c5',
      onTertiaryFixedVariant: '#214e46',
      error: '#ba1a1a',
      errorContainer: '#ffdad6',
      onError: '#ffffff',
      onErrorContainer: '#410002',
      background: '#fefcf4',
      onBackground: '#1b1c17',
      outline: '#77786b',
      inverseOnSurface: '#f3f1e9',
      inverseSurface: '#30312b',
      inversePrimary: '#b8d166',
      shadow: '#000000',
      surfaceTint: '#526600',
      outlineVariant: '#c7c8b8',
      scrim: '#000000',
      surface: '#fbf9f1',
      onSurface: '#1b1c17',
      surfaceVariant: '#e3e4d3',
      onSurfaceVariant: '#46483c',
      surfaceContainerHighest: '#e4e3da',
      surfaceContainerHigh: '#eae8e0',
      surfaceContainer: '#f0eee6',
      surfaceContainerLow: '#f6f4eb',
      surfaceContainerLowest: '#ffffff',
      surfaceDim: '#dcdad2',
      surfaceBright: '#fbf9f1',
    },
    dark: {
      primary: '#b8d166',
      onPrimary: '#293500',
      primaryContainer: '#3d4d00',
      onPrimaryContainer: '#d4ed7f',
      primaryFixed: '#d4ed7f',
      onPrimaryFixed: '#171e00',
      primaryFixedDim: '#b8d166',
      onPrimaryFixedVariant: '#3d4d00',
      secondary: '#c4caa9',
      onSecondary: '#2d331b',
      secondaryContainer: '#444930',
      onSecondaryContainer: '#e0e6c4',
      secondaryFixed: '#e0e6c4',
      onSecondaryFixed: '#191e08',
      secondaryFixedDim: '#c4caa9',
      onSecondaryFixedVariant: '#444930',
      tertiary: '#a1d0c5',
      onTertiary: '#033730',
      tertiaryContainer: '#214e46',
      onTertiaryContainer: '#bdece1',
      tertiaryFixed: '#bdece1',
      onTertiaryFixed: '#00201b',
      tertiaryFixedDim: '#a1d0c5',
      onTertiaryFixedVariant: '#214e46',
      error: '#ffb4ab',
      errorContainer: '#93000a',
      onError: '#690005',
      onErrorContainer: '#ffdad6',
      background: '#1b1c17',
      onBackground: '#e4e3da',
      outline: '#909283',
      inverseOnSurface: '#1b1c17',
      inverseSurface: '#e4e3da',
      inversePrimary: '#526600',
      shadow: '#000000',
      surfaceTint: '#b8d166',
      outlineVariant: '#46483c',
      scrim: '#000000',
      surface: '#13140f',
      onSurface: '#c8c7bf',
      surfaceVariant: '#46483c',
      onSurfaceVariant: '#c7c8b8',
      surfaceContainerHighest: '#353530',
      surfaceContainerHigh: '#2a2a25',
      surfaceContainer: '#1f201b',
      surfaceContainerLow: '#1b1c17',
      surfaceContainerLowest: '#0e0f0a',
      surfaceDim: '#13140f',
      surfaceBright: '#393a34',
    },
  },
  styles: {
    display: {
      large: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 57,
        lineHeight: 64,
        letterSpacing: -0.25,
      },
      medium: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 45,
        lineHeight: 52,
        letterSpacing: 0,
      },
      small: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 36,
        lineHeight: 44,
        letterSpacing: 0,
      },
    },
    headline: {
      large: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 32,
        lineHeight: 40,
        letterSpacing: 0,
      },
      medium: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 28,
        lineHeight: 36,
        letterSpacing: 0,
      },
      small: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 32,
        letterSpacing: 0,
      },
    },
    body: {
      large: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.5,
      },
      medium: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.25,
      },
      small: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.4000000059604645,
      },
    },
    label: {
      large: {
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.10000000149011612,
      },
      medium: {
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.5,
      },
      small: {
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 11,
        lineHeight: 16,
        letterSpacing: 0.5,
      },
    },
    title: {
      large: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 22,
        lineHeight: 28,
        letterSpacing: 0,
      },
      medium: {
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.15000000596046448,
      },
      small: {
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.10000000149011612,
      },
    },
  },
}
