import React from 'react';
import { headingExecute } from '../commands/title';
import { ICommand, ExecuteState, TextAreaTextApi } from './';
import { Heading2Icon } from 'lucide-react';

export const heading2: ICommand = {
  name: 'heading2',
  keyCommand: 'heading2',
  shortcuts: 'ctrlcmd+2',
  prefix: '## ',
  suffix: '',
  buttonProps: { 'aria-label': 'Insert Heading 2 (ctrl + 2)', title: 'Insert Heading 2 (ctrl + 2)' },
  icon: <Heading2Icon />,
  execute: (state: ExecuteState, api: TextAreaTextApi) => {
    headingExecute({ state, api, prefix: state.command.prefix!, suffix: state.command.suffix });
  },
};

/**
 * @deprecated Use `heading2` instead.
 * This command is now deprecated and will be removed in future versions.
 * Use `title2` for inserting Heading 2.
 */
export const title2: ICommand = heading2;
