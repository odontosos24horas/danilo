import React, { useEffect } from 'react'
import { Box, Center, Container, Heading, Link, Stack, Text } from '@chakra-ui/react'
import NextLayout from '../components/templates/nextLayout'

const NextHome = () => {
  useEffect(() => {
    process.nextTick(() => {
      if (globalThis.window) {
        const script = document.createElement('script')
        script.innerHTML = `!function($_x,_s,id){
          var js, fjs=$_x.getElementsByTagName(_s)[0];
          if(!$_x.getElementById(id)){
            js = $_x.createElement(_s);
            js.id = id;
            js.src = "//platform.docplanner.com/js/widget.js";
            fjs.parentNode.insertBefore(js,fjs);
          }
        }(document,"script","zl-widget-s");`
        document.body.appendChild(script)
      }
    })
  }, [])
  return (
    <NextLayout>
      <Center>
        <Heading
          fontWeight={900}
          as={'span'}
          bgGradient="linear(to-b, #EACE8C, #D6BD82)"
          bgClip="text"
          fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
        >
          Contato
        </Heading>
      </Center>
      <Container>
        <Box py={8}>
          <Stack>
            <Heading color="next-primary" size="md">
              Dr. Danilo Antunes
            </Heading>
            <Link href={'tel:03133188718'}>
              <Heading color="next-primary" size="md">
                (31) 3318-8718
              </Heading>
            </Link>
            <Link href={'https://www.instagram.com/dr.daniloantunes'} color="next-primary">
              Instagram Dr. Danilo
            </Link>
          </Stack>
        </Box>
        <Box pb={8}>
          <Stack>
            <Heading color="next-primary" size="md">
              Dra. Rosane Lage Lacerda
            </Heading>
            <Link href={'tel:025552779'}>
              <Heading color="next-primary" size="md">
                (31) 2555-2779
              </Heading>
            </Link>
            <Link href={'https://www.instagram.com/dra.rosane.lage'} color="next-primary">
              Instagram Dra. Rosane
            </Link>
          </Stack>
          <Text color="next-primary" fontSize="sm">
            Rua Gonçalves Dias, 82 | Sala 902 - Bairro Funcionários - Cep 30140-190
          </Text>
        </Box>
      </Container>
      <Box bg={'next-gray-dark'} py={'12'}>
        <a
          id="zl-url"
          className="zl-url"
          href="https://www.doctoralia.com.br/danilo-antunes/dentista/belo-horizonte"
          rel="nofollow"
          data-zlw-doctor="danilo-antunes"
          data-zlw-type="big"
          data-zlw-opinion="true"
          data-zlw-hide-branding="true"
          data-zlw-saas-only="true"
        >
          Danilo Antunes - Doctoralia.com.br
        </a>
      </Box>
    </NextLayout>
  )
}

export default NextHome
