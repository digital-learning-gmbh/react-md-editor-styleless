import React from 'react';
import { type ICommand, type ICommandChildCommands, type ICommandChildHandle } from './';
import { GroupIcon } from 'lucide-react';

export type GroupOptions = Omit<ICommand<string>, 'children'> & {
  children?: ICommandChildHandle['children'];
};

export const group = (arr: ICommandChildCommands['children'], options?: GroupOptions): ICommand<string> => {
  let data = {
    children: arr as any,
    icon: <GroupIcon />,
    execute: () => {},
    ...options,
    keyCommand: 'group',
  };
  if (Array.isArray(data.children)) {
    data.children = data.children.map(({ ...item }: ICommand) => {
      item.parent = data;
      return { ...item };
    });
  }
  return data;
};
