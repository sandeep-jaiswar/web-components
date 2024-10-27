import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import { CardVariant } from '../../types/Card';

const meta = {
  title: 'Design System/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ElevatedCard: Story = {
  args: {
    content: 'Card',
    variant: CardVariant.ELEVATED,
    header: 'Header',
    footer: 'Footer',
  },
};

export const FilledCard: Story = {
  args: {
    content: 'Card',
    header: 'Header',
    footer: 'Footer',
    variant: CardVariant.FILLED,
  },
};

export const OutlinedCard: Story = {
  args: {
    content: 'Card',
    header: 'Header',
    footer: 'Footer',
    variant: CardVariant.OUTLINED,
  },
};
