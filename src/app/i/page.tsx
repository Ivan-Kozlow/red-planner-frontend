'use client'
import { NextPage } from 'next'

import Heading from '@/components/ui/Heading'
import Statistics from './Statistics'

const Page: NextPage = () => {
	return (
		<div>
			<Heading title='Statistics' />
			<Statistics />
		</div>
	)
}

export default Page
