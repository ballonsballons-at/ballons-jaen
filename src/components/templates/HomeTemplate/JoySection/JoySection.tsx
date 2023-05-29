import { Grid, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import { Field } from '@snek-at/jaen'
import { StaticImage } from 'gatsby-plugin-image'
import { FC } from 'react'
import LinkButtonField from '../../../fields/LinkButtonField'
import { TransparentCard } from '../../../TransparentCard'

interface IJoySectionProps { }

const JoySection: FC<IJoySectionProps> = () => {
  return (
    <Grid minH={'100vh'} h={{ base: '43.125rem', md: '60rem' }}>
      <StaticImage
        style={{
          gridArea: '1/1'
        }}
        layout="fullWidth"
        alt="Menschenmenge mit Ballons in Wien"
        src={'./bg.png'}
        formats={['auto', 'webp', 'avif']}
      />
      <div
        style={{
          gridArea: '1/1',
          position: 'relative',
          placeItems: 'center',
          display: 'grid'
        }}>
        <Stack
          spacing="6"
          justify="center"
          color="white"
          align="center"
          w={{ base: '90%', md: '37.5rem' }}
          h={{ base: '30rem', md: '37.5rem' }}
          as={TransparentCard}>
          <VStack>
            <Field.Text
              as={Heading}
              lineHeight={{ base: '2.5rem', md: '5rem' }}
              fontWeight="semibold"
              fontSize={{ base: '4xl', md: '8xl' }}
              name="joyHeading"
              defaultValue="Freude"
            />
            <Field.Text
              as={Heading}
              fontWeight="semibold"
              fontSize={{ base: 'lg', md: '3xl' }}
              name="joysubtitle"
              defaultValue="liegt in der Luft"
            />
          </VStack>
          <Field.RichText
            fontSize={{ base: 'sm', md: 'md' }}
            fontWeight="medium"
            textAlign="center"
            name="joyText"
            defaultValue="Selbst die kleinsten Dinge können viel Freude machen. Mit mehr als 30
        Jahre Erfahrung sind wir der richtige Ansprechpartner, wenn es um
        wirkungsvolle Ballons, eindrucksvolle Event-Dekorationen, Partyzubehör
        uvm."
          />
          <LinkButtonField
            name="joyButton"
            defaultValue="Erfahre mehr über uns"
            defaultUrl={`/ueber-uns`}
            size={{ base: 'sm', md: 'md' }}
          />
        </Stack>
      </div>
    </Grid>
  )
}
export default JoySection
