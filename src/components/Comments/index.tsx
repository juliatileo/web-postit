import React, { useState, useEffect, ChangeEvent } from 'react'

import { Container, OriginalPost, ImgContainer, Cookie, CommentView, SubmitComment, Comment, CookieButton, Header } from './styles'

import { useParams, Link } from 'react-router-dom'
import moment from 'moment'
import { Snackbar, CircularProgress } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

import session from '../../services/session'
import api from '../../services/api'
import cookie from '../../assets/cookie.svg'

interface Post {
    id: number,
    title: string,
    content: string,
    cookies: number,
    created_at: string,
    users: {
        id: number,
        username: string,
    }
}

interface Comment {
    id: number,
    content: string,
    cookies: number,
    created_at: string,
    userId: number,
    users: {
        id: number,
        username: string
    }
}

const Comments: React.FC = () => {
    const [post, setPost] = useState<Post>()
    const [comment, setComment] = useState<Comment[]>([])
    const [disabled, setDisabled] = useState(false)
    const [commentContent, setCommentContent] = useState({
        content: '',
        userId: 0,
        postId: 0
    })
    const [commentDeletedOpen, setCommentDeletedOpen] = useState(false)
    const [commentPublishedOpen, setCommentPublishedOpen] = useState(false)

    const user = session.getUserInfo()

    const { id } = useParams()

    const getPost = () => {
        api({
            method: 'GET',
            url: `posts/${id}`,
            headers: { Authorization: `Bearer ${user.token}` }
        })
            .then(res => setPost(res.data))
            .catch(err => console.log(err))
    }

    const getComment = () => {
        api({
            method: 'GET',
            url: `comments/${id}`,
            headers: { Authorization: `Bearer ${user.token}` }
        })
            .then(res => setComment(res.data))
            .catch(err => console.log(err))
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setCommentContent({ ...commentContent, [name]: value, userId: user.user.id, postId: !post ? 0 : post.id })
    }

    const handleSubmitComment = () => {
        setDisabled(true)
        const { content, userId, postId } = commentContent
        const data = { content, userId, postId }
        if (!content) {
            setDisabled(false)
        }
        api({
            method: 'POST',
            url: `comments`,
            data: data,
            headers: { Authorization: `Bearer ${user.token}` }
        })
            .then((res) => {
                setCommentPublishedOpen(true)
                setDisabled(false)
                getComment()
            })
            .catch(() => alert('Error in comment'))
    }


    const addCookie = (id: number) => {
        api({
            method: 'PUT',
            url: `comments/cookies/${id}`,
            headers: { Authorization: `Bearer ${user.token}` }
        })
            .then(() => {
                getComment()
            })
    }

    const handleDeleteComment = (id: number) => {
        api({
            method: "DELETE",
            url: `comments/${id}`,
            headers: { Authorization: `Bearer ${user.token}` }
        })
            .then(() => {
                setCommentDeletedOpen(true)
                getComment()
            })
            .catch(err => console.log(err))
    }

    useEffect(() => getPost(), [])
    useEffect(() => getComment(), [])

    console.log(post)
    console.log(comment)
    return (
        <Container>
            <Snackbar
                open={commentDeletedOpen}
                autoHideDuration={1000}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                message="Comment deleted"
                onClose={() => setCommentDeletedOpen(false)}
            >
                <Alert severity="success">
                    Comment deleted!
                </Alert>
            </Snackbar>
            <Snackbar
                open={commentPublishedOpen}
                autoHideDuration={1000}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                message="Comment deleted"
                onClose={() => setCommentPublishedOpen(false)}
            >
                <Alert severity="success">
                    Comment published!
                </Alert>
            </Snackbar>
            {!post
                ?
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress color="secondary" />
                </div>
                :
                <>
                    <h3>Showing comments for:</h3>
                    <Link to={{ pathname: `/post/${post.id}` }}>
                        <OriginalPost>
                            <div>
                                <p>{post.title.length > 20 ? post.title.substring(0, 20) + '...' : post.title}</p>
                                <p style={{ color: '#636363' }}>{post.users.username.length > 45 ? post.users.username.substring(0, 45) + '...' : post.users.username}</p>
                            </div>
                            <div>
                                <ImgContainer>
                                    <Cookie
                                        src={cookie}
                                        style={{ marginRight: '10px' }}
                                    />
                                    {post.cookies} cookies
                            </ImgContainer>
                            </div>
                        </OriginalPost>
                    </Link>
                    <CommentView>
                        <h3>
                            Comments
                        </h3>
                        <SubmitComment>
                            <input
                                type="text"
                                placeholder="Write a comment..."
                                name="content"
                                onChange={handleInputChange}
                            />
                            <button
                                disabled={disabled}
                                type="submit"
                                onClick={handleSubmitComment}
                            >Publish</button>
                        </SubmitComment>
                        {comment.map(comment => (
                            <Comment key={comment.id}>
                                <Header>
                                    <h4>{comment.users.username.length > 65 ? comment.users.username.substring(0, 65) + '...' : comment.users.username}</h4>
                                    {comment.users.id === user.user.id
                                        ?
                                        <ul>
                                            <li onClick={() => handleDeleteComment(comment.id)}>Delete</li>
                                        </ul>
                                        :
                                        null}
                                </Header>
                                <h5>{moment(comment.created_at).format('ll')}</h5>
                                <hr />
                                <p>{comment.content}</p>
                                <ImgContainer>
                                    <CookieButton onClick={() => addCookie(comment.id)}>
                                        <Cookie src={cookie} />
                                    </CookieButton>
                                    {comment.cookies} cookies
                            </ImgContainer>
                            </Comment>
                        ))}
                    </CommentView>
                </>
            }
        </Container >
    )
}

export default Comments