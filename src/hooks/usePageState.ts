import React from 'react';

interface UseScrollTriggerProps {
  loading: boolean;

  error?: boolean;
}

const DEFAULT_PROPS: UseScrollTriggerProps = {
  loading: true,

  error: false,
};

const usePageState = (props: UseScrollTriggerProps = DEFAULT_PROPS) => {
  const [loading, setLoading] = React.useState(props.loading);
  const [error, setError] = React.useState(!!props.error);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [statusCode, setStatusCode] = React.useState(200);

  const onError = React.useCallback(
    (error: boolean, statusCode?: number, message?: string) => {
      if (message != null) {
        setErrorMessage(message);
      }
      if (statusCode != null) {
        setStatusCode(statusCode);
      }
      setError(error);
    },
    [],
  );

  const onLoad = React.useCallback((loading: boolean) => {
    setLoading(loading);
  }, []);

  return {
    loading,
    setLoading: onLoad,
    error,
    setError: onError,
    errorMessage,
    statusCode,
  };
};

export { usePageState };
export default usePageState;
