import Column from 'components/Layout/Column'
import { FC, createContext, useEffect, useState } from 'react'
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils'

export const RadioButtonGroupContext = createContext<{value?: string; setValue: (value: string) => void}>({
  value: undefined,
  setValue: () => {},
})

interface Props extends ViewProps {
  defaultKey?: string
  onValueChanged?: (value: string) => void
}
const RadioButtonGroup: FC<Props> = ({children, defaultKey, onValueChanged, style,...props}) => {
  const [value, setValue] = useState(defaultKey)

  useEffect(() => {
    onValueChanged && value && onValueChanged(value)
  }, [value, onValueChanged])

  return (
    <RadioButtonGroupContext.Provider value={{value, setValue}}>
      <Column style={[{gap: 8}, style]} {...props}>{children}</Column>
    </RadioButtonGroupContext.Provider>
  )
}

export default RadioButtonGroup
