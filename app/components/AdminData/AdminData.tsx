import { FC } from 'react'
import styles from './AdminData.module.scss'

const AdminData: FC = () => {
	return (
		<aside className={styles.data_block}>
			<h3>Данные администратора</h3>
			<div>
				<div className={styles.item}>
					<h6>Почта</h6>
					<p>user@gmail.com</p>
				</div>
				<div className={styles.item}>
					<h6>Пароль</h6>
					<p>1234567a</p>
				</div>
			</div>
		</aside>
	)
}

export default AdminData
