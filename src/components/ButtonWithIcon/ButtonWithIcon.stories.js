import React from 'react';
import { ButtonWithIcon } from 'components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/Button with Icon',
    component: ButtonWithIcon,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <ButtonWithIcon {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    text: 'Button',
    highlightend: false,
    disabled: false,
};
