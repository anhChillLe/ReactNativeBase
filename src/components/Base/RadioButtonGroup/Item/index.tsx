import RadioButton from 'components/Base/RadioButton'
import {RadioButtonGroupContext} from 'components/Base/RadioButtonGroup/Group'
import Text from 'components/Base/Text'
import {FC, useContext} from 'react'
import {Pressable, StyleSheet} from 'react-native'
import {ViewProps} from 'react-native-svg/lib/typescript/fabric/utils'

const RadioButtonItem: FC<ViewProps & {title: string; value: string}> = ({
  title,
  value: itemValue,
  style,
  ...props
}) => {
  const {value, setValue} = useContext(RadioButtonGroupContext)

  return (
    <Pressable onPress={() => setValue(itemValue)} style={[styles.container, style]} {...props}>
      <RadioButton disabled size="medium" checked={value === itemValue} />
      <Text variant="titleSmall">{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    padding: 4
  },
})

export default RadioButtonItem
