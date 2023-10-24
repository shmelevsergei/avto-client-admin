import { createBrowserRouter } from 'react-router-dom'
import Layout from '../pages/Layout.tsx'
import ErrorPage from '../pages/ErrorPage.tsx'
import Questions from '../pages/Questions.tsx'
import CreateQuestions from '../pages/CreateQuestions.tsx'
import EditQuestions from '../pages/EditQuestions.tsx'
import Users from '../pages/Users.tsx'
import Auth from '../pages/Auth.tsx'
import ProtectedRoute from '../components/ProtectedRoute.tsx'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: (
					<ProtectedRoute>
						<Users />
					</ProtectedRoute>
				)
			},
			{
				path: 'questions',
				element: (
					<ProtectedRoute>
						<Questions />
					</ProtectedRoute>
				),
				children: [
					{
						path: 'createQuestions',
						element: (
							<ProtectedRoute>
								<CreateQuestions />
							</ProtectedRoute>
						)
					},
					{
						index: true,
						path: 'editQuestions',
						element: (
							<ProtectedRoute>
								<EditQuestions />
							</ProtectedRoute>
						)
					}
				]
			},

			{
				path: 'users',
				element: (
					<ProtectedRoute>
						<Users />
					</ProtectedRoute>
				)
			},
			{
				path: 'auth',
				element: <Auth />
			}
		]
	}
])
