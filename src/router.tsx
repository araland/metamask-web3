import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";
import { RouteObject } from "react-router";

import SuspenseLoader from "./components/SuspenseLoader";

const Loader = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Pages
const Home = Loader(lazy(() => import("./pages/home")));
const Counter = Loader(lazy(() => import("./pages/counter")));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/counter",
    element: <Counter />
  },
  {
    path: "home",
    element: <Navigate to="/" replace />
  }
];

export default routes;
