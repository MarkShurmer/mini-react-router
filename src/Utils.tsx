import { Location } from 'history';
import qs from 'querystringify';
import { RouteType } from '@routing/routing-types';

type Props = {
  location: Location;
};

export function locationToRoute({ location }: Props): RouteType {
  return {
    path: location.pathname,
    hash: location.hash,
    query: qs.parse(location.search),
  };
}
