import React, { useState, ChangeEvent, FormEvent } from 'react'

import { Container, Logo, LogoImg, Button } from './styles'
import logo from '../../assets/logoweb.svg'

import { useHistory } from 'react-router-dom'

import api from '../../services/api'
import session from '../../services/session'

const SignUp: React.FC = () => {
    let [user, setUser] = useState({
        username: '',
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
        const { username, email, password } = user
        const data = { username, email, password }
        if (username.length === 0 || email.length === 0 || password.length === 0) {
            setValidation('Dados inválidos')
            return setDisableButton(false)
        }
        await api.post("users", data)
            .then(res => {
                session.login(res.data)
                setDisableButton(false)
                history.push('/posts/popular')
                window.location.reload()
            })
            .catch(err => setValidation('An error ocurred in your register'))
    }
    return (
        <Container>
            <Logo>
                <LogoImg
                    src={logo}
                    alt="logo"
                />
            </Logo>
            <p>Join post it</p>
            <h2>Create your account</h2>
            <form onSubmit={handleSubmitForm}>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={handleInputChange}
                /> <br />
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
                />
                <div>{validation}</div>
                <Button
                    type="submit"
                    disabled={disableButton}
                >
                    Create account</Button>
            </form>
        </Container>
    )
}

export default SignUp