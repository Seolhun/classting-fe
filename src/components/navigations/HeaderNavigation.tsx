import React from 'react';
import classnames from 'classnames';
import { motion } from 'framer-motion';
import { useHistory, useLocation } from 'react-router-dom';

import { RouteModel } from '@/models';

export interface HeaderNavigationProps {
  /**
   * Set this to rendered routes
   */
  routes: RouteModel[];

  /**
   * Set this to change logo
   */
  logo?: React.ReactNode;

  /**
   * Set this to change onClickRoute handler
   */
  onClickRoute?: (route: RouteModel) => void;
}

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

const HeaderNavigation: React.FC<HeaderNavigationProps> = ({
  routes,
  logo = (
    <img
      className="h-8 w-8"
      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
      alt="Workflow"
    />
  ),
  onClickRoute,
}) => {
  const location = useLocation();
  const history = useHistory();
  const [visibleMobile, setVisibleMobile] = React.useState(false);

  const memoRoutes = React.useMemo(() => {
    return routes.filter((route) => route.isNavigation);
  }, []);

  const includedPath = React.useCallback(
    (route: RouteModel) => {
      if (route.uniquePath) {
        return location.pathname.includes(route.uniquePath);
      }
      return location.pathname === route.path;
    },
    [location.pathname],
  );

  const onClickNavigationLink = React.useCallback(
    (route: RouteModel) => {
      if (onClickRoute) {
        onClickRoute(route);
      }
      history.push(route.path!);
    },
    [onClickRoute],
  );

  const onClickMobile = React.useCallback(() => {
    setVisibleMobile(!visibleMobile);
  }, [visibleMobile]);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">{logo}</div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {memoRoutes.map((route) => (
                  <button
                    type="button"
                    key={route.path}
                    className={classnames(
                      {
                        'bg-gray-900': includedPath(route),
                      },
                      'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium',
                    )}
                    onClick={() => onClickNavigationLink(route)}
                  >
                    {route?.name ?? route.key}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button
                type="button"
                className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={onClickMobile}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <motion.div
        className="fixed right-0 left-0 md:hidden bg-gray-800 rounded-br-md rounded-bl-md"
        animate={visibleMobile ? 'open' : 'closed'}
        variants={variants}
      >
        <div id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {memoRoutes.map((route) => (
              <button
                key={route.path}
                type="button"
                className={classnames(
                  {
                    'bg-gray-900': includedPath(route),
                  },
                  'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium',
                )}
                onClick={() => onClickNavigationLink(route)}
              >
                {route?.name ?? route.key}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export { HeaderNavigation };
export default HeaderNavigation;