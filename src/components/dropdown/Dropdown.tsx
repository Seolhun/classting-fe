import React from 'react';
import classnames from 'classnames';

import { ColorWeight, IntentType } from '@/types';
import { createOptionsColorByIntent } from '@/utils';

const CLASSNAME = 'SH__Dropdown';
type ElementProps = React.InputHTMLAttributes<HTMLInputElement>;
type ExtensionProps = ElementProps;

export type DropdownItemType = string | number | symbol;
export interface DropdownProps extends ExtensionProps {
  items: DropdownItemType[];

  item: DropdownItemType;

  onChangeItem?: (item: DropdownItemType) => void;

  renderItem?: (item: DropdownItemType) => React.ReactNode;

  /**
   * After Click dropdown state
   * @default closed
   */
  itemClickState?: 'opened' | 'closed';

  /**
   * @default primary
   */
  intent?: IntentType;

  /**
   * @default 500
   */
  intentWeight?: ColorWeight;
}

const Dropdown = React.forwardRef<HTMLInputElement, DropdownProps>(
  (
    {
      className,
      items,
      item,
      onChangeItem,
      renderItem,
      itemClickState = 'closed',
      intent = 'primary',
      intentWeight = 500,
      ...rests
    },
    ref,
  ) => {
    const rootRef = React.useRef<HTMLDivElement>(null);
    const initIndex = React.useMemo(() => {
      return items.findIndex((i) => i === item);
    }, [item]);
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(initIndex);
    const [selectedItem, setSelectedItem] = React.useState(item);
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
      if (onChangeItem && item !== selectedItem) {
        onChangeItem(selectedItem);
      }
    }, [selectedItem, onChangeItem]);

    const onClickOutElement = React.useCallback((e: MouseEvent) => {
      const eventElement = e.target as HTMLElement;
      if (eventElement) {
        const isContainElement = rootRef.current?.contains(eventElement);
        if (!isContainElement) {
          setVisible(false);
        }
      }
    }, []);

    React.useLayoutEffect(() => {
      document.addEventListener('click', onClickOutElement);
      return () => {
        document.removeEventListener('click', onClickOutElement);
      };
    }, []);

    const onClickDropdown = React.useCallback(
      (e: React.MouseEvent) => {
        e.stopPropagation();

        setVisible(!visible);
      },
      [visible],
    );

    const onClickDropdownItem = React.useCallback(
      (item: DropdownItemType, index: number) => (e: React.MouseEvent) => {
        e.stopPropagation();

        setSelectedItemIndex(index);
        setSelectedItem(item);

        if (itemClickState === 'closed') {
          setVisible(false);
        }
      },
      [itemClickState],
    );

    const onRenderItem = React.useCallback((item: DropdownItemType) => {
      if (renderItem) {
        return renderItem(item);
      }
      return item;
    }, []);

    return (
      <div
        ref={rootRef}
        className={classnames(
          CLASSNAME,
          className,
          'relative mt-1 inline-block',
        )}
      >
        <button
          type="button"
          onClick={onClickDropdown}
          className={classnames(
            'relative',
            'w-full',
            'pl-3 pr-10 py-2',
            'rounded-md shadow-sm',
            'bg-white border border-gray-300',
            'text-left sm:text-sm',
            'focus:ring-1 focus:outline-none',
            createOptionsColorByIntent('ring', ['focus'], intent, intentWeight),
            createOptionsColorByIntent(
              'border',
              ['focus'],
              intent,
              intentWeight,
            ),
            'cursor-pointer',
          )}
          aria-haspopup="listbox"
          aria-expanded="true"
        >
          <input {...rests} ref={ref} className="fixed w-0 h-0 invisible" />
          {onRenderItem(selectedItem)}
        </button>

        {visible && (
          <ul
            className={classnames(
              'absolute',
              'w-full max-h-56',
              'mt-1 py-1',
              'sm:text-sm text-base',
              'bg-white ring-1 ring-black ring-opacity-5',
              'rounded-md shadow-lg',
              'focus:outline-none',
              'overflow-auto z-10',
            )}
            tabIndex={-1}
            role="listbox"
            aria-activedescendant={`DropdownItem-Option-${selectedItemIndex}`}
          >
            {items.map((item, index) => {
              const itemKey = `DropdownItem-Option-${index}`;
              return (
                <li
                  key={itemKey}
                  id={itemKey}
                  className={classnames(
                    'relative',
                    'py-2 pl-3 pr-9',
                    'text-gray-900',
                    'hover:bg-gray-200',
                    'cursor-pointer select-none',
                    {
                      'bg-gray-200': index === selectedItemIndex,
                    },
                  )}
                  role="option"
                  onClick={onClickDropdownItem(item, index)}
                >
                  <div className="flex items-center">
                    <span
                      className={classnames('block', 'ml-3', 'font-normal')}
                    >
                      {onRenderItem(item)}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  },
);

export { Dropdown };
export default Dropdown;
