import { Link, useNavigate } from "react-router-dom"
import getApi from "../../../http/getApi"
import CustomButton from "../../UI/CustomButton/CustomButton"
import TextInput from "../../UI/TextInput/TextInput"
import Auth from "../Auth"
import AuthBody from "../AuthBody"
import { useState } from "react"

const Register = () => {
    const navigate = useNavigate()
    const [values, setValues] = useState({
        email: '',
        username: '',
        password: ''
    })

    function handleChange(e: any) {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    function handleSubmit() {
        if (
            values.email !== '' &&
            values.username !== '' &&
            values.password !== ''
        ) {
            getApi({
                url: 'https://dummyjson.com/users/add',
                method: 'post',
                data: values
            })
                .then((res) => {
                    navigate('/login')
                }).catch((err) => {
                    console.log(err)
                })
        }
    }
    return (
        <Auth>
            <AuthBody
                title={'Registration'}
                description={'Please enter your details.'}>
                <TextInput
                    type="text"
                    placeholder="Enter your email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    title="Email"
                />
                <TextInput
                    type="text"
                    placeholder="Enter your username"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    title="Username"
                />
                <TextInput
                    type="password"
                    placeholder="*******"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    title="Password"
                />
                <CustomButton
                    text="Sign UP"
                    onSubmit={handleSubmit}
                />
                <p>
                    Do have an account?
                    <Link to={'/login'}>
                        Sign in
                    </Link>
                </p>
            </AuthBody>
        </Auth >
    )
}

export default Register