import React, { useState, ChangeEvent, FormEvent } from 'react'

import { Container, Logo, LogoImg, Button } from '../SignUp/styles'
import { useHistory } from 'react-router-dom'

import logo from '../../assets/logoweb.svg'

import session from '../../services/session'
import api from '../../services/api'

const SignIn: React.FC = () => {
    let [user, setUser] = useState({
        email: '',
        password: ''
    })
    let [disableButton, setDisableButton] = useState(false)
    let [validation, setValidation] = useState('')
    let history = useHistory()

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmitForm = async (event: FormEvent) => {
        event.preventDefault()
        setDisableButton(true)
        const { email, password } = user
        const data = { email, password }
        await api.post("auth", data)
            .then(res => {
                session.login(res.data)
                setDisableButton(false)
                history.push('/posts/popular')
                window.location.reload()
            })
            .catch(() => {
                setValidation('An error ocurred in your login')
                setDisableButton(false)
            })
    }
    return (
        <Container>
            <Logo>
                <LogoImg
                    src={logo}
                    alt="logo"
                />
            </Logo>
            <h2>Sign in to Postit</h2>
            <form onSubmit={handleSubmitForm}>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={handleInputChange}
                /> <br />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleInputChange}
                /> <br />
                <div>{validation}</div>
                <Button
                    type="submit"
                    disabled={disableButton}
                >
                    Sign in</Button>
            </form>
        </Container>
    )
}

export default SignIn