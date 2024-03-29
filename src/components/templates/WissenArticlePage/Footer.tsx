import {Button, Stack, useToast, VStack} from '@chakra-ui/react'
import {useEffect, useState} from 'react'
import {FaShare} from '@react-icons/all-files/fa/FaShare'

import NewsSlider from '../../organisms/NewsSlider/NewsSlider'
import {BallonButton} from '../../molecules/BallonButton'

const ShareBlogButton = () => {
  const toast = useToast()

  const [isShareOpen, setIsShareOpen] = useState(false)

  const handleShareClick = () => {
    setIsShareOpen(true)

    // copy current window href to clipboard

    navigator.clipboard.writeText(window.location.href)

    toast({
      title: 'Kopiert',
      description: 'Blog-Link wurde in die Zwischenablage kopiert',
      status: 'info',
      variant: 'subtle',
      duration: 3000,
      isClosable: true
    })
  }

  useEffect(() => {
    // hook to reset share button after 5 seconds

    if (isShareOpen) {
      const timer = setTimeout(() => {
        setIsShareOpen(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [isShareOpen])

  return (
    <BallonButton
      leftIcon={<FaShare />}
      size="sm"
      onClick={handleShareClick}
      py="7 !important">
      Artikel teilen {isShareOpen && '(Kopiert)'}
    </BallonButton>
  )
}

export const Footer = () => {
  return (
    <Stack
      bg="white"
      pt={{
        base: 8,
        lg: 16
      }}>
      <VStack>
        <ShareBlogButton />
      </VStack>

      <NewsSlider showNewsTitle={true} />
    </Stack>
  )
}
