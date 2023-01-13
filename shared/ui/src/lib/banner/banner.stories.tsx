import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Banner } from './banner';

const Story: ComponentMeta<typeof Banner> = {
  component: Banner,
  title: 'Banner',
};
export default Story;

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: '',
};
