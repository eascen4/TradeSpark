/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProtectedImport } from './routes/_protected'
import { Route as AuthImport } from './routes/_auth'
import { Route as ProtectedIndexImport } from './routes/_protected/index'
import { Route as ProtectedSettingsImport } from './routes/_protected/settings'
import { Route as ProtectedCurrentImport } from './routes/_protected/current'
import { Route as ProtectedCreateImport } from './routes/_protected/create'
import { Route as ProtectedAboutImport } from './routes/_protected/about'
import { Route as AuthSignupImport } from './routes/_auth/signup'
import { Route as AuthLoginImport } from './routes/_auth/login'

// Create/Update Routes

const ProtectedRoute = ProtectedImport.update({
  id: '/_protected',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const ProtectedIndexRoute = ProtectedIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => ProtectedRoute,
} as any)

const ProtectedSettingsRoute = ProtectedSettingsImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => ProtectedRoute,
} as any)

const ProtectedCurrentRoute = ProtectedCurrentImport.update({
  id: '/current',
  path: '/current',
  getParentRoute: () => ProtectedRoute,
} as any)

const ProtectedCreateRoute = ProtectedCreateImport.update({
  id: '/create',
  path: '/create',
  getParentRoute: () => ProtectedRoute,
} as any)

const ProtectedAboutRoute = ProtectedAboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => ProtectedRoute,
} as any)

const AuthSignupRoute = AuthSignupImport.update({
  id: '/signup',
  path: '/signup',
  getParentRoute: () => AuthRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => AuthRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/_protected': {
      id: '/_protected'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof ProtectedImport
      parentRoute: typeof rootRoute
    }
    '/_auth/login': {
      id: '/_auth/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof AuthImport
    }
    '/_auth/signup': {
      id: '/_auth/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof AuthSignupImport
      parentRoute: typeof AuthImport
    }
    '/_protected/about': {
      id: '/_protected/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof ProtectedAboutImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/create': {
      id: '/_protected/create'
      path: '/create'
      fullPath: '/create'
      preLoaderRoute: typeof ProtectedCreateImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/current': {
      id: '/_protected/current'
      path: '/current'
      fullPath: '/current'
      preLoaderRoute: typeof ProtectedCurrentImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/settings': {
      id: '/_protected/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof ProtectedSettingsImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/': {
      id: '/_protected/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof ProtectedIndexImport
      parentRoute: typeof ProtectedImport
    }
  }
}

// Create and export the route tree

interface AuthRouteChildren {
  AuthLoginRoute: typeof AuthLoginRoute
  AuthSignupRoute: typeof AuthSignupRoute
}

const AuthRouteChildren: AuthRouteChildren = {
  AuthLoginRoute: AuthLoginRoute,
  AuthSignupRoute: AuthSignupRoute,
}

const AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren)

interface ProtectedRouteChildren {
  ProtectedAboutRoute: typeof ProtectedAboutRoute
  ProtectedCreateRoute: typeof ProtectedCreateRoute
  ProtectedCurrentRoute: typeof ProtectedCurrentRoute
  ProtectedSettingsRoute: typeof ProtectedSettingsRoute
  ProtectedIndexRoute: typeof ProtectedIndexRoute
}

const ProtectedRouteChildren: ProtectedRouteChildren = {
  ProtectedAboutRoute: ProtectedAboutRoute,
  ProtectedCreateRoute: ProtectedCreateRoute,
  ProtectedCurrentRoute: ProtectedCurrentRoute,
  ProtectedSettingsRoute: ProtectedSettingsRoute,
  ProtectedIndexRoute: ProtectedIndexRoute,
}

const ProtectedRouteWithChildren = ProtectedRoute._addFileChildren(
  ProtectedRouteChildren,
)

export interface FileRoutesByFullPath {
  '': typeof ProtectedRouteWithChildren
  '/login': typeof AuthLoginRoute
  '/signup': typeof AuthSignupRoute
  '/about': typeof ProtectedAboutRoute
  '/create': typeof ProtectedCreateRoute
  '/current': typeof ProtectedCurrentRoute
  '/settings': typeof ProtectedSettingsRoute
  '/': typeof ProtectedIndexRoute
}

export interface FileRoutesByTo {
  '': typeof AuthRouteWithChildren
  '/login': typeof AuthLoginRoute
  '/signup': typeof AuthSignupRoute
  '/about': typeof ProtectedAboutRoute
  '/create': typeof ProtectedCreateRoute
  '/current': typeof ProtectedCurrentRoute
  '/settings': typeof ProtectedSettingsRoute
  '/': typeof ProtectedIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_auth': typeof AuthRouteWithChildren
  '/_protected': typeof ProtectedRouteWithChildren
  '/_auth/login': typeof AuthLoginRoute
  '/_auth/signup': typeof AuthSignupRoute
  '/_protected/about': typeof ProtectedAboutRoute
  '/_protected/create': typeof ProtectedCreateRoute
  '/_protected/current': typeof ProtectedCurrentRoute
  '/_protected/settings': typeof ProtectedSettingsRoute
  '/_protected/': typeof ProtectedIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/login'
    | '/signup'
    | '/about'
    | '/create'
    | '/current'
    | '/settings'
    | '/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | ''
    | '/login'
    | '/signup'
    | '/about'
    | '/create'
    | '/current'
    | '/settings'
    | '/'
  id:
    | '__root__'
    | '/_auth'
    | '/_protected'
    | '/_auth/login'
    | '/_auth/signup'
    | '/_protected/about'
    | '/_protected/create'
    | '/_protected/current'
    | '/_protected/settings'
    | '/_protected/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AuthRoute: typeof AuthRouteWithChildren
  ProtectedRoute: typeof ProtectedRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  AuthRoute: AuthRouteWithChildren,
  ProtectedRoute: ProtectedRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_auth",
        "/_protected"
      ]
    },
    "/_auth": {
      "filePath": "_auth.tsx",
      "children": [
        "/_auth/login",
        "/_auth/signup"
      ]
    },
    "/_protected": {
      "filePath": "_protected.tsx",
      "children": [
        "/_protected/about",
        "/_protected/create",
        "/_protected/current",
        "/_protected/settings",
        "/_protected/"
      ]
    },
    "/_auth/login": {
      "filePath": "_auth/login.tsx",
      "parent": "/_auth"
    },
    "/_auth/signup": {
      "filePath": "_auth/signup.tsx",
      "parent": "/_auth"
    },
    "/_protected/about": {
      "filePath": "_protected/about.tsx",
      "parent": "/_protected"
    },
    "/_protected/create": {
      "filePath": "_protected/create.tsx",
      "parent": "/_protected"
    },
    "/_protected/current": {
      "filePath": "_protected/current.tsx",
      "parent": "/_protected"
    },
    "/_protected/settings": {
      "filePath": "_protected/settings.tsx",
      "parent": "/_protected"
    },
    "/_protected/": {
      "filePath": "_protected/index.tsx",
      "parent": "/_protected"
    }
  }
}
ROUTE_MANIFEST_END */
