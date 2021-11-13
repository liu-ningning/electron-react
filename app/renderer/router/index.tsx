import React from 'react'
import { Redirect } from 'react-router-dom'

import Home from '@src/pages/home'
import Main from '@src/pages/main'
import Welcome from '@src/pages/welcome'
import Error404 from '@src/pages/error/404'

const routes = [
  { path: '/',
    exact: true,
    component: Welcome
  },
  {
    path: '/home',
    exact: true,
    component: Home
  },
  {
    path: '/main',
    exact: true,
    component: Main
  },
  {
    path: '/404',
    exact: true,
    component: Error404
  },
  {
    path: '*',
    render: () => <Redirect to='/404' />
  },
];

export default routes