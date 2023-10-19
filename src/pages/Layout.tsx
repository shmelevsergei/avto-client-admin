import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar.tsx'
import Header from '../components/Header.tsx'
import { useAuth } from '../hooks/useAuth.ts'

const Layout: FC = () => {
	const isAuth = useAuth()
	return (
		<div className={'min-h-screen pb-20'}>
			<Header />
			<Sidebar isAuth={isAuth} />
			<div className={'container'}>
				<Outlet />
			</div>
		</div>
	)
}

export default Layout
