import type { Meta, StoryObj } from '@storybook/react';
import Chips from './Chips';

const meta = {
  title: 'Design System/Chips',
  component: Chips,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Chips>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ElevatedChips: Story = {
  args: {
    label: 'Chips',
  },
};
