import {
  Heading as ChakraHeading,
  HeadingProps as ChakraHeadingProps
} from '@chakra-ui/react'
import {FC, ReactNode} from 'react'
import {FaHashtag} from '@react-icons/all-files/fa/FaHashtag'
import Link from '../core/Link'
import {mainComponentBaseStyle} from '../layout/mainContent.vars'
import {IMainContentComponentBaseProps} from '../types/mainContent'

// Font sizes for the different heading variants
const variantFontSizes = {
  h1: '36',
  h2: '30',
  h3: '24',
  h4: '20',
  h5: '18',
  h6: '16'
}

const variantLinkFontSizes = {
  h1: '30',
  h2: '24',
  h3: '18',
  h4: '16',
  h5: '14',
  h6: '12'
}

export interface IHeadingProps extends IMainContentComponentBaseProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  id?: string
  noAnchor?: boolean
  customSpacing?: ChakraHeadingProps['mt']
  noSpacing?: boolean
  activeLink?: boolean
  setActiveLink?: () => void
  children?: ReactNode
}

/**
 * Component for displaying different heading variants and sizes.
 */
const Heading: FC<IHeadingProps> = ({
  baseProps,
  variant = 'h2',
  id,
  noAnchor,
  customSpacing,
  noSpacing,
  activeLink,
  setActiveLink,
  children
}) => {
  let props: ChakraHeadingProps = {}
  if (variant === 'h2') {
    props = {
      ...props,
      borderBottom: '1px solid',
      borderColor: 'components.separator.borderColor',
      pb: 2
    }
  }

  /**
   * Handles the click event on the heading link.
   *
   */
  const handleClick = () => {
    if (!activeLink && setActiveLink) setActiveLink()
  }

  return (
    <ChakraHeading
      {...baseProps}
      {...props}
      as={variant}
      id={id}
      fontSize={variantFontSizes[variant]}
      mt={!noSpacing ? customSpacing ?? baseProps?.marginTop : 0}
      _hover={{
        '& a': {
          opacity: 1
        }
      }}>
      {children}
      {!noAnchor && id && (
        <Link
          href={`#${id}`}
          aria-label={`Link to ${children}`}
          position="relative"
          ml={1}
          opacity={activeLink ? 1 : 0}
          color="components.heading.link.color.default"
          fontSize={variantLinkFontSizes[variant]}
          lineHeight={Number(variantLinkFontSizes[variant]) + 5 + 'px'}
          verticalAlign="top"
          onClick={handleClick}>
          <FaHashtag />
        </Link>
      )}
    </ChakraHeading>
  )
}
Heading.defaultProps = {
  baseProps: mainComponentBaseStyle.baseProps
}

export default Heading
