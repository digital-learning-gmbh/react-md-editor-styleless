import React from 'react';
import { type ICommand } from './';
import { CircleQuestionMarkIcon } from 'lucide-react';

export const help: ICommand = {
  name: 'help',
  keyCommand: 'help',
  buttonProps: { 'aria-label': 'Open help', title: 'Open help' },
  icon: <CircleQuestionMarkIcon />,
  execute: () => {
    window.open('https://www.markdownguide.org/basic-syntax/', '_blank', 'noreferrer');
  },
};
