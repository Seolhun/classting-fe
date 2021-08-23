import React from 'react';
import { Redirect } from 'react-router-dom';

export interface ErrorBoundaryProps {}

export interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: Error) {
    console.error(error);
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <Redirect to={`${window.location.origin}/error.html`} />;
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
export default ErrorBoundary;
