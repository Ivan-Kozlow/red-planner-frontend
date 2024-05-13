'use client'
import { NextPage } from 'next'

import { useProfile } from '@/hooks/useProfile'

import Loader from '@/components/ui/Loader'

const Statistics: NextPage = () => {
	const { data, isLoading } = useProfile()

	// TODO Добавить скелетон для блоков статистики
	return isLoading ? (
		<Loader />
	) : (
		<div className='flex flex-wrap gap-12 mt-7'>
			{data?.statistics.length ? (
				data?.statistics.map(({ label, value }) => (
					<div key={label} className='bg-border/5 rounded p-layout min-w-[240px] text-center'>
						<div className='text-xl'>{label}</div>
						<div className='text-3xl'>{value}</div>
					</div>
				))
			) : (
				<div>Statistics not found</div>
			)}
		</div>
	)
}

export default Statistics
