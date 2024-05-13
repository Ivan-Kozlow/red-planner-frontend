import style from './DashboardSidebar.module.scss'
import Link from 'next/link'
import { NextPage } from 'next'
import { GanttChartSquare } from 'lucide-react'

import { COLORS } from '@/constants/color.constants'

import MenuItem from './MenuItem'
import { MENU } from './menu.data'
import LogoutButton from './LogoutButton'

const DashboardSidebar: NextPage = () => {
	return (
		<aside className={style.sidebar}>
			<div>
				<Link href={'/'} className={style.link} draggable={false}>
					<GanttChartSquare color={COLORS.primary} size={38} />
					<span className={style.title}>
						Red Planner
						<span className={style.subtitle}>PET project</span>
					</span>
				</Link>
				<div className={style.logout__link}>
					<LogoutButton />
					{MENU.map((item) => (
						<MenuItem key={item.link} item={item} />
					))}
				</div>
			</div>
			<footer className={style.footer}>
				{new Date().getFullYear()} © Thank to RedGroup <br />
				<a href='https://www.youtube.com/@REDGroup' target='_blank' rel='noreferrer' className={style.thank__link}>
					RED Group
				</a>
			</footer>
		</aside>
	)
}

export default DashboardSidebar
