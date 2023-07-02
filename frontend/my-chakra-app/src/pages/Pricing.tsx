import { ChakraProvider, Box, Flex, Heading, Text, Image, Button, Stack, AbsoluteCenter, Card, CardHeader, CardBody, CardFooter, Divider, ButtonGroup, Link } from '@chakra-ui/react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import {Spacer} from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import React, { useState } from 'react';
import { HamburgerIcon } from '../../node_modules/@chakra-ui/icons/dist/Hamburger';
import { ChevronDownIcon } from '../../node_modules/@chakra-ui/icons/dist/ChevronDown';
import logo from '../assets/logo.png'; // Replace with the path to your logo image
import img from '../assets/image.png';

import axios from 'axios';


function App() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <ChakraProvider>
        <Box bg = "#827397" height = "100vh" position="relative">
        <Flex
          as="nav"
          align="center"
          padding="1rem"
          bg="#E9D5DA"
          color="white"
          height='50'
          gap='20px'
        >
          <Flex align="center"> 
            <Image src={logo} alt="Logo" boxSize="150px" mr={2} />
          </Flex>
          <Menu>
              <MenuButton
                as={Button}
                variant='outline'
                rightIcon={<ChevronDownIcon />}
              >Action 
              </MenuButton>
              <MenuList>
                <MenuItem color='black'>Individuals</MenuItem>
                <MenuItem color='black'>Businesses</MenuItem>
              </MenuList>
            </Menu>
          {/* <Link href="/how-to-use" fontSize="lg">
            How to Use?
          </Link> */}
          <Link href="/tools" fontSize="lg">
            Tools
          </Link>
          <Link href="/pricing" fontSize="lg">
            Pricing
          </Link>
          <Spacer />
            <Menu>
              <MenuButton
                as={Button}
              
                aria-label='Options'
                variant='outline'
              />
              <MenuList>
                <MenuItem color='black'>New Tab</MenuItem>
                <MenuItem color='black'>New Window</MenuItem>
                <MenuItem color='black'>Open Closed Tab</MenuItem>
                <MenuItem color='black'>Open File...</MenuItem>
              </MenuList>
            </Menu>
          
        </Flex> 
        
        </Box>
      
    </ChakraProvider>
  );
}