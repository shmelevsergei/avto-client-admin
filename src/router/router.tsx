import { createBrowserRouter } from 'react-router-dom'
import Layout from '../pages/Layout.tsx'
import ErrorPage from '../pages/ErrorPage.tsx'
import Home from '../pages/Home.tsx'
import Questions from '../pages/Questions.tsx'
import CreateQuestions from '../pages/CreateQuestions.tsx'
import EditQuestions from '../pages/EditQuestions.tsx'
import Users from '../pages/Users.tsx'
import Auth from '../pages/Auth.tsx'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: 'questions',
				element: <Questions />
			},
			{
				path: 'createQuestions',
				element: <CreateQuestions />
			},
			{
				path: 'editQuestions',
				element: <EditQuestions />
			},
			{
				path: 'users',
				element: <Users />
			},
			{
				path: 'auth',
				element: <Auth />
			}
		]
	}
])
