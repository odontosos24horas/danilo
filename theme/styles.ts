import { mode } from '@chakra-ui/theme-tools'
import { Dict } from '@chakra-ui/utils'

const styles = {
  global: (props: Dict<any>) => ({
    body: {
      fontFamily: 'body',
      color: mode('#17171B', 'whiteAlpha.900')(props),
      bg: mode('white', '#17171B')(props),
      lineHeight: 'base'
    }
  })
}

export default styles
