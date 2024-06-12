import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink, Flex } from "@chakra-ui/react";
import AdNavbar from './AdNavbar';
import SearchBar from './SearchBar';

const links = [
    {
        to: '/',
        label: 'HOME'
    },
    {
        to: '/sugarPlay',
        label: 'SUGARPLAY',
    },
    {
        to: '/lips',
        label: 'LIPS',
    },
    {
        to: '/eyes',
        label: 'EYES',
    },
    {
        to: '/face',
        label: 'FACE',
    },
    {
        to: '/nails',
        label: 'NAILS',
    },
    {
        to: '/skincare',
        label: 'SKINCARE',
    },
    {
        to: '/accessories',
        label: 'ACCESSORIES',
    },
    {
        to: '/gifting',
        label: 'GIFTING',
    },
    {
        to: '/bestsellers',
        label: 'BESTSELLERS',
    },
    {
        to: '/newlaunchers',
        label: 'NEWLAUNCHERS',
    },
    {
        to: '/offers',
        label: 'OFFERS',
    },
    {
        to: '/blog',
        label: 'BLOG',
    }
]

export default function Navbar(){
    return(
        <>
            <AdNavbar />
            <SearchBar />
            <Flex padding={4} justifyContent='center' bg='rgb(25,24,24)' fontFamily='sans-serif'fontSize='1rem'>
                {links.map((link)=>(
                    <ChakraLink as={ReactRouterLink} to={link.to} key={link.to} paddingRight={9} color='white'>
                        {link.label}
                    </ChakraLink>
                ))}
            </Flex>
        </>
    )
}