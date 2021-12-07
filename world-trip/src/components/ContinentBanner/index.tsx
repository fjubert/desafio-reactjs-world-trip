import { Flex, Box, Heading } from '@chakra-ui/react';

interface ContinentBannerProps {
    name: string;
    bgImage: string;
}

export function ContinentBanner({name, bgImage}: ContinentBannerProps) {
    return(
        <Box
            backgroundImage={'url(' + bgImage + ')'}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
        >
            <Box backgroundColor="rgba(0, 0, 0, 0.4)">
                <Flex
                maxWidth={1200}
                mx="auto"
                h={["30vh", "50vh"]}
                w="100%" 
                py={["6", "12"]}
                px="6"
                alignItems={["center", "flex-end"]}
                >
                    <Heading
                        as="h1"
                        mx={["auto", "0"]}
                        fontWeight="700"
                        mb="0"
                        color="gray.50"
                        letterSpacing="0.1rem"
                        fontSize={["1.8rem", "2.3rem"]}
                        textShadow="0 1px 5px rgba(0,0,0,0.6);"
                    >
                        {name}
                    </Heading>
                </Flex>
            </Box>
        </Box>
    )
}