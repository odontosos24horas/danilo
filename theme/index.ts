import { extendTheme } from '@chakra-ui/react'
import colors from './colors'
import config from './config'
import styles from './styles'
import fonts from './fonts'

const theme = extendTheme({
  colors,
  config,
  styles,
  fonts
})

export default theme
