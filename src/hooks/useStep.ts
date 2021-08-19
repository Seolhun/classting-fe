import React from 'react';

const useStep = (initSize = 0, initStep = 0) => {
  const [step, setStep] = React.useState(initStep);
  const [size, setSize] = React.useState(initSize);

  React.useEffect(() => {
    setSize(initSize);
  }, [initSize]);

  const memoFirstStep = React.useMemo(() => {
    return step === 0;
  }, [step]);

  const memoLastStep = React.useMemo(() => {
    return step === size;
  }, [step, size]);

  const prevStep = React.useCallback(() => {
    if (memoFirstStep) {
      return;
    }
    setStep(step - 1);
  }, [memoFirstStep, step]);

  const nextStep = React.useCallback(() => {
    if (memoLastStep) {
      return;
    }
    setStep(step + 1);
  }, [memoLastStep, step]);

  return {
    isFirstStep: memoFirstStep,
    isLastStep: memoLastStep,
    prevStep,
    nextStep,
    step,
    setStep,
    size,
  };
};

export { useStep };
export default useStep;
