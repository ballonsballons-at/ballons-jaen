import {Box, Heading, Stack, Text} from '@chakra-ui/react'
import {Field} from 'jaen'
import {FC} from 'react'
import LinkButtonField from '../../../fields/LinkButtonField'

interface INewsContentProps {}

const NewsContent: FC<INewsContentProps> = () => {
  return (
    <Stack
      spacing={4}
      align={{base: 'center', lg: 'start'}}
      textAlign={{base: 'center', lg: 'start'}}>
      <Field.Text
        mb={{base: '-8', md: '-12', lg: '-16 !important'}}
        fontSize={{base: 'xl', md: '4xl', lg: '7xl'}}
        //variant="cursive"
        name="newsHeading"
        defaultValue={`<i>News</i>`}
      />
      <Field.Text
        as={Heading}
        fontSize={{base: 'md', md: '4xl'}}
        name="newsHeading2"
        defaultValue="Bleib auf dem Laufenden"
      />
      <Box w="3.4375rem" h=".375rem" bg="black" />
      <Field.Text
        fontWeight="semibold"
        fontSize="lg"
        name="newssubtitle"
        defaultValue="Gute Dekoration ist kein Zufall"
      />
      <Field.Text
        fontSize={{base: 'sm', md: 'md'}}
        maxW={{sm: '60%', md: '50%'}}
        mb="4 !important"
        name="description"
        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper"
      />
      <Box>
        <LinkButtonField
          name="newsButton"
          defaultValue="Alle News anzeigen"
          defaultUrl={`/news`}
          size={{base: 'sm', lg: 'md'}}
        />
      </Box>
    </Stack>
  )
}
export default NewsContent
