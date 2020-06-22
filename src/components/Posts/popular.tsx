import React, { useEffect, useState } from 'react'

import { FaFire, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'
import moment from 'moment'

import { Bar, SubmitBar, Container, PostContainer, PostCard, PostTitle, ImgContainer, Cookie } from './styles'

import api from '../../services/api'
import session from '../../services/session'
import cookie from '../../assets/cookie.svg'

import './cardcolors.css'

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

const Popular: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([])

    const user = session.getUserInfo()
    useEffect(() => {
        api({
            method: "GET",
            url: "posts/popular",
            headers: { Authorization: `Bearer ${user.token}` }
        }).then(res => setPosts(res.data))
    }, [user.token])

    const setCardColor = () => {
        const random: number = Math.floor(Math.random() * 100)
        if (random >= 1 && random <= 5) {
            return "blue"
        } else if (random >= 5 && random <= 10) {
            return "purple"
        }
        else if (random >= 10 && random <= 20) {
            return "greenblue"
        }
        else if (random >= 20 && random <= 40) {
            return "green"
        }
        else if (random >= 40 && random <= 70) {
            return "red"
        }
        else if (random >= 70 && random <= 80) {
            return "orange"
        } else {
            return "pink"
        }
    }

    console.log(posts)


    return (
        <>
            <Link to="/posts/submit">
                <SubmitBar>
                    <input
                        type="text"
                        placeholder="Make a post..."
                    />
                </SubmitBar>
            </Link>
            <Bar>
                <div>
                    <FaStar style={{ marginRight: '5px' }} />
                    <Link to="/posts/new">New</Link>
                </div>
                <div style={{ color: '#d81e5b' }}>
                    <FaFire style={{ marginRight: '5px' }} />
                    <p>Popular</p>
                </div>
            </Bar>
            <Container>
                {!posts.length
                    ?
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <CircularProgress color="secondary" />
                    </div>
                    :
                    <PostContainer>
                        {posts.map(post => (
                            <Link
                                to={{
                                    pathname: `/post/${post.id}`
                                }}
                                key={post.id}
                            >
                                <PostCard
                                    className={setCardColor()}
                                >
                                    <PostTitle>
                                        <h2>{post.title.length > 15 ? post.title.substring(0, 15) + '...' : post.title}</h2>
                                        {moment(post.created_at).startOf('second').fromNow()}
                                    </PostTitle>
                                    <ImgContainer>
                                        {post.cookies}
                                        <Cookie src={cookie} alt="cookie" />
                                    </ImgContainer>
                                </PostCard>
                            </Link>
                        ))}
                    </PostContainer>
                }
            </Container>
        </>
    )
}

export default Popular