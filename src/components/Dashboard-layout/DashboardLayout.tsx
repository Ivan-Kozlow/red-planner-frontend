import style from './Dashboard-layout.module.scss'
import { PropsWithChildren } from 'react'
import { NextPage } from 'next'

import DashboardSidebar from './sidebar/DashboardSidebar'
import DashboardHeader from './header/DashboardHeader'

const DashboardLayout: NextPage<PropsWithChildren> = ({ children }) => {
	return (
		<div className={style.container}>
			<DashboardSidebar />

			<main className={style.main}>
				<DashboardHeader />
				{children}
			</main>
		</div>
	)
}

export default DashboardLayout
