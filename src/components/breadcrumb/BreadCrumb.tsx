import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import { createColorByIntent, createOptionsColorByIntent } from '@/utils';
import { IntentType } from '@/types';

const CLASSNAME = 'SH__BreadCrumb';
type ElementProps = React.HTMLAttributes<HTMLDivElement>;
type ExtensionProps = ElementProps;
export interface BreadCrumbProps extends ExtensionProps {
  items: BreadCrumbItemProps[];

  /**
   * Color Intent
   */
  intent?: IntentType;
}

export interface BreadCrumbItemProps {
  href: string;

  name: string;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({
  className,
  items,
  intent = 'dark',
  ...rests
}) => {
  return (
    <div {...rests} className={classnames(CLASSNAME, className)}>
      {items.map(({ href, name }, index) => {
        const isFirst = index === 0;
        if (!name) {
          return null;
        }
        return (
          <span
            key={`${href}-${name}`}
            className={createColorByIntent(intent, 400, 'text')}
          >
            {!isFirst && <span>{' / '}</span>}
            <Link
              className={createOptionsColorByIntent(
                ['hover'],
                'text',
                intent,
                600,
              )}
              to={href}
            >
              {name}
            </Link>
          </span>
        );
      })}
    </div>
  );
};

export { BreadCrumb };
export default BreadCrumb;
