import React, { useState, useEffect } from 'react'

import { useParams, Link, useHistory } from 'react-router-dom'
import moment from 'moment'
import { CircularProgress } from '@material-ui/core'

import { Container, Header, ImgContainer, Cookie, Content, CookieButton, Comments, Ul } from './styles'

import session from '../../services/session'
import api from '../../services/api'
import cookie from '../../assets/cookie.svg'

interface Post {
    id: number,
    title: string,
    content: string,
    cookies: number,
    created_at: string,
    userId: number,
    users: {
        id: number,
        username: string,
        email: string,
    }
}

const PostView: React.FC = () => {
    const [post, setPost] = useState<Post>()

    const user = session.getUserInfo()

    const { id } = useParams()
    const history = useHistory()

    const getPost = () => {
        api({
            method: 'GET',
            url: `posts/${id}`,
            headers: { Authorization: `Bearer ${user.token}` }
        })
            .then(res => setPost(res.data))
            .catch(err => console.log(err))
    }

    const addCookie = () => {
        api({
            method: 'PUT',
            url: `post/cookies/${id}`,
            headers: { Authorization: `Bearer ${user.token}` }
        })
            .then(() => {
                getPost()
            })
    }

    const handleDeletePost = () => {
        api({
            method: "DELETE",
            url: `posts/${id}`,
            headers: { Authorization: `Bearer ${user.token}` }
        })
            .then(() => history.push('/posts/popular'))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getPost()
    }, [])
    console.log(post)
    return (
        <>
            <Container>
                {!post
                    ?
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <CircularProgress color="secondary" />
                    </div>
                    :
                    <div>
                        <Header>
                            <h1>{post.title.length > 60 ? post.title.substring(0, 60) + '...' : post.title}</h1>
                            {post.userId === user.user.id
                                ?
                                < Ul >
                                    <li onClick={handleDeletePost}>Delete</li>
                                </Ul>
                                :
                                null}
                        </Header>
                        <h4>{post.users.username.length > 130 ? post.users.username.substring(0, 130) + '...' : post.users.username}</h4>
                        <h5>{moment(post.created_at).format('ll')}</h5>
                        <Content>{post.content}</Content>
                        <ImgContainer>
                            <CookieButton
                                onClick={addCookie}
                            >
                                <Cookie src={cookie} />
                            </CookieButton>
                            {post.cookies} cookies
                    </ImgContainer>
                    </div>
                }
            </Container >
            <Link to={{ pathname: `/posts/comments/${post ? post.id : 1}` }}>
                <Comments>
                    See comments
            </Comments>
            </Link>
        </>
    )
}

export default PostView