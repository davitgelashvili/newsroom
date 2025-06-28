import styles from './Auth.module.scss'  

function AuthBody({title, description, children}:any){
    return (
        <div className={styles['auth__form--content']}>
            <h1 className={styles['auth__form--title']}>{title}</h1>
            <p className={styles['auth__form--desc']}>{description}</p>
            {children}
        </div>
    )
}

export default AuthBody