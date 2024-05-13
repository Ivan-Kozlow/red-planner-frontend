'use client'
import { useRouter } from 'next/navigation'
import { NextPage } from 'next'
import { LogOut } from 'lucide-react'
import { useMutation } from '@tanstack/react-query'

import { authService } from '@/services/auth-service'

const LogoutButton: NextPage = () => {
	const router = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => router.push('/auth'),
	})

	return (
		<div className='absolute top-1 right-1'>
			<button className='opacity-20 hover:opacity-100 transition-opacity duration-300' onClick={() => mutate()}>
				<LogOut size={20} />
			</button>
		</div>
	)
}

export default LogoutButton
