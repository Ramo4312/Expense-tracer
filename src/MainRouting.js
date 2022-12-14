import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RegistrationPage from './pages/RegistrationPage'
import LoginPage from './pages/LoginPage'
import IncomePage from './pages/IncomePage'
import OutputPage from './pages/OutputPage'
import DiagramPage from './pages/DiagramPage'
import IncomeAdd from './pages/IncomeAdd'
import InfoPage from './pages/InfoPage'
import ModalMailPage from './pages/ModalMailPage'
import OutputAdd from './pages/OutputAdd'
import RestorePage from './pages/RestorePage'
import HistoryPage from './pages/HistoryPage'

const PAGES_ROUTES = [
	{
		link: '/',
		element: <HomePage />,
		id: 1,
	},
	{
		link: '/registration',
		element: <RegistrationPage />,
		id: 2,
	},
	{
		link: '/login',
		element: <LoginPage />,
		id: 3,
	},
	{
		link: '/restore',
		element: <RestorePage />,
		id: 4,
	},
	{
		link: '/income',
		element: <IncomePage />,
		id: 5,
	},
	{
		link: '/output',
		element: <OutputPage />,
		id: 6,
	},
	{
		link: '/diagram',
		element: <DiagramPage />,
		id: 7,
	},
	{
		link: '/IncomeAdd',
		element: <IncomeAdd />,
		id: 8,
	},
	{
		link: '/OutputAdd',
		element: <OutputAdd />,
		id: 9,
	},
	{
		link: '/info',
		element: <InfoPage />,
		id: 10,
	},
	{
		link: '/modalMail',
		element: <ModalMailPage />,
		id: 11,
	},
	{
		link: '/modalMail',
		element: <ModalMailPage />,
		id: 12,
	},
	{
		link: '/history',
		element: <HistoryPage />,
		id: 13,
	},
]

const MainRouting = () => {
	return (
		<Routes>
			{PAGES_ROUTES.map(item => (
				<Route path={item.link} element={item.element} key={item.id} />
			))}
		</Routes>
	)
}

export default MainRouting
