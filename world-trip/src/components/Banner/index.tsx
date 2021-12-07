import { Box, Heading, Text, SimpleGrid, Image, useBreakpointValue } from '@chakra-ui/react';

export function Banner() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })  
    return(
        <Box
            backgroundImage="url('/images/background.jpg')"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
        >
            <SimpleGrid 
                columns={[1,2]}
                spacing={10}
                w="100%" 
                maxWidth={1200} 
                mx="auto"
                p="12"
                alignItems="center"
            >
                <Box color="gray.50" maxWidth="30rem">
                    <Heading as="h1" fontWeight="500" mb="4">
                        5 Continentes, infinitas possibilidades.
                    </Heading>
                    <Text as="p">
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
                    </Text>
                </Box>
                { isWideVersion && (
                <Box>
                    <Image
                        mb="-5rem"
                        src="/images/airplane.svg"
                        alt="airplane flying" 
                        ml="auto"
                    />
                </Box>
                )}
            </SimpleGrid>
        </Box>
    )
}