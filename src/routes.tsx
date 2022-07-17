import React from "react";

import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { WorksPage } from "./pages/Works";

export type Route = {
  key: string;
  name: string;
  path: string;
  component: React.ComponentType;
};

export const routes: Route[] = [
  {
    key: "home",
    name: "home",
    path: "/",
    component: HomePage,
  },
  {
    key: "about",
    name: "about",
    path: "/about",
    component: AboutPage,
  },
  {
    key: "works",
    name: "works",
    path: "/works",
    component: WorksPage,
  },
  // default
  {
    key: "default-page",
    name: "default-page",
    path: "*",
    component: HomePage,
  },
];
