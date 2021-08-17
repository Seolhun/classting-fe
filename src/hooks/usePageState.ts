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

  const onError = (error: boolean, statusCode?: number, message?: string) => {
    setErrorMessage(message!);
    setStatusCode(statusCode!);
    setError(error);
  };

  const onLoad = (loading: boolean) => {
    setLoading(loading);
  };

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
