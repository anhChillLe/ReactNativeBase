import {useAppTheme} from 'components/theme'
import {DividerProps} from 'components/types'
import {FC} from 'react'
import {Line, Svg} from 'react-native-svg'

const Divider: FC<DividerProps> = ({width, height, mode = 'horizontal', color}) => {
  const {colors} = useAppTheme()
  const defaultWidth =  mode == 'horizontal' ? '100%' : 1.5
  const defaultHeight = mode == 'horizontal' ? 1.5 : '100%'

  return (
    <Svg height={height ?? defaultHeight} width={width ?? defaultWidth}>
      {mode == 'horizontal' ? (
        <Line
          x1="0"
          y1="0"
          x2='100%'
          y2="0"
          stroke={color ?? colors.surface}
          strokeWidth={'200%'}
          opacity={0.25}
        />
      ) : (
        <Line
          x1="0"
          y1="0"
          x2="0"
          y2="100%"
          stroke={color ?? colors.surface}
          strokeWidth={'200%'}
          opacity={0.25}
        />
      )}
    </Svg>
  )
}

export default Divider
