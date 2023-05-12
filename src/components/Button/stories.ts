import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    children: 'Button'
  }
};

export const Secondary: Story = {
  args: {
    children: 'Button'
  }
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Button'
  }
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Button'
  }
};
