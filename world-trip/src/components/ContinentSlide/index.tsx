import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Flex, Heading, Text, Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

import "swiper/css/bundle";
import "swiper/css/navigation"
import "swiper/css/pagination"

import SwiperCore, { Navigation,Pagination,Mousewheel,Keyboard } from 'swiper';

SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);

interface ContinentSliderProps {
    id: number;
    name: string;
    slug: string;
    excerpt: string;
    slide_image: string;
}

export function ContinentSlide() {
    const [slider, setSlider] = useState<ContinentSliderProps[]>([]);

    useEffect(() => {
      api.get<ContinentSliderProps[]>('continents').then(response => {
        setSlider(response.data);
      });
    }, []);

    return (
        <>
        <Swiper
            loop={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            className="wtSwiper"
        >
            {slider.map(slide => (
                <SwiperSlide key={String(slide.id)}>
                    <Link href={ `/continentes/${slide.slug}`}>
                        <a><Box
                            backgroundImage={ 'url(' + slide.slide_image + ')' }
                            backgroundPosition="center"
                            backgroundRepeat="no-repeat"
                            backgroundSize="cover"
                            height="60vh"
                            color="gray.50"
                        >
                            <Flex  
                                height="inherit"
                                align="center"
                                justify="center"
                                width="100%"
                                backgroundColor="rgba(0, 0, 0, 0.5)"
                            >
                                <Box>
                                    <Heading 
                                        as="h4" 
                                        textShadow="0 1px 5px rgba(0,0,0,0.5);"
                                    >
                                        {slide.name}
                                    </Heading>
                                    <Text
                                        as="p"
                                        fontSize="1.4rem"
                                        fontWeight="500"
                                        textShadow="0 1px 3px rgba(0,0,0,0.5);"
                                    >
                                        {slide.excerpt}
                                    </Text>
                                </Box>
                            </Flex>
                        </Box></a>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
        </>
    )
}
