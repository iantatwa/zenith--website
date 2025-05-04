import React from 'react';
import { Box, Container, VStack, Heading, Text, Button, Input, useClipboard, useToast } from '@chakra-ui/react';

const Payment = () => {
  const walletAddress = "TVmTnp2HuKEjrhCconbe76YgCYEQ78Cyrw";
  const { hasCopied, onCopy } = useClipboard(walletAddress);
  const toast = useToast();

  const handleCopy = () => {
    onCopy();
    toast({
      title: "Wallet address copied!",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">Payment Details</Heading>
        
        <Box width="100%" p={8} borderRadius="lg" border="1px" borderColor="gray.200">
          <VStack spacing={6}>
            <Heading as="h2" size="md">USDT (TRC20) Payment Address</Heading>
            
            <Box width="100%">
              <Input 
                value={walletAddress}
                isReadOnly
                pr="4.5rem"
              />
              <Button onClick={handleCopy} ml={2} mt={2}>
                {hasCopied ? "Copied!" : "Copy Address"}
              </Button>
            </Box>

            <Text fontSize="sm" color="gray.600">
              Please send the exact amount for your selected program.
              Transaction will be confirmed within 10-30 minutes.
            </Text>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Payment;