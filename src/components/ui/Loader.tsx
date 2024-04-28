import { NextPage } from 'next'
import { LoaderIcon } from 'lucide-react'

const Loader: NextPage = () => {
	return (
		<div>
			<LoaderIcon className='animate-spin w-5 h-5 text-white' />
		</div>
	)
}

export default Loader
