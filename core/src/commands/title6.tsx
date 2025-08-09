import React from 'react';
import { headingExecute } from '../commands/title';
import { ICommand, ExecuteState, TextAreaTextApi } from './';
import { Heading6Icon } from 'lucide-react';

export const heading6: ICommand = {
  name: 'heading6',
  keyCommand: 'heading6',
  shortcuts: 'ctrlcmd+6',
  prefix: '###### ',
  suffix: '',
  buttonProps: { 'aria-label': 'Insert Heading 6 (ctrl + 6)', title: 'Insert Heading 6 (ctrl + 6)' },
  icon: <Heading6Icon />,
  execute: (state: ExecuteState, api: TextAreaTextApi) => {
    headingExecute({ state, api, prefix: state.command.prefix!, suffix: state.command.suffix });
  },
};

/**
 * @deprecated Use `heading6` instead.
 * This command is now deprecated and will be removed in future versions.
 * Use `title6` for inserting Heading 6.
 */
export const title6: ICommand = heading6;
