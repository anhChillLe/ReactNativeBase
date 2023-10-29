import {useAppTheme} from 'components/theme'
import {FC} from 'react'
import {ActivityIndicator} from 'react-native'
import Animated, {Layout, ZoomIn} from 'react-native-reanimated'

const LoadingPopup: FC = () => {
  const {colors, roundness} = useAppTheme()

  return (
    <Animated.View
      entering={ZoomIn.duration(100)}
      style={{
        backgroundColor: colors.primaryContainer,
        borderRadius: roundness,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 32,
      }}>
      <ActivityIndicator size="large" color={colors.onPrimaryContainer} />
    </Animated.View>
  )
}

export default LoadingPopup
