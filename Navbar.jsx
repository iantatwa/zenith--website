import React, { useState } from 'react';
import { 
  Box, 
  Flex, 
  Button, 
  Stack, 
  useColorModeValue, 
  Image, 
  HStack,
  IconButton,
  useDisclosure,
  Collapse,
  VStack,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Link as ChakraLink
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { 
  HamburgerIcon, 
  CloseIcon, 
  MoonIcon, 
  SunIcon, 
  ChevronDownIcon, 
  EmailIcon 
} from '@chakra-ui/icons';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <Box>
      <Box bg={useColorModeValue('white', 'gray.800')} px={4} boxShadow="sm" position="sticky" top="0" zIndex="sticky">
        <Flex h={16} alignItems="center" justifyContent="space-between" maxW="container.xl" mx="auto">
          <HStack spacing={4}>
            <Link to="/">
              <Box fontWeight="bold" fontSize="xl" color={useColorModeValue('blue.600', 'blue.300')}>
                Zenethfunding
              </Box>
            </Link>
          </HStack>

          {/* Desktop Navigation */}
          <Stack 
            direction="row" 
            spacing={4} 
            alignItems="center"
            display={{ base: 'none', md: 'flex' }}
          >
            <Menu>
              <MenuButton 
                as={Button} 
                variant="ghost" 
                rightIcon={<ChevronDownIcon />}
                _hover={{ bg: useColorModeValue('blue.50', 'blue.900') }}
              >
                Programs
              </MenuButton>
              <MenuList>
                <MenuItem as={Link} to="/phase-program">Phase Program</MenuItem>
                <MenuItem as={Link} to="/instant-funding">Instant Funding</MenuItem>
              </MenuList>
            </Menu>

            <Link to="/about">
              <Button variant="ghost" _hover={{ bg: useColorModeValue('blue.50', 'blue.900') }}>
                About Us
              </Button>
            </Link>

            <ChakraLink href="mailto:contact@zenithfunding.com" isExternal>
              <IconButton
                aria-label="Email"
                icon={<EmailIcon />}
                variant="ghost"
                _hover={{ bg: useColorModeValue('blue.50', 'blue.900') }}
              />
            </ChakraLink>

            <ChakraLink href="https://instagram.com/zenithfunding" isExternal>
              <IconButton
                aria-label="Instagram"
                icon={<FaInstagram />}
                variant="ghost"
                _hover={{ bg: useColorModeValue('blue.50', 'blue.900') }}
              />
            </ChakraLink>

            <IconButton
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              variant="ghost"
              aria-label="Toggle color mode"
            />

            <Link to="/payment">
              <Button 
                colorScheme="blue" 
                size="md"
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                transition="all 0.2s"
              >
                Get Started
              </Button>
            </Link>
          </Stack>

          {/* Mobile Navigation Toggle */}
          <IconButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>

        {/* Mobile Navigation Menu */}
        <Collapse in={isOpen} animateOpacity>
          <VStack
            p={4}
            display={{ md: 'none' }}
            spacing={4}
            divider={<Box borderColor={useColorModeValue('gray.200', 'gray.700')} />}
          >
            <Link to="/phase-program" style={{ width: '100%' }}>
              <Button variant="ghost" w="full">Phase Program</Button>
            </Link>
            <Link to="/instant-funding" style={{ width: '100%' }}>
              <Button variant="ghost" w="full">Instant Funding</Button>
            </Link>
            <Link to="/about" style={{ width: '100%' }}>
              <Button variant="ghost" w="full">About Us</Button>
            </Link>
            <HStack w="full" justify="center" spacing={4}>
              <ChakraLink href="mailto:contact@zenithfunding.com" isExternal>
                <IconButton
                  aria-label="Email"
                  icon={<EmailIcon />}
                  variant="ghost"
                />
              </ChakraLink>
              <ChakraLink href="https://instagram.com/zenithfunding" isExternal>
                <IconButton
                  aria-label="Instagram"
                  icon={<FaInstagram />}
                  variant="ghost"
                />
              </ChakraLink>
            </HStack>
            <Link to="/payment" style={{ width: '100%' }}>
              <Button colorScheme="blue" w="full">Get Started</Button>
            </Link>
          </VStack>
        </Collapse>
      </Box>
    </Box>
  );
};

export default Navbar;