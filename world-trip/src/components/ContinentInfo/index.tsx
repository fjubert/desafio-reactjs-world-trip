import { Text, Box } from "@chakra-ui/react";

interface ContinentInfoProps {
    infoNumber: number;
    label: string;
}

export function ContinentInfo({infoNumber, label}: ContinentInfoProps) {
    return(
        <>
            <Box>
                <Text
                    color="yellow.400"
                    textAlign="center"
                    fontSize={["3rem", "3.5rem"]}
                    fontWeight="700"
                >
                    {infoNumber}
                </Text>
                <Text
                    color="gray.700"
                    textAlign="center"
                    fontSize={["1.2rem", "1.5rem"]}
                    fontWeight="400"                
                >
                    {label}
                </Text>
            </Box>
        </>
    )
}