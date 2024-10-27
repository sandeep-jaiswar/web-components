import type { Meta, StoryObj } from '@storybook/react';
import IconButton from './IconButton';

const meta = {
  title: 'Design System/Icon Button',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FilledIconButton: Story = {
  args: {
    children: <>{'T'}</>,
    variant: 'filled',
  },
};

export const StandardIconButton: Story = {
  args: {
    children: <>{'T'}</>,
    variant: 'standard',
  },
};

export const OutlinedIconButton: Story = {
  args: {
    children: <>{'T'}</>,
    variant: 'outlined',
  },
};
