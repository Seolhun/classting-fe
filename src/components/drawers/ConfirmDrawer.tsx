import React from 'react';
import classnames from 'classnames';

import { useLockScroll, useVisibleKeydown } from '@/hooks';

import RootDrawer, { RootDrawerProps } from './RootDrawer';
import { Button } from '../button';

const CLASSNAME = 'SH__ConfirmDrawer';
type ExtensionProps = RootDrawerProps;
export interface ConfirmDrawerProps extends ExtensionProps {
  visible: boolean;

  onConfirm: (e: React.MouseEvent) => void;

  /**
   * @default Confirm
   */
  confirmLabel?: React.ReactNode;

  /**
   * @default Cancel
   */
  cancelLabel?: React.ReactNode;
}

const ConfirmDrawer: React.FC<ConfirmDrawerProps> = ({
  children,
  className,
  visible = false,
  onConfirm,
  onClose,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  ...rests
}) => {
  const rootRef = React.useRef<HTMLDivElement>(null);
  useLockScroll(visible);
  useVisibleKeydown(visible, onClose, onConfirm);

  if (!visible) {
    return null;
  }

  return (
    <RootDrawer
      {...rests}
      ref={rootRef}
      className={classnames(CLASSNAME, className)}
      onClose={onClose}
    >
      {children}
      <div
        className={classnames(
          'SH__ButtonGroup Horizontal',
          'flex justify-end',
          'mt-4',
        )}
      >
        <Button onClick={onClose} intent="dark" intentWeight={400}>
          {cancelLabel}
        </Button>
        <Button onClick={onConfirm}>{confirmLabel}</Button>
      </div>
    </RootDrawer>
  );
};

export { ConfirmDrawer };
export default ConfirmDrawer;
