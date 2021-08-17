import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { RouteModel } from '@/models';

interface RenderRoutesProps {
  routes: RouteModel[];
}

const RenderRoutes: React.FC<RenderRoutesProps> = ({ routes }) => {
  return (
    <Switch>
      {routes
        .flatMap((x) => [x, ...(x.children || [])])
        .filter((x) => x.path)
        .map((route, index) => {
          const additionalProps: any = {
            ...(route.component ? { component: route.component } : {}),
            ...(route.render ? { component: route.render } : {}),
          };

          return (
            <Route
              key={`${route.key || route.name}-${index}`}
              path={route.path}
              exact={route.exact}
              {...additionalProps}
            />
          );
        })}
    </Switch>
  );
};

export { RenderRoutes };
export default RenderRoutes;
