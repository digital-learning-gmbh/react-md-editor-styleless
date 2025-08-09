import React from 'react';
import { type ICommand, type ExecuteState, TextAreaTextApi } from './';
import { selectWord, executeCommand } from '../utils/markdownUtils';
import { CircleAlertIcon } from 'lucide-react';

export const issue: ICommand = {
  name: 'issue',
  keyCommand: 'issue',
  prefix: '#',
  suffix: '',
  buttonProps: { 'aria-label': 'Add issue', title: 'Add issue' },
  icon: <CircleAlertIcon />,
  execute: (state: ExecuteState, api: TextAreaTextApi) => {
    const newSelectionRange = selectWord({
      text: state.text,
      selection: state.selection,
      prefix: state.command.prefix!,
      suffix: state.command.suffix,
    });
    const state1 = api.setSelectionRange(newSelectionRange);
    executeCommand({
      api,
      selectedText: state1.selectedText,
      selection: state.selection,
      prefix: state.command.prefix!,
      suffix: state.command.suffix,
    });
  },
};
