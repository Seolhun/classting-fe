import React from 'react';
import classnames from 'classnames';

import { createColorByIntent } from '@/utils';
import { ColorWeight, IntentType } from '@/types';

const CLASSNAME = 'SH__BlockQuote';
type ElementProps = React.HTMLAttributes<HTMLParagraphElement>;
type ExtensionProps = ElementProps;
export interface BlockQuoteProps extends ExtensionProps {
  /**
   * @default primary
   */
  intent?: IntentType;

  /**
   * @default 500
   */
  intentWeight?: ColorWeight;
}

const BlockQuote: React.FC<BlockQuoteProps> = ({
  className,
  children,
  intent = 'primary',
  intentWeight = 300,
  ...rests
}) => {
  return (
    <blockquote
      {...rests}
      className={classnames(
        CLASSNAME,
        className,
        'text-base font-light leading-relaxed mt-0 mb-4',
        'border-l-4 pl-4',
        createColorByIntent(intent, intentWeight, 'border'),
      )}
    >
      {children}
    </blockquote>
  );
};

export { BlockQuote };
export default BlockQuote;
