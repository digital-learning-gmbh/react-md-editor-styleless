import React from 'react';
import { headingExecute } from '../commands/title';
import { ICommand, ExecuteState, TextAreaTextApi } from './';
import { Heading3Icon } from 'lucide-react';

export const heading3: ICommand = {
  name: 'heading3',
  keyCommand: 'heading3',
  shortcuts: 'ctrlcmd+3',
  prefix: '### ',
  suffix: '',
  buttonProps: { 'aria-label': 'Insert Heading 3 (ctrl + 3)', title: 'Insert Heading 3 (ctrl + 3)' },
  icon: <Heading3Icon />,
  execute: (state: ExecuteState, api: TextAreaTextApi) => {
    headingExecute({ state, api, prefix: state.command.prefix!, suffix: state.command.suffix });
  },
};

/**
 * @deprecated Use `heading3` instead.
 * This command is now deprecated and will be removed in future versions.
 * Use `title3` for inserting Heading 3.
 */
export const title3: ICommand = heading3;
