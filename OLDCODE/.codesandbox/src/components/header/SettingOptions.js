import {
    Modal,
    Button,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Lorem,
    ModalCloseButton,
    useDisclosure,
    Text
  } from "@chakra-ui/react";
  
  export const SettingOptions = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>
                list of settings for something if forget what i was going to put
                here
              </Text>
              <Text>
                - Lets to a tab modal, 1st page is adding new event, sucsh as PTO
                and Shutdown <br /> - 2nd would be the toggle of US holidays
              </Text>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };
  