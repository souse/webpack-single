import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from '@/utils/load';

import Layout from '@/views/Layout';
import Login from '@/views/Login';

import TeacherManage from '@/views/TeacherManage';

export const childRoutes = [
	{
		path: '/teachermanage',
		//component: TeacherManage,
		component: import(/* webpackChunkName: 'teachermanage' */ '@/views/TeacherManage').then(module => {
			return module.default;
		}),
		exactly: true
	},
	{
		path: '/teachermanage1',
		//component: TeacherManage,
		component: cb => {
			require.ensure(
				[],
				require => {
					cb(require('@/views/TeacherManage').default);
				},
				'teachermanage1'
			);
		}
	},
	{
		path: '/td',
		//component: TeacherManage,
		component: Loadable({
			loader: () => import('@/views/TeacherManage'),
			loading: Loading
		})
	}
];

const routes = (
	<Switch>
		<Route
			path="/login"
			component={import(/* webpackChunkName: 'login' */ '@/views/Login').then(module => {
				return module.default;
			})}
		/>
		<Route
			path="/tm"
			component={() =>
				import(/* webpackChunkName: 'tm' */ '@/views/TeacherManage').then(module => {
					return module.default;
				})
			}
		/>

		<Route path="/tm1" component={childRoutes[2].component} />

		{/* <Route path="/" component={Layout} /> */}
	</Switch>
);

export default routes;
