import { UseFormReset } from 'react-hook-form'
import { useEffect } from 'react'

import { useProfile } from '@/hooks/useProfile'

import { TypeUserForm } from '@/types/auth.types'

export const useInitialData = (reset: UseFormReset<TypeUserForm>) => {
	const { data, isSuccess } = useProfile()

	useEffect(() => {
		if (isSuccess && data)
			reset({
				email: data.user.email,
				name: data.user.name,
				breakInterval: data.user.breakInterval,
				workInterval: data.user.workInterval,
				intervalsCount: data.user.intervalsCount,
			})
	}, [data, isSuccess, reset])
}
