import { Flex, Image, Spacer } from '@chakra-ui/react';
import { useRouter } from "next/router";
import Link from 'next/link'
import { ChevronLeftIcon } from '@chakra-ui/icons';

export function Header() {
    const { asPath } = useRouter()
    const isContinentPage = asPath.includes('/continentes');

    return (
    <Flex
        as="header"
        w="100%" maxWidth={1200}
        h="20"
        mx="auto"
        px="6"
        align="center"
    >
        { isContinentPage && (
            <Link href="/">
                <a><ChevronLeftIcon fontSize="2rem" /></a>
            </Link>
        )}
        <Spacer />
        <Link href="/">
            <a><Image
              w='160px'
              src="/images/logo.svg"
              alt="World Trip logo" 
            /></a>
        </Link>
        <Spacer />
    </Flex>
    )
}