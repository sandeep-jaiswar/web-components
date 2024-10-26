import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { ButtonVariant } from '../../types';

const meta = {
  title: 'Design System/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ElevatedButton: Story = {
  args: {
    children: 'Button',
    variant: ButtonVariant.ELEVATED,
  },
};

export const FilledButton: Story = {
  args: {
    children: 'Button',
    variant: ButtonVariant.FILLED,
  },
};

export const OutlinedButton: Story = {
  args: {
    children: 'Button',
    variant: ButtonVariant.OUTLINED,
  },
};

export const TextButton: Story = {
  args: {
    children: 'Button',
    variant: ButtonVariant.TEXT,
  },
};

export const TonalButton: Story = {
  args: {
    children: 'Button',
    variant: ButtonVariant.TONAL,
  },
};
