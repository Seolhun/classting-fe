/* eslint-disable no-nested-ternary */
import React from 'react';
import { useHistory } from 'react-router-dom';

import { SEO } from '@/constants';
import { Meta } from '@/components';

const Error404Page: React.FC = () => {
  const history = useHistory();

  const goToHome = async () => {
    await history.push('/');
  };

  return (
    <div>
      <Meta title={`Error - ${SEO.TITLE}`} />
      <div>
        <div>
          <img src="/images/logo.png" alt="" />
          <div>
            <div>Page not found</div>
            <div>404</div>
          </div>
          <div>
            <button type="button" onClick={goToHome}>
              Go to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Error404Page };
export default Error404Page;
