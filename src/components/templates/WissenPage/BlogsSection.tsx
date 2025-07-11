import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Heading,
  Text,
  VStack
} from '@chakra-ui/react'
import {Field} from 'jaen'
import React, {FC, useEffect, useState} from 'react'
import {CONTAINER_MAX_WIDTH} from '../../../constant/sizes'
import {JaenPageIndexType} from '../../../types/commonTypes'
import BlogCard from './BlogCard'
import {BallonButton} from '../../molecules/BallonButton'

interface IBlogsSectionProps {
  blogs: JaenPageIndexType['childPages']
  withJaenPage: JaenPageIndexType['withJaenPage']
}

const BATCH_SIZE = 3

const BlogsSection: FC<IBlogsSectionProps> = props => {
  const [maxLoadedBlogs, setMaxLoadedBlogs] = useState(BATCH_SIZE)

  const loadMoreBlogs = () => {
    setMaxLoadedBlogs(prevMaxLoadedBlogs => prevMaxLoadedBlogs + BATCH_SIZE)
  }

  if (props.blogs.length === 0) {
    return (
      <Box py="64" bg="white">
        <Heading as="h2" size="lg" textAlign="center" mb={4}>
          Derzeit sind keine weiteren Beiträge vorhanden.
        </Heading>
      </Box>
    )
  }

  return (
    <>
      <Box bg="white">
        <Container maxW={CONTAINER_MAX_WIDTH} pt={{base: '0', md: '16'}}>
          <Field.Text
            as={Heading}
            fontWeight="semibold"
            size="h4020"
            name="title"
            defaultValue="Weitere Beiträge"
          />
          <Divider mb="8" mt="4" bg="red.500" h="1px" border="0" />
        </Container>
        <Box>
          <Container maxW={CONTAINER_MAX_WIDTH}>
            <Grid
              gridTemplateColumns={{md: 'repeat(2,1fr)', xl: 'repeat(3,1fr)'}}
              gap={{base: '4', md: 6, xl: '8'}}
              rowGap={{base: '6', md: 12, xl: '16'}}>
              {props.blogs.slice(0, maxLoadedBlogs).map(blog => {
                if (!blog) {
                  console.error('Blog not found')
                  return null
                }

                return props.withJaenPage(
                  blog.id,
                  <BlogCard key={blog.id} slug={blog.slug!} />
                )
              })}
            </Grid>
            <VStack>
              <BallonButton
                display={maxLoadedBlogs < props.blogs.length ? 'flex' : 'none'}
                size={{base: 'sm', md: 'md'}}
                mt="16"
                py="7 !important"
                variant="outline"
                onClick={loadMoreBlogs}>
                Mehr Beiträge anzeigen
              </BallonButton>
            </VStack>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default BlogsSection
