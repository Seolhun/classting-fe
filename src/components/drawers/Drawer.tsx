import React from 'react';
import classnames from 'classnames';

import { useVisibleKeydown, useLockScroll } from '@/hooks';

import RootDrawer, { RootDrawerProps } from './RootDrawer';

const CLASSNAME = 'SH__Drawer';
type ExtensionProps = RootDrawerProps;
export interface DrawerProps extends ExtensionProps {
  visible: boolean;
}

/**
 * TODO: In Development
 */
const Drawer: React.FC<DrawerProps> = ({
  children,
  className,
  visible = false,
  ...rests
}) => {
  const rootRef = React.useRef<HTMLDivElement>(null);
  useLockScroll(visible);
  useVisibleKeydown(visible, rests.onClose);

  if (!visible) {
    return null;
  }

  return (
    <RootDrawer
      {...rests}
      ref={rootRef}
      className={classnames(CLASSNAME, className)}
    >
      {children}
    </RootDrawer>
  );
};

export { Drawer };
export default Drawer;
