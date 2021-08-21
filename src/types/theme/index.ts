export type IntentType =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'light'
  | 'dark';

/**
 * @see https://tailwindcss.com/docs/customizing-colors
 */
export type ColorWeight =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

/**
 * @see https://tailwindcss.com/docs/text-color
 * @see https://tailwindcss.com/docs/background-color
 * @see https://tailwindcss.com/docs/ring-color
 */
export type ColorPrefix =
  | ''
  | 'text'
  | 'bg'
  | 'border'
  | 'opacity'
  | 'ring'
  | 'ring-offset';

export type ColorOption = 'hover' | 'focus' | 'disabled';
