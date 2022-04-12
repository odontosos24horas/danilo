import React from 'react'
import {
  Button,
  Text
} from '@chakra-ui/react'

import Link from 'next/link'

const NextContactUs = () => {
  return (
    <>
      <Text color="white">
        Seja um novo profissional da Odonto S.O.S!
      </Text>
      <Text color="white">
        Faça parte da nossa equipe de colaboradores!
      </Text>
      <Text color="white">
        Se você se identifica com a nossa empresa e quer trabalhar conosco, envie seu currículo para o e-mail:
      </Text>
      <Link href={'mailto:odontosos@odontosos.com.br?subject=Currículo&body=Olá,%20Odonto,%0Dsegue%20meu%20currículo em%20anexo.'}>
        <a>
          <Button
            bg={'next-dark'}
            textColor={'white'}
            borderColor="next-primary"
            variant={'solid'}
            height="45px"
            borderRadius="50px"
            _hover={{ bg: 'next-dark' }}
          >
            odontosos@odontosos.com.br
          </Button>
        </a>
      </Link>
    </>
  )
}

export default NextContactUs
