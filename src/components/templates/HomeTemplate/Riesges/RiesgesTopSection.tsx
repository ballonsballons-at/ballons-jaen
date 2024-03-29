import {GridItem, SimpleGrid} from '@chakra-ui/react'
import {FC} from 'react'
import CardWithImageBackground from '../../../CardWithImageBackground'
import {useContentPages} from '../../../hooks/useContentPages'

interface IRiesgesTopSectionProps {}

const RiesgesTopSection: FC<IRiesgesTopSectionProps> = () => {
  const cards = [
    {
      heading: 'Großhandel',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing',
      image: '/images/home/reisges/Großhandel.png'
    },
    {
      heading: 'Party',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing',
      image: '/images/home/reisges/Party.png'
    },
    {
      heading: 'Design',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing',
      image: '/images/home/reisges/Design.png'
    }
  ]

  const index = useContentPages()

  return (
    <SimpleGrid
      placeItems="center"
      mb={{lg: 10}}
      mt="0"
      minChildWidth="300px"
      spacing="30px"
      // gridTemplateColumns={{
      //   md: "repeat(auto-fit, minmax(15rem, auto))",
      // }}
    >
      {index.children.map((page, i) =>
        index.withJaenPage(
          page.id || '',
          <GridItem
            justifySelf="center"
            h={{
              base: '11.25rem',
              md: '18.75rem',
              lg: '25rem',
              xl: '31.25rem'
            }}
            key={i}>
            <CardWithImageBackground
              card={{
                headingFieldName: `riesgesCardheading${i}`,
                headingDefaultValue: cards[0].heading,
                textFieldName: `riesgesCardText${i}`,
                textDefaultValue: cards[0].text,
                imageFieldName: `riesgesCardImage${i}`,
                imageDefaultValue: cards[0].image,
                linkUrl: `/${page.slug}`
              }}
              key={i}
            />
          </GridItem>
        )
      )}
    </SimpleGrid>
  )
}
export default RiesgesTopSection
