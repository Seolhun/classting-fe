import React from 'react';
import classnames from 'classnames';

const CLASSNAME = 'SH__HTMLSelect';
type Element = HTMLSelectElement;
type ElementProps = React.SelectHTMLAttributes<Element>;
type ExtensionProps = ElementProps;

export interface HTMLSelectProps extends ExtensionProps {
  options: HTMLSelectOptionProps[];
}

type OptionElement = HTMLOptionElement;
type OptionElementProps = React.OptionHTMLAttributes<OptionElement>;
export interface HTMLSelectOptionProps extends OptionElementProps {}

const HTMLSelect = React.forwardRef<Element, HTMLSelectProps>(
  ({ className, options, ...rests }, ref) => {
    return (
      <select
        {...rests}
        ref={ref}
        id={rests.name}
        className={classnames(
          CLASSNAME,
          className,
          'shadow-sm border border-gray-400 focus:ring-gray-800 p-3 block w-full sm:text-sm rounded-md',
        )}
      >
        {options.map((option, i) => (
          <option key={i} {...option} />
        ))}
      </select>
    );
  },
);

export { HTMLSelect };
export default HTMLSelect;
