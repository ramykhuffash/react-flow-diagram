// @flow

import React from 'react';
import style from 'styled-components';
import Icon from '../icon/component';

import type { IconVariety } from '../icon/component';

/*
 * Presentational
 * ==================================== */

const ContextMenuStyle = style.ul`
  position: absolute;
  right: -.5em;
  transform: translateX(100%);
  align-self: flex-start;
`;

const Action = style.li`
  cursor: pointer;
`;

type contextMenuProps = {
  actions: Array<{
    action: Function,
    iconVariety: IconVariety,
    label: string,
  }>,
};
const ContextMenu = (props: contextMenuProps) => (
  <ContextMenuStyle>
    {props.actions.map(action => (
      <Action key={action.label} onClick={action.action}>
        <Icon name={action.iconVariety} label={action.label} />
      </Action>
    ))}
  </ContextMenuStyle>
);

export default ContextMenu;
