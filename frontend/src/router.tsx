import { RootRoute, Route, Router } from "@tanstack/react-router";
import { Home } from "./components/Home";
import App from "./App";
import { ProductPage } from "./components/ProductPage";

const rootRoute = new RootRoute({
  component: App,
});
const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const productPageRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/products/$id",
  component: ProductPage,
});

const routeTree = rootRoute.addChildren([homeRoute, productPageRoute]);

export const router = new Router({
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    // This infers the type of our router and registers it across your entire project
    router: typeof router;
  }
}
