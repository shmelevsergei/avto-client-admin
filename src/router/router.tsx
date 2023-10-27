import { createBrowserRouter } from 'react-router-dom'
import Layout from '../pages/Layout.tsx'
import ErrorPage from '../pages/ErrorPage.tsx'
import Questions from '../pages/Questions.tsx'
import CreateQuestions, {
	createQuestionAction
} from '../pages/CreateQuestions.tsx'
import EditQuestions, {
	questionsAction,
	questionsLoader
} from '../pages/EditQuestions.tsx'
import Users, { usersLoader } from '../pages/Users.tsx'
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
				loader: usersLoader,
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
						action: createQuestionAction,
						element: <CreateQuestions />
					},
					{
						path: 'editQuestions',
						action: questionsAction,
						loader: questionsLoader,
						element: <EditQuestions />
					}
				]
			},

			{
				path: 'auth',
				element: <Auth />
			}
		]
	}
])
