// import { Box } from "@chakra-ui/react";
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link as ReactRouterLink} from 'react-router-dom';
import { InputGroup, InputRightElement, Button, Input, Flex, Img, Box } from '@chakra-ui/react'

export default function SearchBar(){
    return(
        <>
            <Box w='100%'  bg='black' h='3.8rem' m='auto' >
                <Flex w='90%' m='auto' pt='0.5rem' pb='2rem'>
                    <ChakraLink href="#" as={ReactRouterLink} mr='5rem'>
                        <img src="https://in.sugarcosmetics.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNonCVLogoDesktop.86874a45.png&w=256&q=100" alt="" />
                    </ChakraLink>
                    <InputGroup size='md' w='40rem' mr='5rem'>
                        <Input
                            pr='4.5rem'
                            placeholder='Try "Liquid Lipstick"' bg='rgb(32,30,30)' color='white'
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' >Search</Button>
                        </InputRightElement>
                    </InputGroup>
                    <Button bg='black' color='white'  _hover={{cursor:'pointer'}} mr='6rem'>Login/Register</Button>
                    <Button bg='black' _hover={{cursor:'pointer'}} >
                        <Img w='1.5rem' src="https://img.icons8.com/windows/32/FFFFFF/filled-heart.png" alt="filled-heart"/>
                    </Button>
                    <Button bg='black'  _hover={{cursor:'pointer'}}>
                        <Img w='1.5rem' src="https://img.icons8.com/ios-filled/50/FFFFFF/bag-front-view.png" alt="bag-front-view"/>
                    </Button>
                    <Button bg='black'  _hover={{cursor:'pointer'}}>
                        <Img w='1.5rem' src="https://img.icons8.com/ios-glyphs/30/FFFFFF/discount--v1.png" alt="discount--v1"/>
                    </Button>
                </Flex>
            </Box>
        </>
    )
}