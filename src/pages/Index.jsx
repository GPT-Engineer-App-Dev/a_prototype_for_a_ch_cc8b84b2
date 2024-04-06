import { Box, Button, Center, Container, Flex, FormControl, FormLabel, IconButton, Input, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, Switch, Textarea, useDisclosure, VStack } from "@chakra-ui/react";
import { FaCloudDownloadAlt, FaCog, FaFileUpload, FaPlus, FaPrint } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const sendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, inputValue]);
      setInputValue("");
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFileChange = (e) => {
    // Handle file upload logic here
  };

  return (
    <Container maxW="container.lg" p={5}>
      <SimpleGrid columns={2} spacing={10}>
        <VStack spacing={4} align="stretch">
          <Box p={5} shadow="md" borderWidth="1px">
            <Flex justifyContent="space-between">
              <FormLabel htmlFor="voice-toggle">Voice Communication:</FormLabel>
              <Switch id="voice-toggle" />
            </Flex>
            <Center>
              <Box boxSize="150px">
                <Image src="https://images.unsplash.com/photo-1642334640124-c80d5e7e78d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbmltYXRlZCUyMGF2YXRhcnxlbnwwfHx8fDE3MTIzODQxMDl8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="full" />
              </Box>
            </Center>
            <Center pt={3}>
              <Button leftIcon={<FaPlus />} onClick={onOpen}>
                Upload Avatar
              </Button>
            </Center>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" height="400px" overflowY="auto">
            {messages.map((message, index) => (
              <Box key={index} bg="gray.100" p={3} m={2} borderRadius="md">
                {message}
              </Box>
            ))}
          </Box>
          <Flex>
            <Textarea value={inputValue} onChange={handleInputChange} placeholder="Type your message here..." size="sm" />
            <Button ml={2} onClick={sendMessage}>
              Send
            </Button>
          </Flex>
        </VStack>
        <VStack spacing={4}>
          <Box p={5} shadow="md" borderWidth="1px">
            <Menu>
              <MenuButton as={Button} rightIcon={<FaCloudDownloadAlt />}>
                Download Chat
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => console.log("Download as .docx")}>As .docx</MenuItem>
                <MenuItem onClick={() => console.log("Download as .pdf")}>As .pdf</MenuItem>
                <MenuItem onClick={() => console.log("Download as .txt")}>As .txt</MenuItem>
                <MenuItem onClick={() => console.log("Download as .csv")}>As .csv</MenuItem>
              </MenuList>
            </Menu>
            <IconButton aria-label="Print chat" icon={<FaPrint />} onClick={() => console.log("Print chat")} m={2} />
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <FormControl>
              <FormLabel htmlFor="file-upload">Upload Files:</FormLabel>
              <Input id="file-upload" type="file" p={1} onChange={handleFileChange} multiple />
            </FormControl>
            <Button leftIcon={<FaFileUpload />} onClick={() => console.log("Upload Files")}>
              Upload
            </Button>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <IconButton aria-label="Settings" icon={<FaCog />} onClick={() => console.log("Open settings")} />
            <Text>Settings</Text>
          </Box>
        </VStack>
      </SimpleGrid>
    </Container>
  );
};

export default Index;
