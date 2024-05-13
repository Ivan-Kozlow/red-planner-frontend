'use client'
import { SubmitHandler, useForm } from 'react-hook-form'
import { NextPage } from 'next'

import { TypeUserForm } from '@/types/auth.types'
import { useInitialData } from './useInitialData'
import { useUpdateSettings } from './useUpdateSettings'
import { Field } from '@/components/ui/fields/Field'
import { Button } from '@/components/ui/buttons/Button'

const Settings: NextPage = () => {
	const { isPending, mutate } = useUpdateSettings()
	const { handleSubmit, register, reset } = useForm<TypeUserForm>({ mode: 'onChange' })
	useInitialData(reset)

	// TODO: добавить обводку уже изменившимся полям
	const onSubmit: SubmitHandler<TypeUserForm> = (data) => {
		const { password, ...userInfo } = data

		mutate({ ...userInfo, password: password || undefined })
	}

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='grid grid-cols-2 gap-10'>
					<Field
						id='email'
						label='Email'
						placeholder='Enter email'
						type='email'
						extra='mb-4'
						{...register('email', { required: 'Email is required' })}
					/>
					<Field id='name' label='Name' placeholder='Enter name' type='text' extra='mb-4' {...register('name')} />
					<Field
						id='password'
						label='Password'
						placeholder='Enter password'
						type='password'
						extra='mb-10'
						{...register('password')}
					/>
				</div>
				<div>
					<Field
						id='workInterval'
						label='Work interval'
						placeholder='Enter work interval'
						extra='mb-4'
						isNumber
						{...register('workInterval', { valueAsNumber: true })}
					/>
					<Field
						id='breakInterval'
						label='Break interval'
						placeholder='Enter break interval'
						extra='mb-4'
						isNumber
						{...register('breakInterval', { valueAsNumber: true })}
					/>
					<Field
						id='intervalsCount'
						label='Intervals count'
						placeholder='Enter intervals count'
						extra='mb-6'
						isNumber
						{...register('intervalsCount', { valueAsNumber: true })}
					/>
				</div>

				<Button disabled={isPending}>{isPending ? 'Saving...' : 'Save'}</Button>
			</form>
		</div>
	)
}

export default Settings
