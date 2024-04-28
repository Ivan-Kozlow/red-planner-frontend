import { NextPage } from 'next'

const Heading: NextPage<{ title: string }> = ({ title }) => {
	return (
		<div className='mb-5'>
			<h1 className='text-3xl font-medium'>{title}</h1>
			<div className='mt-3 h-0.5 bg-border w-full' />
		</div>
	)
}

export default Heading
