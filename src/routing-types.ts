export type RoutesType = { [route: string]: { path: string } };

export type RouteType = {
  path: string;
  hash: string;
  query: Object;
};

export type RouterContextType = {
  route: RouteType;
};
