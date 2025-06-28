import styles from './Auth.module.scss'

const Auth = ({ children }: any) => {
    return (
        <div className={styles.auth}>
            <div className={styles.auth__form}>
                {children}
            </div>
            <div className={styles.auth__cover}>
            </div>
        </div>
    )
}

export default Auth