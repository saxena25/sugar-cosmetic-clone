// import { useState, useEffect, useRef } from "react";
import { Box, Img, Button } from '@chakra-ui/react';
import {useState, useEffect, useRef} from 'react';
import BestSeller from '../components/BestSeller';

export default function Home(){
    const SlideShow = () =>{

        const images = [
            {src:'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F222f81d2-9159-4946-a4bc-eb26abc7e16f.jpg&w=1920&q=100'},
            {src:'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F83e3bb50-a5e1-4457-a629-ee95c3ab5894.jpg&w=1920&q=100'},
            {src:'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2Fcustom_pages%2Fe469a1d9-cd1b-4589-ab7e-2e4283c11a89.jpg&w=1920&q=100'},
            {src:'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F4be7f445-f538-4c5c-8562-962081c72ca5.jpg&w=1920&q=100'},
            {src: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F43e409cb-84e9-4262-8d94-72bd124298ba.jpg&w=1920&q=100'}
        ]
        const intervalRef = useRef(null);
        const [currentIndex, setCurrentIndex] = useState(0);

        useEffect(() => {
            // clearInterval(intervalRef.current)
            intervalRef.current = setInterval(()=>{
                setCurrentIndex((prevIndex)=> prevIndex === images.length - 1 ? 0 : prevIndex + 1
                )
            },1500)

            return () => clearInterval(intervalRef.current)
        }, [images.length]);

        const prevImage = () =>{
            console.log('prev Button was Clicked')
            setCurrentIndex((prevIndex)=> prevIndex - 1);
            clearInterval(intervalRef.current)
        }

        const nextImage = () =>{
            console.log('next button was clicked')
            setCurrentIndex((prevIndex)=> (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
            clearInterval(intervalRef.current)
        }

        return(
            <>  
                <Box>
                    <Img src={images[currentIndex].src} alt="Slide" />
                    {/* <Box>
                        <Button onClick={prevImage}>&lt;</Button>
                        <Button onClick={nextImage}>&gt;</Button>
                    </Box> */}
                </Box>
            </>
        )

    }

    return(
        <>
            <SlideShow />
            <BestSeller />
        </>
    )
}