import {Screen, Text} from 'components'
import {SafeAreaView, ScrollView} from 'react-native'

const variants: (keyof Typography)[] = [
  'displayLarge',
  'displayMedium',
  'displaySmall',
  'headlineLarge',
  'headlineMedium',
  'headlineSmall',
  'titleLarge',
  'titleMedium',
  'titleSmall',
  'bodyLarge',
  'bodyMedium',
  'bodySmall',
  'labelLarge',
  'labelMedium',
  'labelSmall',
]

const TextScreen = () => {
  console.log(variants)
  return (
    <Screen scrollable contentContainerStyle={{gap: 8, flexGrow: 1, padding: 16}}>
      {variants.map(variant => (
        <Text key={variant} variant={variant}>
          {variant}
        </Text>
      ))}
    </Screen>
  )
}
export default TextScreen
