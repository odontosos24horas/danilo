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
  Heading
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon
} from '@chakra-ui/icons'

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: 'gray.900' }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
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
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
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
    label: 'QUEM SOMOS',
    href: '#quemsomos'
  },
  {
    label: 'COMO CHEGAR',
    href: '#comochegar'
  },
  {
    label: 'CONVÊNIOS',
    href: '#convenios'
  },
  {
    label: 'TRABALHE CONOSCO',
    href: '#trabalheconosco'
  }
]

const DesktopNav = () => {
  const linkColor = 'next-dark'
  const linkHoverColor = 'next-primary'
  const popoverContentBgColor = 'gray.800'

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                href={navItem.href ?? '#'}
                fontSize={'md'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor
                }}>
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
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
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
          textDecoration: 'none'
        }}>
        <Text
          fontWeight={600}
          color={'white'}
          _hover={{ color: 'next-primary' }}
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
          borderStyle={'solid'}
          borderColor={'gray.700'}
          align={'start'}>
          {children &&
            children.map((child) => (
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
    <Stack
      bg={'next-dark'}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
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
    <Box py={{ base: 0, md: 4 }}>
      <Container maxW="container.xl">
        <Flex
          color={'gray.600'}
          minH={'70px'}
          align={'center'}>
          <Flex flex={{ base: 1 }} justify={{ base: 'center' }}>
            <Image
              src="/images/logos/logo_sos_header.png"
              alt="OdontoSOS Logo"
              width={278}
              height={40}
              layout="fixed"
            />
          </Flex>
          <Flex display={{ base: 'none', md: 'flex' }}>
            <DesktopNav />
          </Flex>

          <Flex flex={{ base: 1 }}justify={{ base: 'center' }}>
            <Box display={{ base: 'none', md: 'block' }}>
              <NextLink href={'tel:3135860900'}>
                <a>
                  <Heading color="next-primary" size="lg">
                    (31) 3586-0900
                  </Heading>
                </a>
              </NextLink>
              <Text color="next-primary" fontSize="sm">
                R. Cláudio Manoel, 223 - Funcionários
              </Text>
            </Box>
          </Flex>

          <Flex
            flex={{ base: 1 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              bg={'transparent'}
              color={'next-primary'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Container>
    </Box>
  )
}

export default NextHeader
