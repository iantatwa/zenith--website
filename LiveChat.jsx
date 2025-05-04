import React, { useState } from 'react';
import {
  Box,
  VStack,
  Input,
  Button,
  Text,
  useColorModeValue,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  HStack
} from '@chakra-ui/react';
import { ChatIcon } from '@chakra-ui/icons';

const LiveChat = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      setNewMessage('');
      // Simulate response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: "Thank you for your message. Our team will respond shortly.", 
          sender: 'support' 
        }]);
      }, 1000);
    }
  };

  return (
    <>
      <IconButton
        icon={<ChatIcon />}
        colorScheme="blue"
        borderRadius="full"
        position="fixed"
        bottom="4"
        right="4"
        size="lg"
        onClick={onOpen}
        zIndex="overlay"
      />

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Live Support</DrawerHeader>

          <DrawerBody>
            <VStack h="full" spacing={4}>
              <Box flex="1" w="full" overflowY="auto" py={4}>
                {messages.map((message, index) => (
                  <Box
                    key={index}
                    bg={message.sender === 'user' ? 'blue.500' : 'gray.100'}
                    color={message.sender === 'user' ? 'white' : 'black'}
                    p={3}
                    borderRadius="lg"
                    maxW="80%"
                    mb={3}
                    alignSelf={message.sender === 'user' ? 'flex-end' : 'flex-start'}
                  >
                    <Text>{message.text}</Text>
                  </Box>
                ))}
              </Box>

              <HStack w="full" spacing={2}>
                <Input
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button colorScheme="blue" onClick={handleSendMessage}>
                  Send
                </Button>
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default LiveChat;