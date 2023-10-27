import { Card, Screen, Text } from 'components'

const CardScreen = () => {
  return (
    <Screen scrollable contentContainerStyle={{padding: 16, gap: 16}}>
      <Card
        mode="filled"
        style={{width: '100%', height: 128, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Filled card</Text>
      </Card>
      <Card
        mode="outlined"
        style={{width: '100%', height: 128, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Outlined card</Text>
      </Card>
    </Screen>
  )
}

export default CardScreen
