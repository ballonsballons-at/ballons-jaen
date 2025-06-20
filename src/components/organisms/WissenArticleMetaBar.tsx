import {
  Box,
  HStack,
  Stack,
  StackProps,
  Tag,
  Wrap,
  WrapItem
} from '@chakra-ui/react'
import {Field, useField, usePageContext} from 'jaen'
import {useMemo} from 'react'

export const WissenArticleMetaBar: React.FC<StackProps> = ({...props}) => {
  const heroTagsField = useField<string>('heroTags', 'IMA:TextField')

  const heroTags = useMemo(() => {
    const value = heroTagsField.value || heroTagsField.staticValue

    if (!value) return ['Neu']

    return value.split(',').map(tag => tag.trim())
  }, [heroTagsField.value, heroTagsField.staticValue])

  // const {jaenPage} = usePageContext()

  // const publishedDate = jaenPage.jaenPageMetadata?.datePublished

  return (
    <Wrap py="4" px="8" borderRadius="lg" justify="space-between" {...props}>
      <WrapItem maxW="64">
        {heroTagsField.isEditing ? (
          <Field.Text bg={'pink.100'} name={'heroTags'} defaultValue={'Neu'} />
        ) : (
          <Wrap borderRadius="md">
            {heroTags.map((tag, index) => (
              <WrapItem key={index}>
                <Tag>{tag}</Tag>
              </WrapItem>
            ))}
          </Wrap>
        )}
      </WrapItem>

      {/* <WrapItem>
        {publishedDate ? (
          <>
            {new Date(publishedDate).toLocaleDateString('de-DE', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </>
        ) : (
          <Tag colorScheme="yellow" w="fit-content">
            Unveröffentlicht
          </Tag>
        )}
      </WrapItem> */}
    </Wrap>
  )
}
