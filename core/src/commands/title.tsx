import React from 'react';
import { ICommand, ExecuteState, TextAreaTextApi } from './';
import { heading1 } from './title1';
import { selectLine, executeCommand } from '../utils/markdownUtils';
import { HeadingIcon } from 'lucide-react';

export function headingExecute({
  state,
  api,
  prefix,
  suffix = prefix,
}: {
  state: ExecuteState;
  api: TextAreaTextApi;
  prefix: string;
  suffix?: string;
}) {
  const newSelectionRange = selectLine({ text: state.text, selection: state.selection });
  const state1 = api.setSelectionRange(newSelectionRange);
  executeCommand({ api, selectedText: state1.selectedText, selection: state.selection, prefix, suffix });
}

export const heading: ICommand = {
  ...heading1,
  icon: <HeadingIcon />,
};

/**
 * @deprecated Use `heading` instead.
 * This command is now deprecated and will be removed in future versions.
 * Use `title` for inserting headings.
 */
export const title: ICommand = heading;
