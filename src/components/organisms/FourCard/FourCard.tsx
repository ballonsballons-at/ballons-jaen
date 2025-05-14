import {Container, SimpleGrid} from '@chakra-ui/react'
import {Field, useContentManagement} from 'jaen'
import {FC} from 'react'
import {CONTAINER_MAX_WIDTH} from '../../../constant/sizes'
import {FourCardItem} from './FourCardItem'

interface IFourCardProps {
  sectionFieldName: string
  sectionDisplayName: string
  onCardClick: (index: number) => void
}

const FourCard: FC<IFourCardProps> = ({
  sectionFieldName,
  sectionDisplayName,
  onCardClick
}) => {
  const {isEditing} = useContentManagement()

  return (
    <Container maxW={CONTAINER_MAX_WIDTH} mb={{base: 8, md: 0}}>
      <Field.Section
        as={SimpleGrid}
        props={{
          placeItems: 'center',
          mb: {lg: 10},
          mt: '0',
          spacing: {base: '4', md: '6', lg: '6', xl: 8},
          columns: {
            md: '2',
            xl: '4'
          },
          justifyItems: 'stretch',
          alignItems: 'stretch'
        }}
        name={sectionFieldName}
        label={sectionDisplayName}
        blocks={[FourCardItem]}
        sectionProps={p => ({
          onClick: () => {
            if (isEditing) return

            onCardClick(p.count - 1)
          }
        })}
      />
    </Container>
  )
}
export default FourCard
