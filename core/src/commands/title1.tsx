import React from 'react';
import { headingExecute } from '../commands/title';
import { ICommand, ExecuteState, TextAreaTextApi } from './';
import { Heading1Icon } from 'lucide-react';

export const heading1: ICommand = {
  name: 'heading1',
  keyCommand: 'heading1',
  shortcuts: 'ctrlcmd+1',
  prefix: '# ',
  suffix: '',
  buttonProps: { 'aria-label': 'Insert Heading 1 (ctrl + 1)', title: 'Insert Heading 1 (ctrl + 1)' },
  icon: <Heading1Icon />,
  execute: (state: ExecuteState, api: TextAreaTextApi) => {
    headingExecute({ state, api, prefix: state.command.prefix!, suffix: state.command.suffix });
  },
};

/**
 * @deprecated Use `heading1` instead.
 * This command is now deprecated and will be removed in future versions.
 * Use `title1` for inserting Heading 1.
 */
export const title1: ICommand = heading1;
