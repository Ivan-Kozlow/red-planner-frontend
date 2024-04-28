'use client'
import style from './auth.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { NextPage } from 'next'
import { useMutation } from '@tanstack/react-query'

import { authService } from '@/services/auth-service'

import { IAuthForm } from '@/types/auth.types'
import { toast } from 'sonner'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import Heading from '@/components/ui/Heading'
import { Field } from '@/components/ui/fields/Field'
import { Button } from '@/components/ui/buttons/Button'

const Auth: NextPage = () => {
	const [isLoginForm, setIsLoginForm] = useState(false)
	const { register, handleSubmit, reset } = useForm<IAuthForm>({ mode: 'onChange' })

	const { push } = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) => authService.main(isLoginForm ? 'login' : 'register', data),
		onSuccess() {
			toast.success('Successfully login')
			reset()
			push(DASHBOARD_PAGES.HOME)
		},
	})

	const onSubmit: SubmitHandler<IAuthForm> = (data) => {
		mutate(data)
	}

	return (
		<div className={style.container}>
			<form className={style.form} onSubmit={handleSubmit(onSubmit)}>
				<Heading title='Auth' />

				{/* TODO добавить текст ошибок */}
				<Field
					label='Email'
					placeholder='Enter email'
					type='email'
					extra='mb-4'
					{...register('email', { required: 'Email is required' })}
					id={'email'}
				/>
				<Field
					label='Password'
					placeholder='Enter password'
					type='password'
					extra='mb-4'
					{...register('password', { required: 'Password is required' })}
					id={'password'}
				/>

				<div className={style.buttons}>
					<Button onClick={() => setIsLoginForm(true)}>Login</Button>
					<Button onClick={() => setIsLoginForm(false)}>Register</Button>
				</div>
			</form>
		</div>
	)
}

export default Auth
