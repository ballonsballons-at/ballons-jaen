import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {ProductSlider} from '../ProductSlider'
import * as ProductsPageStories from '../../../templates/ProductsTemplate/stories/ProductsTemplate.stories'

export default {
  title: 'Components/Molecules/ProductSlider',
  component: ProductSlider
} as ComponentMeta<typeof ProductSlider>

const Template: ComponentStory<typeof ProductSlider> = args => (
  <ProductSlider {...args} />
)

export const Default = Template.bind({})
Default.args = {
  heading: 'Related Products',
  products: ProductsPageStories.Simple.args?.products ?? []
}
