import React from 'react'
import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import NextButton from '../../atoms/nextButton'
import {
  APRESENTACAO,
  ENDERECO,
  TELEFONE_DANILO,
  TELEFONE_DANILO_E164,
  WHATSAPP_URL
} from '../../../data/site'

/** Bloco de localização e contato usado no fim das páginas de tratamento. */
const NextTreatmentCta = () => (
  <Box bg="next-gray-dark" borderRadius="lg" p={{ base: 6, md: 8 }}>
    <Stack spacing={4}>
      <Heading as="h2" size="lg" color="next-primary">
        Atendimento em Belo Horizonte
      </Heading>
      <Text color="next-quaternary">
        {ENDERECO.logradouro}, {ENDERECO.complemento} - {ENDERECO.bairro}, {ENDERECO.cidade} -{' '}
        {ENDERECO.estado}, CEP {ENDERECO.cep}.
      </Text>
      <Text color="next-quaternary" fontSize="sm">
        {APRESENTACAO}.
      </Text>
      <Text color="next-quaternary">
        A indicação de qualquer tratamento depende de consulta e exames. Agende uma avaliação:
      </Text>
      <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          <NextButton>Agendar pelo WhatsApp</NextButton>
        </a>
        <a href={`tel:${TELEFONE_DANILO_E164}`}>
          <NextButton bg="white" textColor="next-primary" variant="outline">
            Ligar {TELEFONE_DANILO}
          </NextButton>
        </a>
      </Stack>
    </Stack>
  </Box>
)

export default NextTreatmentCta
