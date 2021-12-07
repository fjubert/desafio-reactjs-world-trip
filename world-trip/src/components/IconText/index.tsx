import { GridItem, Heading, Image } from '@chakra-ui/react';

interface IconTextProps {
    imageURL: string;
    imageAlt: string
    text: string;
    colSpan: number[];
}

export function IconText({imageURL, text, imageAlt, colSpan}: IconTextProps ) {
    return(
        <GridItem colSpan={colSpan}>
            <Image mb="6" mx="auto" src={imageURL} alt={imageAlt} />
            <Heading as="h4" fontSize={["1rem", "1.2rem", "1.5rem"]} textAlign="center">
                {text}
            </Heading>
        </GridItem>
    )
} 