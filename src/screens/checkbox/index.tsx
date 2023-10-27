import { Center, CheckBox, RadioButton, Row, Screen, Switch, Text } from 'components'
import { useState } from 'react'

const CheckBoxScreen = () => {
  const [checked, setChecked] = useState(false)

  return (
    <Screen>
      <Center style={{flex: 1, gap: 16}}>
        <Text variant='headlineMedium' style={{padding: 32}}>{checked ? 'True' : 'False'}</Text>
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
        <Switch value={checked} onValueChange={setChecked}/>
      </Center>
    </Screen>
  )
}

export default CheckBoxScreen
