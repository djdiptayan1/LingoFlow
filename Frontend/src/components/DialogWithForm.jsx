import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    Text,
    Stack,
    Image,
    Input,
    useDisclosure,
    ModalCloseButton,
  } from '@chakra-ui/react'

const DialogWithForm = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const json = {
        output: "Hello World"
    }
  return (
    <div className='fixed bottom-4 right-4 z-50'>
    <Button onClick={onOpen} >Open Modal</Button>

    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
        <ModalHeader>Hindi to English</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        <Stack direction="column" spacing={4} align="center">
            <Image
                src='https://images.unsplash.com/photo-1657302156083-2e61fb23d161?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80'
                alt='eng to hindi translate'
                borderRadius='lg'
            />
            <form>
                <Input placeholder="Translate" />
            </form>
            <Text marginTop={4} marginLeft={2} >{json.output}</Text>
        </Stack>
        </ModalBody>

        <ModalFooter>
        
        <Button colorScheme='pink'>Submit</Button>
        </ModalFooter>
    </ModalContent>
    </Modal>
    </div>
  )
}

export default DialogWithForm
