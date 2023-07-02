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
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { useEffect} from "react";
import React, { useState } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link as RouterLink } from 'react-router-dom';
import { HamburgerIcon } from '../../node_modules/@chakra-ui/icons/dist Hamburger';
import { ChevronDownIcon } from '../../node_modules/@chakra-ui/icons/dist/ChevronDown';

import logo from '../assets/logo.png'; // Replace with the path to your logo image
import img from '../assets/image.png';

import axios from 'axios';
import pricing from './Pricing'; // Import the HowToUse component
import Invoice from './components/Results';


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

type Item = {
  item_name: string
  quantity: number,
  unit_price: number,
  subtotal: number
}

let i = []; 

// type Invoice = {
//   invoice_number: string,
//   invoice_date: string,
//   customer_name: string,
//   total_amount: number,
//   currency: string,
//   items: (Item)[], 
//   terms_and_conditions: (string)[]
// }

// const [invoices, setInvoices] = useState<Invoice[]>("");

// type Invoice = {
//   id: string;
//   date: string;
//   amount: number;
//   status: string;
// };

// function Home() {
//   return (
//     <Box textAlign="center" paddingTop="40px">
//       <Heading as="h1" size="2xl">
//         Welcome to Chakra UI
//       </Heading>
//     </Box>
//   );
// }

async function fetchData(): Promise<any> {
  try {
    const response: AxiosResponse = await axios.get('https://express-server-production-9d26.up.railway.app/invoice');
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

function App() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  // const [show,setShow]=useState(false)
  let show = true; 

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //       "https://express-server-production-9d26.up.railway.app/invoice"
  //       );
  //       setInvoices(response.data);
  //       console.log(response.data)
  //     } catch (error) {
  //         console.log(error);
  //       }
  //   };

  //   fetchData();
  // }, []);

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
          <Link href="./Tools" fontSize="lg" fontWeight='bold'>
            Tools
          </Link>
          <Link fontSize = "lg" fontWeight='bold'> Pricing </Link>
          {/* <Link as={RouterLink} to="/Pricing" fontSize="lg" fontWeight='bold'> */}
            {/* Pricing */}
          {/* </Link> */}
          {/* <Switch> */}
            {/* <Route path="./" exact component={Home} /> */}
            {/* <Route path="./Pricing" component={pricing} /> */}
          {/* </Switch> */}
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
              onSubmit = {() => {
                show = true; 
              }}
            >
              Upload File
            </Button>
            <input
              id="file-upload"
              type="file"
              style={{ display: 'none' }}
            />
            </label>
            {selectedFile && <p>Selected file: {selectedFile.name}</p>}
            <Button
              as="span"
              marginTop="1"
              colorScheme="Purple"
              variant="outline"
              cursor="pointer"
              align='center'
              onSubmit = {() => {
                // onClick={setShow(true)} 
              }}
            >
              Show Results
            </Button>
          </CardFooter>
          </Card>
        </Flex>

        <Invoice invoiceData={invoiceData[0]} show = {show}/>

        </Box>
    </ChakraProvider>
  );
}

export default App;



