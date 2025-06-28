import { useNavigate } from 'react-router-dom'
import { decodeToken, removeAccessToken } from '../../../helpers/jwt'
import styles from './Header.module.scss'
import { useEffect, useState } from 'react'
import getApi from '../../../http/getApi'

const Header = () => {
    // const token = localStorage.getItem('accessToken')
    // const userData = decodeToken(token)
    const [userData, setUserData] = useState<any>([])
    const navigate = useNavigate()

    useEffect(() => {
        getApi({
            url: 'https://dummyjson.com/auth/me',
            method: 'get',
        }).then((res) => {
            setUserData(res?.data)
        })
    }, [])



    return (
        <header className={styles.header}>
            <p className={styles.header__name}>
                {userData?.username}
            </p>
            <button
                className={styles.header__btn}
                onClick={() => {
                    removeAccessToken()
                    navigate('/login');
                }}>
                Log out
            </button>
        </header>
    )
}

export default Header