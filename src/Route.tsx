import React from 'react';
import { RouterContext } from '@routing/BrowserRouter';
import { RouteType } from './routing-types';

type Props = {
  children: React.ReactNode;
  path?: string;
  context: React.Context<RouteType>;
};

export function Route({ path, children, context }: Props) {
  // Extract route from RouterContext
  console.log('@@ ', context);
  const { route } = React.useContext(RouterContext);

  // Return null if the supplied path doesn't match the current route path
  if (route.path !== path) {
    return null;
  }

  return <>{children}</>;
}
