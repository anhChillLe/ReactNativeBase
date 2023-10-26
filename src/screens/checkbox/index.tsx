import {Center, CheckBox, RadioButton, Row} from 'components'
import {useState} from 'react'
import {SafeAreaView} from 'react-native'

const CheckBoxScreen = () => {
  const [checked, setChecked] = useState(false)

  return (
    <SafeAreaView style={{flex: 1}}>
      <Center style={{flex: 1, gap: 16}}>
        <Row style={{gap: 8, alignItems: 'center'}}>
          <CheckBox checked={checked} onCheckedChange={setChecked} size="small" />
          <CheckBox checked={checked} onCheckedChange={setChecked} size="medium" />
          <CheckBox checked={checked} onCheckedChange={setChecked} size="large" />
        </Row>
        <Row style={{gap: 8, alignItems: 'center'}}>
          <RadioButton checked={checked} onCheckedChange={setChecked} size="small" />
          <RadioButton checked={checked} onCheckedChange={setChecked} size="medium" />
          <RadioButton checked={checked} onCheckedChange={setChecked} size="large" />
        </Row>
      </Center>
    </SafeAreaView>
  )
}

export default CheckBoxScreen
