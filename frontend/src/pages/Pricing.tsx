import { ChakraProvider, Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

function App() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedCard(index);
  };

  return (
    <ChakraProvider>
      <Box bg="#827397" minHeight="100vh" padding="4">
        <Flex
          direction="column"
          align="center"
          justify="center"
          height="100%"
          color="white"
          textAlign="center"
        >
          <Heading as="h1" size="2xl" marginBottom="4">
            Pricing
          </Heading>
          <Text fontSize="xl" marginBottom="8">
            Choose a plan that works for you
          </Text>

          <Flex align="center" justify="center" marginBottom="8" overflowX="auto">
            <Box
              bg="white"
              borderRadius="md"
              padding="8"
              boxShadow={selectedCard === 0 ? 'xl' : 'md'}
              width="320px"
              marginRight="4"
              onClick={() => handleCardClick(0)}
              cursor="pointer"
            >
              <Text fontSize="xl" marginBottom="4">
                Subscription Plan
              </Text>
              <Text fontSize="lg" marginBottom="2">
                ₹ 13.25 / image
              </Text>
              <Text fontSize="lg" marginBottom="2">
                40 credits / month
              </Text>
              <Text fontSize="lg" marginBottom="4">
                For non-commercial use only
              </Text>
              <Text fontSize="xl" fontWeight="bold" marginBottom="4">
                ₹ 599
              </Text>
              <Button colorScheme="purple" width="100%">
                Choose Plan
              </Button>
            </Box>

            <Box
              bg="white"
              borderRadius="md"
              padding="8"
              boxShadow={selectedCard === 1 ? 'xl' : 'md'}
              width="320px"
              marginRight="4"
              onClick={() => handleCardClick(1)}
              cursor="pointer"
            >
              <Text fontSize="xl" marginBottom="4">
                Subscription Plan
              </Text>
              <Text fontSize="lg" marginBottom="2">
                ₹ 14.98 / image
              </Text>
              <Text fontSize="lg" marginBottom="2">
                200 credits / month
              </Text>
              <Text fontSize="xl" fontWeight="bold" marginBottom="4">
                ₹ 2,650
              </Text>
              <Button colorScheme="purple" width="100%">
                Choose Plan
              </Button>
            </Box>

            <Box
              bg="white"
              borderRadius="md"
              padding="8"
              boxShadow={selectedCard === 2 ? 'xl' : 'md'}
              width="320px"
              onClick={() => handleCardClick(2)}
              cursor="pointer"
            >
              <Text fontSize="xl" marginBottom="4">
                Subscription Plan
              </Text>
              <Text fontSize="lg" marginBottom="2">
                ₹ 13.25 / image
              </Text>
              <Text fontSize="lg" marginBottom="2">
                500 credits / month
              </Text>
              <Text fontSize="xl" fontWeight="bold" marginBottom="4">
                ₹ 5,950
              </Text>
              <Button colorScheme="purple" width="100%">
                Choose Plan
              </Button>
            </Box>
          </Flex>

          <Text fontSize="lg" color="gray.200">
            Need a custom plan? Contact us for more details.
          </Text>
        </Flex>
        <Box marginTop="8" marginBottom="4" textAlign="center">
          <Text fontSize="lg" color="gray.200">
            Footer content goes here
          </Text>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
