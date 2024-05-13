import { useMutation, useQueryClient } from '@tanstack/react-query'

import { userService } from '@/services/user-service'

import { TypeUserForm } from '@/types/auth.types'
import { toast } from 'sonner'

export const useUpdateSettings = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['update profile'],
		mutationFn: (data: TypeUserForm) => userService.update(data),
		onSuccess: () => {
			toast.success('Successfully updated profile')
			queryClient.invalidateQueries({ queryKey: ['profile'] })
		},
	})
}
