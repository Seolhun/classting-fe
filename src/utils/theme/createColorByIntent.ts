import { ColorOption, ColorPrefix, ColorWeight, IntentType } from '@/types';

const createPrefix = (prefix: ColorPrefix) => {
  if (prefix) {
    return `${prefix}-`;
  }
  return '';
};

const createHoverByWeight = (weight: ColorWeight) => {
  if (weight < 100) {
    return 100;
  }
  return weight - 100;
};

const createIntentColor = (intent: IntentType) => {
  let intentColor = 'indigo';
  switch (intent) {
    case 'secondary': {
      intentColor = 'sky';
      break;
    }
    case 'info': {
      intentColor = 'cyan';
      break;
    }
    case 'success': {
      intentColor = 'green';
      break;
    }
    case 'warning': {
      intentColor = 'orange';
      break;
    }
    case 'error': {
      intentColor = 'red';
      break;
    }
    case 'dark': {
      intentColor = 'blueGray';
      break;
    }
    default: {
      intentColor = 'blue';
      break;
    }
  }
  return intentColor;
};

const createColorByIntent = (
  intent: IntentType = 'primary',
  weight: ColorWeight = 600,
  prefix: ColorPrefix = '',
): string => {
  const computedPrefix = createPrefix(prefix);
  const intentColor = createIntentColor(intent);
  const colorClassNames = `${computedPrefix}${intentColor}-${weight}`;
  return colorClassNames;
};

const createOptionsColorByIntent = (
  options: ColorOption[],
  prefix: ColorPrefix = '',
  intent: IntentType = 'primary',
  weight: ColorWeight = 500,
): string => {
  const computedPrefix = createPrefix(prefix);
  const intentColor = createIntentColor(intent);
  const optionsColorClassNames = options.reduce((strColor, option) => {
    return `${strColor} ${option}:${computedPrefix}${intentColor}-${createHoverByWeight(
      weight,
    )}`;
  }, '');
  return optionsColorClassNames;
};

export { createColorByIntent, createOptionsColorByIntent };
export default { createColorByIntent, createOptionsColorByIntent };
