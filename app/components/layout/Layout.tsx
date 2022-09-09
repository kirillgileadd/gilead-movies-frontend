import { FC, ReactNode } from 'react'

import Header from './Header/Header'
import styles from './Layout.module.scss'
import Navigation from './Navigation/Navigation'

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<div className="main-container relative">
				<div className={styles.top_layout}>
					<div className="main-container">
						<Header />
					</div>
				</div>
				<div className={styles.main}>{children}</div>
			</div>
		</div>
	)
}

export default Layout
