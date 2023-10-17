import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar.tsx'
import Header from '../components/Header.tsx'

const Layout: FC = () => {
	return (
		<div className={'min-h-screen pb-20'}>
			<Header />
			<Sidebar />
			<div className={'container'}>
				<Outlet />
			</div>
		</div>
	)
}

export default Layout
