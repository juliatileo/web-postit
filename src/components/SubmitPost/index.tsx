import React, { useState, FormEvent, ChangeEvent } from 'react'

import { Link, useHistory } from 'react-router-dom'

import { Container, Input, Button } from './styles'

import api from '../../services/api'
import session from '../../services/session'

const Submit: React.FC = () => {
    const [post, setPost] = useState({
        title: '',
        content: '',
        userId: 0
    })
    const [disabled, setDisabled] = useState(false)
    const [error, setError] = useState('')

    const user = session.getUserInfo()
    const history = useHistory()

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setPost({ ...post, [name]: value, userId: user.user.id })
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        setDisabled(true)
        const { title, content, userId } = post
        const data = { title, content, userId }
        if (!title || !content) {
            setDisabled(false)
            return setError('Invalid post content')
        }
        api({
            method: "POST",
            url: 'posts',
            headers: { Authorization: `Bearer ${user.token}` },
            data
        }).then(() => {
            setDisabled(false)
            history.push('/posts/new')
        }).catch(() => {
            setDisabled(false)
            setError('An error ocurred in your post')
        })
    }
    return (
        <Container>
            <h2>Make a post</h2>
            <form
                style={{ display: 'flex', flexDirection: 'column' }}
                onSubmit={handleSubmit}
            >
                <Input
                    type="text"
                    placeholder="Title"
                    name="title"
                    onChange={handleChange}
                />
                <Input
                    placeholder="Text"
                    name="content"
                    onChange={handleChange}
                />
                <div>
                    <div>{error}</div>
                    <Link to="/posts/popular">
                        <Button>
                            Cancel
                        </Button>
                    </Link>
                    <Button
                        type="submit"
                        disabled={disabled}
                    >Post</Button>
                </div>
            </form>
        </Container >
    )
}

export default Submit