import TextField from 'components/Base/TextField'
import {useAppTheme} from 'components/theme'
import {TextFieldProps} from 'components/types'
import {ReactElement, useState} from 'react'
import {Control, Controller, FieldPath, FieldPathValue, FieldValues} from 'react-hook-form'
import {Pressable} from 'react-native'
import DatePicker, {DatePickerProps} from 'react-native-date-picker'

interface Props<T extends FieldValues, TName extends FieldPath<T>> extends TextFieldProps {
  name: TName
  control: Control<T>
  defaultValue?: FieldPathValue<T, TName>
}

const FormTextField = <T extends FieldValues, TName extends FieldPath<T>>({
  name,
  control,
  defaultValue,
  ...inputProps
}: Props<T, TName>): ReactElement => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({field: {onChange, onBlur, value, disabled, ref}, fieldState: {error, invalid}}) => {
        return (
          <TextField
            ref={ref}
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            disabled={disabled}
            variant={invalid ? 'error' : 'primary'}
            {...inputProps}
          />
        )
      }}
    />
  )
}

const FormDatePicker = <T extends FieldValues, TName extends FieldPath<T>>({
  name,
  control,
  defaultValue,
  ...inputProps
}: Props<T, TName>): ReactElement => {
  const {isDark, colors} = useAppTheme()
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({field: {onChange, value, ref, disabled, onBlur}, fieldState: {error, invalid}}) => {
        const [visible, setVisible] = useState(false)

        return (
          <>
            <TextField
              ref={ref}
              value={(value as Date).toLocaleDateString()}
              onBlur={onBlur}
              onChangeText={onChange}
              disabled={disabled}
              editable={false}
              variant={invalid ? 'error' : 'primary'}
              onPress={() => setVisible(true)}
              onPressIn={() => setVisible(true)}
              {...inputProps}
            />
            <DatePicker
              modal
              open={visible}
              date={value}
              mode="date"
              theme={isDark ? 'dark' : 'light'}
              onConfirm={date => {
                setVisible(false)
                onChange(date)
              }}
              onCancel={() => {
                setVisible(false)
              }}
              textColor={colors.primary}
            />
          </>
        )
      }}
    />
  )
}

export {FormDatePicker, FormTextField}
