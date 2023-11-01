import { yupResolver } from '@hookform/resolvers/yup'
import { Calendar, Mail } from 'assets/icons'
import { Fill, FormTextField, Screen } from 'components'
import { FormDatePicker } from 'components/Form/FormField'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { StyleSheet } from 'react-native'
import { ObjectSchema, date, object, string } from 'yup'

interface FormData {
  email: string
  password: Date
}

const schema: ObjectSchema<FormData> = object().shape({
  email: string().email().required(),
  password: date().required(),
})

const FormScreen = () => {
  const {control} = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  })

  const [date, setDate] = useState(new Date())

  return (
    <Screen style={styles.container} dismissKeyboard>
      <Fill />

      <FormTextField
        control={control}
        name="email"
        placeholder="Email"
        Leading={Mail}
      />

      <FormDatePicker control={control} name='password' defaultValue={new Date()} Leading={Calendar}/>
      <Fill />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {padding: 16, alignItems: 'stretch', gap: 16},
})

export default FormScreen
