import React from 'react';
import classnames from 'classnames';

import { useVisibleKeydown, useLockScroll } from '@/hooks';

import RootModal, { RootModalProps } from './RootModal';

const CLASSNAME = 'SH__Modal';
type ExtensionProps = RootModalProps;
export interface ModalProps extends ExtensionProps {
  visible: boolean;
}

/**
 * TODO: In Development
 */
const Modal: React.FC<ModalProps> = ({
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
    <RootModal
      {...rests}
      ref={rootRef}
      className={classnames(CLASSNAME, className)}
    >
      {children}
    </RootModal>
  );
};

export { Modal };
export default Modal;
