import { Header } from '../components/Header'
import { IconText } from '../components/IconText';
import { Divider, Box, Heading, Grid, useBreakpointValue } from '@chakra-ui/react';
import { ContinentSlide } from '../components/ContinentSlide';
import { Banner } from '../components/Banner';

export default function Home() {
	return (
    	<>
      	<Header/>
		<Banner/>
		<Grid
			gap={["16","10"]}
			maxWidth={1200} 
			mx="auto"
			py={["16", "28"]}
			px="12"
			templateRows={['repeat(3, 1fr)', 'repeat(2, 1fr)', 'repeat(1, 1fr)']}
			templateColumns={['repeat(2, 1fr)', 'repeat(6, 1fr)', 'repeat(5, 1fr)']}
		>
			<IconText imageURL="/images/cocktail.svg" text="vida noturna" imageAlt="coquetel" colSpan={[1, 2, 1]}/>
			<IconText imageURL="/images/surf.svg" text="praia" imageAlt="prancha de surfe na praia" colSpan={[1, 2, 1]}/>
			<IconText imageURL="/images/building.svg" text="moderno" imageAlt="arranha céu" colSpan={[1, 2, 1]}/>
			<IconText imageURL="/images/museum.svg" text="clássico" imageAlt="museu" colSpan={[1, 3, 1]}/>
			<IconText imageURL="/images/earth.svg" text="e mais..." imageAlt="planeta terra" colSpan={[2, 3, 1]}/>
		</Grid>

		<Divider 
			w="100px"
			height="2px"
			mx="auto"
			bg="gray.700"
			opacity="1"
		/>

		<Box 
			py="10"
			w="100%" maxWidth={1200}
			mx="auto"
			px={["4", "6"]}
			align="center"
		>
			<Heading
				as="h2"
				fontSize={["1.6rem", "2rem"]}
				fontWeight="500"
				textAlign="center"
				mb="8"
			>
				Vamos nessa?<br/>Então escolha seu continente
			</Heading>
			<ContinentSlide />
		</Box>
    	</>
  )
}
