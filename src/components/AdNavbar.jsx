import {Flex} from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

const links = [
    {
        herf: '#',
        label: 'GET APP'
    },
    {
        herf: '#',
        label: 'STORE'
    },
    {
        herf: '#',
        label: 'GIFT CARD'
    },
    {
        herf: '#',
        label: 'HELP'
    }
]


export default function AdNavbar(){
    return(
        <Box w='100%' bgGradient='linear(90deg, rgba(237,9,121,1) 0%, rgba(222,10,60,1) 35%, rgba(42,34,40,1) 100%)'>
            <Flex justify='space-between' w='85%' color='white' m='auto'
                fontSize='1rem' h='2rem' align='center' px='5rem'>
                <h2>Exclusive Freebies on Order Above Rs. 799</h2>
                <Box justify='flex-end' color='white'>
                    {links?.map((link)=>(
                        <ChakraLink as={ReactRouterLink} href={link.herf} key={link.label} padding={2} >{link.label}</ChakraLink>
                    ))}
                </Box>
            </Flex>
        </Box>
    )
}
