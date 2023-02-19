import React, { ReactNode, useContext, useLayoutEffect, useState } from 'react';
import { createBrowserHistory, Location } from 'history';
import { locationToRoute } from '@routing/Utils';
import { NotFound } from '@routing/NotFound';
import { RouterContextType, RoutesType } from '@routing/routing-types';

const history = createBrowserHistory();

export const RouterContext = React.createContext<RouterContextType>({
  route: locationToRoute(history),
});

type Props = {
  routeList: RoutesType;
  notFound?: ReactNode;
  children: React.ReactNode;
};

const BrowserRouter = ({ routeList, children, notFound }: Props) => {
  const [routes] = useState(
    Object.keys(routeList).map((key) => routeList[key].path)
  );
  const [route, setRoute] = useState(locationToRoute(history));
  const notFoundComponent = notFound ?? NotFound();

  const handleRouteChange = (location: { location: Location }) => {
    const route = locationToRoute(location);
    setRoute(route);
  };
  console.log('-- ', routes, route.path);
  const is404 = routes.indexOf(route.path) === -1;

  useLayoutEffect(() => {
    let unlisten = history.listen(handleRouteChange);
    return () => {
      unlisten();
    };
  }, []);

  return (
    <RouterContext.Provider value={{ route }}>
      {is404 ? notFoundComponent : children}
    </RouterContext.Provider>
  );
};

const useRouter = () => useContext(RouterContext);

export { useRouter, BrowserRouter, history };
