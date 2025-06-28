import { useState } from "react"
import Auth from "../Auth"
import AuthBody from "../AuthBody"
import TextInput from "../../UI/TextInput/TextInput"
import CustomCheckbox from "../../UI/CustomCheckbox/CustomCheckbox"
import { Link, useNavigate } from "react-router-dom"
import styles from './Login.module.scss'
import CustomButton from "../../UI/CustomButton/CustomButton"
import getApi from "../../../http/getApi"
import { setAccessToken } from "../../../helpers/jwt"

const Login = () => {
    const token = localStorage.getItem('accessToken')
    const navigate = useNavigate()
    const [login, setLogin] = useState({
        username: 'emilys',
        password: 'emilyspass',
        expiresInMins: 30
    })

    function handleChange(e: any) {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    function handleSubmit() {
        getApi({
            url: 'https://dummyjson.com/users/login',
            method: 'post',
            data: login
        })
            .then((res) => {
                console.log(1, res)
                if (res?.data.accessToken) {
                    setAccessToken(res?.data.accessToken)
                    navigate('/')
                }
            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <Auth>
            <AuthBody
                title={'Welcome back'}
                description={'Welcome back! Please enter your details.'}>
                <TextInput
                    type="text"
                    placeholder="Enter your username"
                    name="username"
                    value={login.username}
                    onChange={handleChange}
                    title="Username"
                />
                <TextInput
                    type="password"
                    placeholder="*******"
                    name="password"
                    value={login.password}
                    onChange={handleChange}
                    title="Password"
                />
                <div className={styles.login__footer}>
                    <CustomCheckbox
                        type="checkbox"
                        text="Remember me"
                    />
                    <Link to={'#'} className={styles['login__footer--link']}>
                        Forgot password
                    </Link>
                </div>
                <CustomButton
                    text="Sign in"
                    onSubmit={handleSubmit}
                />
                <p>
                    Don’t have an account?
                    <Link to={'/reg'}>
                        Sign up fo free!
                    </Link>
                </p>
            </AuthBody>
        </Auth>
    )
}

export default Login