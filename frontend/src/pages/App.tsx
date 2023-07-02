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
import { HamburgerIcon } from '../../node_modules/@chakra-ui/icons/dist Hamburger';
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
                color='white'
                aria-label='Options'
                bg = '#E9D5DA'
                variant='solid'
                fontSize='lg'
              >
                How To Use?
              </MenuButton>
              <MenuList>
                <MenuItem color='black'>Individuals</MenuItem>
                <MenuItem color='black'>Businesses</MenuItem>
              </MenuList>
            </Menu>
          {/* <Link href="/how-to-use" fontSize="lg">
            How to Use?
          </Link> */}
          <Link href="/tools" fontSize="lg" fontWeight='bold'>
            Tools
          </Link>
          <Link href="/pricing" fontSize="lg" fontWeight='bold'>
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
        
{/*         
        <Flex
          as="box"
          align="center"
          justify="center"
          padding='4'
          bg = '#BCEAD5'
          my ='50%'
          height='50%'
        > 
          <Flex align="center" height='50%'>
          </Flex> */}
        <Flex
        justify='center'
        >
          <Card
          direction={{ base: 'column', sm: 'row' }}
          // overflow='hidden'
          variant='solid'
          width='90%'
          mt='50'
          bg='#827397'
          color='white'
          justify='space-around'
          >
          
          <CardBody>
            <Heading>Get all your</Heading>
            <Heading color = 'tomato'>documents</Heading>
            <Heading>untangled</Heading>
            <Text paddingTop='2' fontSize='xl'>Your Ultimate Destination for Streamlining Complex Contracts and Facilitating Effortless Agreements with Ease and Efficiency</Text>
          </CardBody>

            <Image
              objectFit='cover'
              // maxW={{ base: '100%', sm: '200px' }}
              src={img}
              paddingLeft='300'
              alt='Analyzing Docs'
            />
          </Card>
        </Flex>
        
        <Flex
        justify='center'
        >
          <Card
          // direction={{ base: 'column', sm: 'row' }}
          // overflow='hidden'
          variant='solid'
          width='100%'
          mt='50'
          bg='#827397'
          color='white'
          align='center'
          >
          
            <Stack>
              <CardBody>
                <Heading textAlign='center'>Upload Your Files!</Heading>
                <Text py='2' textAlign='center'>Upload documents for which you want  simplified T&C</Text>
              </CardBody>

            </Stack>
            <Divider />
          <CardFooter>
          <label htmlFor="file-upload">
            <Button
              as="span"
              marginTop="1"
              colorScheme="Purple"
              variant="outline"
              cursor="pointer"
              align='center'
            >
              Upload File
            </Button>
            <input
              id="file-upload"
              type="file"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            </label>
            {/* {selectedFile && <p>Selected file: {selectedFile.name}</p>} */}
          </CardFooter>
          </Card>
        </Flex>

          {/* <Card maxW='sm'>
          <CardBody>
            <Image
              src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3' textAlign>
            <Heading size='md' textAlign='center'>Upload Your File Here!</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design with a
              sprinkle of vintage design.
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              $450
            </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
          <label htmlFor="file-upload">
            <Button
              as="span"
              marginTop="1"
              colorScheme="teal"
              variant="outline"
              cursor="pointer"
            >
              Upload File
            </Button>
            <input
              id="file-upload"
              type="file"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            </label>
            {/* {selectedFile && <p>Selected file: {selectedFile.name}</p>}
          </CardFooter>
        </Card> 

        
        </Flex> */}

        
        {/* <AbsoluteCenter bg='#BCEAD5' p='4' color='white' axis='both' mt='10' height='80%' width='80%' textAlign='center'>
          <Heading as='h1' fontSize='2xl' paddingTop="40px">
            Upload Files
          </Heading>
          <Text fontSize='xl' marginTop='4'>
            Upload file and we'll list simplified T&C
          </Text>
          <label htmlFor="file-upload">
            <Button
              as="span"
              marginTop="4"
              colorScheme="teal"
              variant="outline"
              cursor="pointer"
            >
              Upload File
          </Button>
            <input
              id="file-upload"
              type="file"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
          </label>
          {selectedFile && <p>Selected file: {selectedFile.name}</p>}
        </AbsoluteCenter> */}
        {/* <Center>
          <Box>
            Hello
          </Box> */}
          {/* <Box textAlign="center" paddingTop="40px">
          <Heading as="h1" size="2xl">
            Welcome to Chakra UI
          </Heading>
          <Text fontSize="xl" marginTop="4">
            Build beautiful interfaces with ease
          </Text>
          <label htmlFor="file-upload">
            <Button
              as="span"
              marginTop="4"
              colorScheme="teal"
              variant="outline"
              cursor="pointer"
            >
              Upload File
            </Button>
            <input
              id="file-upload"
              type="file"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
          </label>
          {selectedFile && <p>Selected file: {selectedFile.name}</p>}
        </Box> */}
        {/* </Center> */}
        </Box>
      
    </ChakraProvider>
  );
}

export default App;

type item = {
  item_name: string
  quantity: number,
  unit_price: number,
  subtotal: number
}

type invoice = {
  invoice_number: string,
  invoice_date: string,
  customer_name: string,
  total_amount: number,
  currency: string,
  items: (item)[], 
  terms_and_conditions: (string)[]
}

const invoiceData = [
  {
    "invoice_number": "INV-123456",
    "invoice_date": "2023-06-30",
    "customer_name": "John Doe",
    "total_amount": 150.25,
    "currency": "INR",
    "items": [
      {
        "item_name": "Industrial Laser",
        "quantity": 2,
        "unit_price": 50.50,
        "subtotal": 101.00
      },
      {
        "item_name": "3D Printer",
        "quantity": 1,
        "unit_price": 48.75,
        "subtotal": 48.75
      }
    ],
    "terms_and_conditions": [
      "You must include GST Invoice",
      "Provide custom support and replacement if any damage to product in normal use for 3 months"
    ]
  }
];

type GetUsersResponse = {
  data: User[];
};

async function getInfo() {
  try {
    // 👇️ const data: GetUsersResponse
    const { data, status } = await axios.get<GetUsersResponse>(
      'https://reqres.in/api/users',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    console.log(JSON.stringify(data, null, 4));

    // 👇️ "response status is: 200"
    console.log('response status is: ', status);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

getInfo();
