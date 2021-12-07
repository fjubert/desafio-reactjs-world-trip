import { Flex, Text, Box, HStack, Heading, Container, SimpleGrid } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { CitiesGrid } from "../../components/CitiesGrid";
import { ContinentBanner } from "../../components/ContinentBanner";
import { ContinentInfo } from "../../components/ContinentInfo";
import { Header } from "../../components/Header";
import { api } from "../../services/api";

export default function Continent({continent}) {
    
    return(
        <>
        <Header/>
        <ContinentBanner
            name={continent.name}
            bgImage={continent.banner}
        />
        <Container
            maxWidth={1200}
            mx="auto"
            px="6"
            pb="16"
        >
            <Flex
                py="12"
                flexDirection={["column", "row"]}
                justifyContent="space-between"
                alignItems="center"
            >
                <Box maxWidth={400}>
                    <Text as="p" fontSize="1.2rem">
                        {continent.description} 
                    </Text>
                </Box>
                <HStack spacing={["1.5rem", "3rem"]} mt={["1.5rem", "0"]}>
                    <ContinentInfo infoNumber={continent.countries_number} label="países" />
                    <ContinentInfo infoNumber={continent.languages} label="línguas" />
                    <ContinentInfo infoNumber={continent.plus_cities} label="cidade+100" />
                </HStack>
            </Flex>
            <Heading
                as="h2"
                fontSize={["1.6rem", "2rem"]}
                fontWeight="500"
                mb="8"
            >
                Cidades +100
            </Heading>
            <CitiesGrid continentID={continent.id} />
        </Container>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { slug } = params;
    const path = 'continents/?slug=' + slug
    const continent = await api.get(path).then(response => response.data[0])

    return {
        props: {
            continent
        }
    }
}