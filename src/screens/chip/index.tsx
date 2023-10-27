import { Check, Mail } from "assets/icons"
import { Center, Chip, Row, Screen } from "components"

const ChipScreen = () => {
  return (
    <Screen>
      <Center style={{flex: 1, gap: 16}}>
        <Chip title="Chip" mode="filled" Leading={Mail}/>
        <Chip title="Chip" mode="outlined" Trailing={Check}/>
        <Chip title="Chip" mode="outlined" Leading={Mail} Trailing={Check}/>
        <Chip title="Chip" mode="filled" Leading={Mail} Trailing={Check}/>
        <Chip title="Chip" mode="outlined" />
      </Center>
    </Screen>
  )
}

export default ChipScreen