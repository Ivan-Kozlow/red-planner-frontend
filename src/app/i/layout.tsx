import { PropsWithChildren } from 'react'
import { NextPage } from 'next'

import DashboardLayout from '@/components/Dashboard-layout/DashboardLayout'

const Layout: NextPage<PropsWithChildren> = ({ children }) => {
	return <DashboardLayout>{children}</DashboardLayout>
}

export default Layout
