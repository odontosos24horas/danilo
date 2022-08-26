import React from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
  Container,
  Heading,
  HStack
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons'

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      color={'white'}
      p={2}
      rounded={'md'}
      _hover={{ bg: 'next-quaternary' }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text transition={'all .3s ease'} _groupHover={{ color: 'white' }} fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'next-primary'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  )
}

interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'A CLÍNICA',
    href: '/'
  },
  {
    label: 'ESPECIALIDADES',
    children: [
      {
        label: 'Dr. Danilo',
        href: '/especialidades/danilo'
      },
      {
        label: 'Dra. Rosane',
        href: '/especialidades/rosane'
      }
    ]
  },
  {
    label: 'FOTOS',
    href: '/fotos'
  },
  {
    label: 'CONVÊNIOS',
    href: '/convenios'
  },
  {
    label: 'TRATAMENTOS',
    href: '/tratamentos'
  },
  {
    label: 'VÍDEOS',
    href: '/videos'
  },
  {
    label: 'CONTATO',
    href: '/contato'
  }
]

const DesktopNav = () => {
  const linkColor = 'next-primary'
  const linkHoverColor = 'white'
  const popoverContentBgColor = 'next-primary'

  return (
    <Stack direction={'row'}>
      {NAV_ITEMS.map(navItem => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                href={navItem.href ?? '#'}
                fontSize={'lg'}
                fontWeight={500}
                color={linkColor}
                minH="80px"
                px={2}
                py={'28px'}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                  bgColor: 'next-primary'
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map(child => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
          bgColor: 'next-secondary'
        }}
      >
        <Text
          fontWeight={600}
          color={'next-primary'}
          _hover={{
            textDecoration: 'none',
            color: 'white'
          }}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>
      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          color={'next-primary'}
          borderStyle={'solid'}
          borderColor={'next-primary'}
          align={'start'}
        >
          {children &&
            children.map(child => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

const MobileNav = () => {
  return (
    <Stack bg={'next-dark'} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <NextLink href={'tel:3135860900'}>
        <a>
          <Heading mt={8} color="white" size="lg">
            (31) 3586-0900
          </Heading>
        </a>
      </NextLink>
    </Stack>
  )
}

const NextHeader = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <header>
      <Container maxW="container.xl">
        <HStack color={'gray.600'} spacing="24px" minH="100px" align={'center'} mt={2}>
          <Box w={'250px'}>
            <NextLink href={'/'}>
              <a>
                <Image
                  src="/images/logos/logo_header.svg"
                  alt="Logo Danilo Antunes"
                  width={250}
                  height={42}
                  layout="fixed"
                />
              </a>
            </NextLink>
            {/* <NextLink href={'/'}>
              <a>
                <Image
                  src="/images/logos/logo_rosane.svg"
                  alt="Logo Dra Rosane Lage Lacerda"
                  width={250}
                  height={42}
                />
              </a>
            </NextLink> */}
          </Box>
          <Box display={{ base: 'none', md: 'flex' }}>
            <DesktopNav />
          </Box>
          <Box display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
              bg={'transparent'}
              color={'next-primary'}
              aria-label={'Toggle Navigation'}
            />
          </Box>
        </HStack>
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Container>
    </header>
  )
}

export default NextHeader
