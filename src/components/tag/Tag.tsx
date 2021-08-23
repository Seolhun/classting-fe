import React from 'react';
import classnames from 'classnames';

import { IntentType } from '@/types';
import { createColorByIntent } from '@/utils';

const CLASSNAME = 'SH__Tag';
type Element = HTMLSpanElement;
type ElementProps = React.HTMLAttributes<Element>;
type ExtensionProps = ElementProps;
export interface TagProps extends ExtensionProps {
  /**
   * @default primary
   */
  intent?: IntentType;

  /**
   *
   */
  children: string;
}

const Tag: React.FC<TagProps> = ({ className, children, intent, ...rests }) => {
  return (
    <span
      {...rests}
      className={classnames(
        CLASSNAME,
        className,
        'inline-block',
        'py-1 px-2',
        'rounded-full',
        'text-xs font-semibold capitalize last:mr-0 mr-1',
        createColorByIntent(intent, 600, 'text'),
        createColorByIntent(intent, 200, 'bg'),
      )}
    >
      {children}
    </span>
  );
};

export { Tag };
export default Tag;
