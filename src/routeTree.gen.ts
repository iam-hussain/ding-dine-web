/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LogoutImport } from './routes/logout'
import { Route as AboutImport } from './routes/about'
import { Route as SplitImport } from './routes/_split'
import { Route as BaseImport } from './routes/_base'
import { Route as IndexImport } from './routes/index'
import { Route as SplitStoreImport } from './routes/_split/store'
import { Route as SplitLoginImport } from './routes/_split/login'
import { Route as BaseHomeImport } from './routes/_base/home'
import { Route as BaseDashboardIndexImport } from './routes/_base/dashboard/index'
import { Route as BaseStoreSlugIndexImport } from './routes/_base/store/$slug/index'

// Create/Update Routes

const LogoutRoute = LogoutImport.update({
  path: '/logout',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const SplitRoute = SplitImport.update({
  id: '/_split',
  getParentRoute: () => rootRoute,
} as any)

const BaseRoute = BaseImport.update({
  id: '/_base',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SplitStoreRoute = SplitStoreImport.update({
  path: '/store',
  getParentRoute: () => SplitRoute,
} as any)

const SplitLoginRoute = SplitLoginImport.update({
  path: '/login',
  getParentRoute: () => SplitRoute,
} as any)

const BaseHomeRoute = BaseHomeImport.update({
  path: '/home',
  getParentRoute: () => BaseRoute,
} as any)

const BaseDashboardIndexRoute = BaseDashboardIndexImport.update({
  path: '/dashboard/',
  getParentRoute: () => BaseRoute,
} as any)

const BaseStoreSlugIndexRoute = BaseStoreSlugIndexImport.update({
  path: '/store/$slug/',
  getParentRoute: () => BaseRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_base': {
      id: '/_base'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof BaseImport
      parentRoute: typeof rootRoute
    }
    '/_split': {
      id: '/_split'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof SplitImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/logout': {
      id: '/logout'
      path: '/logout'
      fullPath: '/logout'
      preLoaderRoute: typeof LogoutImport
      parentRoute: typeof rootRoute
    }
    '/_base/home': {
      id: '/_base/home'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof BaseHomeImport
      parentRoute: typeof BaseImport
    }
    '/_split/login': {
      id: '/_split/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof SplitLoginImport
      parentRoute: typeof SplitImport
    }
    '/_split/store': {
      id: '/_split/store'
      path: '/store'
      fullPath: '/store'
      preLoaderRoute: typeof SplitStoreImport
      parentRoute: typeof SplitImport
    }
    '/_base/dashboard/': {
      id: '/_base/dashboard/'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof BaseDashboardIndexImport
      parentRoute: typeof BaseImport
    }
    '/_base/store/$slug/': {
      id: '/_base/store/$slug/'
      path: '/store/$slug'
      fullPath: '/store/$slug'
      preLoaderRoute: typeof BaseStoreSlugIndexImport
      parentRoute: typeof BaseImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  BaseRoute: BaseRoute.addChildren({
    BaseHomeRoute,
    BaseDashboardIndexRoute,
    BaseStoreSlugIndexRoute,
  }),
  SplitRoute: SplitRoute.addChildren({ SplitLoginRoute, SplitStoreRoute }),
  AboutRoute,
  LogoutRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_base",
        "/_split",
        "/about",
        "/logout"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_base": {
      "filePath": "_base.tsx",
      "children": [
        "/_base/home",
        "/_base/dashboard/",
        "/_base/store/$slug/"
      ]
    },
    "/_split": {
      "filePath": "_split.tsx",
      "children": [
        "/_split/login",
        "/_split/store"
      ]
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/logout": {
      "filePath": "logout.tsx"
    },
    "/_base/home": {
      "filePath": "_base/home.tsx",
      "parent": "/_base"
    },
    "/_split/login": {
      "filePath": "_split/login.tsx",
      "parent": "/_split"
    },
    "/_split/store": {
      "filePath": "_split/store.tsx",
      "parent": "/_split"
    },
    "/_base/dashboard/": {
      "filePath": "_base/dashboard/index.tsx",
      "parent": "/_base"
    },
    "/_base/store/$slug/": {
      "filePath": "_base/store/$slug/index.tsx",
      "parent": "/_base"
    }
  }
}
ROUTE_MANIFEST_END */
