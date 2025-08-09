import React from 'react';
import { type ICommand, TextState, type TextAreaTextApi } from './';
import { type ContextStore, type ExecuteCommandState } from '../Context';
import { FullscreenIcon } from 'lucide-react';

export const fullscreen: ICommand = {
  name: 'fullscreen',
  keyCommand: 'fullscreen',
  shortcuts: 'ctrlcmd+0',
  value: 'fullscreen',
  buttonProps: { 'aria-label': 'Toggle fullscreen (ctrl + 0)', title: 'Toggle fullscreen (ctrl+ 0)' },
  icon: <FullscreenIcon />,
  execute: (
    state: TextState,
    api: TextAreaTextApi,
    dispatch?: React.Dispatch<ContextStore>,
    executeCommandState?: ExecuteCommandState,
    shortcuts?: string[],
  ) => {
    api.textArea.focus();
    if (shortcuts && dispatch && executeCommandState) {
      dispatch({ fullscreen: !executeCommandState.fullscreen });
    }
  },
};
