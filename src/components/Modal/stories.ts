import type { Meta, StoryObj } from '@storybook/react';

import { ModalBase } from '.';

const meta = {
  title: 'Components/Modal',
  component: ModalBase,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof ModalBase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'ModalBase',
    onClose: () => {
      //
    },
    visible: true
  }
};
