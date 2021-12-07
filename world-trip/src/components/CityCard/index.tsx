import { Flex, Box, Image, Heading, Text } from "@chakra-ui/react";

interface CityCardProps {
    thumbnail: string;
    name: string;
    country: string;
    flag: string;
}

export default function CityCard({thumbnail, name, country, flag}: CityCardProps) {
    
    return(
        <Box bg="white">
            <Image
                h="200px"
                borderTopRadius="5px"
                objectFit="cover"
                width="100%"
                src={thumbnail}
                alt={name} 
            />
            <Flex 
                border="1px solid"
                borderTop="none"
                borderColor="yellow.400"
                borderBottomRadius="5px"
                padding="1rem"
                align="center"
            >
                <Box  flex="5">
                    <Heading as="h5" fontSize="1.5rem" mb="2">
                        {name} 
                    </Heading>
                    <Text as="p" color="gray.400">
                        {country}
                    </Text>
                </Box>
                <Box flex="1">
                    <Image
                        src={"https://hatscripts.github.io/circle-flags/flags/" + flag + ".svg"}
                        alt={country + "Flag"}
                        width="42px" 
                    />
                </Box>
            </Flex>
        </Box>
    )
}