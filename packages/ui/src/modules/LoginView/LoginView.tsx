import { Card } from '../../elements'
import { LoginForm } from '../../features'
import styles from './LoginView.module.css'

export const LoginView = () => (
  <div className={styles['login-view']}>
    <div className={styles['login-view__container']}>
      <Card>
        <LoginForm />
      </Card>
    </div>
  </div>
)
