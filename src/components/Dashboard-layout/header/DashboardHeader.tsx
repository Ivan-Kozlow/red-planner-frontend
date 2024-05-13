import { NextPage } from 'next'

import GlobalLoader from '@/components/ui/Global-loader/GlobalLoader'
import Profile from './profile/Profile'

const DashboardHeader: NextPage = () => {
	return (
		<div>
			<GlobalLoader />

			{/* FIXME Зачем нужен Profile */}
			<Profile />
		</div>
	)
}

export default DashboardHeader
