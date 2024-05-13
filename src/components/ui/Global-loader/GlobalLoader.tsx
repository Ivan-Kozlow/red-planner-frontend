'use client'
import { NextPage } from 'next'
import { useIsFetching, useIsMutating } from '@tanstack/react-query'

import Loader from '../Loader'

const GlobalLoader: NextPage = () => {
	const isMutating = useIsMutating()
	const isFetching = useIsFetching()

	return isMutating || isFetching ? (
		<div className='fixed top-layout right-layout z-50'>
			<Loader />
		</div>
	) : null
}

export default GlobalLoader
