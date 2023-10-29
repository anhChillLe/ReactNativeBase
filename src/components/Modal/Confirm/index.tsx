import Button from 'components/Base/Button'
import Divider from 'components/Base/Divider'
import Text from 'components/Base/Text'
import Center from 'components/Layout/Center'
import Fill from 'components/Layout/Fill'
import Row from 'components/Layout/Row'
import {useAppTheme} from 'components/theme'
import {ConfirmPopupProps} from 'components/types'
import {FC} from 'react'
import {Pressable} from 'react-native'
import Animated, {FadeInDown} from 'react-native-reanimated'

const ComfirmPopup: FC<ConfirmPopupProps> = ({
  Icon,
  title,
  message,
  positive,
  negative,
  neutral,
}) => {
  const {colors, roundness} = useAppTheme()
  return (
    <Animated.View
      entering={FadeInDown.duration(100)}
      style={[
        {
          width: '80%',
          borderRadius: roundness,
          alignItems: 'stretch',
          backgroundColor: colors.background,
        },
      ]}>
      <Pressable>
        <Text variant="titleLarge" style={{color: colors.primary, padding: 16}}>
            {title}
          </Text>
        <Divider />
        <Text style={{padding: 16}}>{message}</Text>
        <Row style={{padding: 8, gap: 8}}>
          {neutral && <Button mode="empty" {...neutral} />}
          <Fill />
          {negative && <Button mode="empty" {...negative} />}
          <Button mode="empty" {...positive} />
        </Row>
      </Pressable>
    </Animated.View>
  )
}

export default ComfirmPopup
