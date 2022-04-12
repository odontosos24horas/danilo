
import React from 'react'
import Link from 'next/link'
import {
  Text,
  Stack,
  Box,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Icon,
  Flex
} from '@chakra-ui/react'
import Image from 'next/image'
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from 'react-icons/fa'

export interface NextTeamCardProps {
  name: string
  role: string
  text: string
  avatar: string
  width?: number
  height?: number
  linkedin?: string
  instagram?: string
  youtube?: string
}

const NextTeamCard = ({
  name,
  role,
  text,
  avatar,
  linkedin,
  instagram,
  youtube,
  width = 86,
  height = 86
}: NextTeamCardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box
        maxW={'241px'}
        bg={'next-dark-gray'}
        rounded={'md'}
        borderColor="next-primary"
        borderWidth="1px"
        p={6}
        onClick={onOpen}
        cursor={'pointer'}
      >
        <Stack
          textAlign="left"
        >
          <Image
            alt={name}
            src={avatar}
            width={width}
            height={height}
          />
          <Text
            fontSize="xl"
            fontWeight={600}
          >
            {name}
          </Text>
          <Text color={'gray.200'}>{role}</Text>
        </Stack>
      </Box>
      <Modal size={'xl'} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent bg='dark'>
          <ModalHeader>
            <Image
              alt={name}
              src={avatar}
              width={width}
              height={height}
            />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text
              fontSize="4xl"
              fontWeight={600}
              align={'center'}
            >
              {name}
            </Text>
            <Text
              fontSize="lg"
              align={'center'}
              color={'primary-dark'}
            >
              {role}
            </Text>
            {text}
          </ModalBody>
          <ModalFooter>
            <Flex>
              {linkedin && (
                <Box p="4">
                  <Link href={linkedin}>
                    <a target="_blank" rel="noreferrer">
                      <Icon color="next-primary" as={FaLinkedinIn} w={8} h={8}/>
                    </a>
                  </Link>
                </Box>
              )}
              {instagram && (
                <Box p="4">
                  <Link href={instagram}>
                    <a target="_blank" rel="noreferrer">
                      <Icon color="next-primary" as={FaInstagram} w={8} h={8}/>
                    </a>
                  </Link>
                </Box>
              )}
              {youtube && (
                <Box p="4">
                  <Link href={youtube}>
                    <a target="_blank" rel="noreferrer">
                      <Icon color="next-primary" as={FaYoutube} w={8} h={8}/>
                    </a>
                  </Link>
                </Box>
              )}
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default NextTeamCard
