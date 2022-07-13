import { Box, SimpleGrid, Text, HStack, VStack } from '@chakra-ui/react'
import Image from 'next/image'

const featuresDefault = [
  {
    id: 1,
    title: '',
    text: 'No procedimento a arcada dentária do paciente é escaneada digitalmente e conforme isso acontece uma imagem 3D é transmitida para o computador. O equipamento reproduz imagens de altíssima precisão, eliminando erros manuais e a necessidade do retrabalho para corrigir erros de moldagem. Todo o processo é muito confortável para o paciente proporcionando uma melhor experiência na consulta e nos resultados! ',
    image: '/images/icons/feature_cube.svg'
  },
  {
    id: 2,
    title: 'SEDAÇÃO INALATÓRIA',
    text: 'A Sedação Inalatória garante o máximo de segurança ao paciente com relação à dor, ao medo e à tensão pré-cirurgia. É uma técnica de sedação segura pois é titulada gradativamente e o paciente ao final, sai do consultório da mesma forma que entrou.No aspecto físico, todos os sentidos do paciente são monitorados durante o procedimento pelo dentista responsável. Em casos de maior risco, tendo sempre a postos equipamento de verificação cardíaca, para monitorar.',
    image: '/images/icons/feature_tooth.svg'
  },
  {
    id: 3,
    title: 'TRANSPLANTE CELULAR ODONTOLÓGICO',
    text: 'O Transplante celular odontológico é um método que potencializa enxertos ósseos, tornando-os mais simplificados. Isso permite a diminuição da invasão cirúrgica, a redução do tempo de espera para a instalação de implantes, traz previsibilidade aos resultados e oferece segurança sobre as reações imunológicas.',
    image: '/images/icons/feature_hive.svg'
  }
]
export interface NextGridListWithHeadingProps {
  title?: string
  titleColor?: string
  bgGradient?: string
  features?: Array<Record<string, any>>
}

export default function NextGridListWithHeading({
  title,
  titleColor,
  bgGradient = 'linear(to-b, next-secondary, next-primary)',
  features = featuresDefault
}: NextGridListWithHeadingProps) {
  return (
    <Box>
      <Text
        pb={6}
        color={titleColor}
        bgGradient={titleColor ? undefined : bgGradient}
        bgClip={!titleColor ? 'text' : undefined}
        fontWeight={700}
        fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
      >
        {title}
      </Text>
      <SimpleGrid spacing={10}>
        {features?.map(feature => (
          <HStack key={feature.id} align={'top'}>
            <Box px={2} display={['none', 'block']}>
              <Image
                alt={feature.title}
                src={feature.image}
                width={70}
                height={70}
                layout={'fixed'}
              />
            </Box>
            <VStack align={'start'}>
              <Text
                color={titleColor}
                bgGradient={titleColor ? undefined : bgGradient}
                bgClip={!titleColor ? 'text' : undefined}
                fontWeight={500}
                fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
              >
                {feature.title}
              </Text>
              <Text color={'gray.600'}>{feature.text}</Text>
            </VStack>
          </HStack>
        ))}
      </SimpleGrid>
    </Box>
  )
}
