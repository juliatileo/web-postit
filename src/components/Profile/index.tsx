import React, { useState, useEffect, ChangeEvent } from 'react'

import { useParams } from 'react-router-dom'
import { CircularProgress, Tabs, Tab, Box, Typography } from '@material-ui/core'
import moment from 'moment'
import { Link } from 'react-router-dom'

import api from '../../services/api'
import session from '../../services/session'

import { Container, OriginalPost } from './styles'

interface User {
    id: number,
    username: string,
    created_at: string,
    posts: {
        id: number,
        title: string,
        content: string,
    }[],
    comments: {
        id: number,
        content: string,
        postId: number
    }[]
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

const Profile: React.FC = () => {
    const { id } = useParams()

    const user = session.getUserInfo()

    const [profileUser, setProfileUser] = useState<User>()
    const [value, setValue] = useState(1)

    const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    useEffect(() => {
        api({
            method: 'GET',
            url: `users/${id}`,
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }).then(res => setProfileUser(res.data))
    }, [id, user.token])
    return (
        <Container>
            {!profileUser
                ? <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress color="secondary" />
                </div>
                :
                <>
                    <h1>{profileUser.username.length > 50 ? profileUser.username.substring(0, 50) + '...' : profileUser.username}</h1>
                    <h4>Since {moment(profileUser.created_at).format('ll')}</h4>
                    <Tabs
                        value={value}
                        indicatorColor="secondary"
                        textColor="secondary"
                        onChange={handleChange}
                        style={{ marginTop: '10px' }}
                    >
                        <Tab label="Posts" value={1} />
                        <Tab label="Comments" value={2} />
                    </Tabs>
                    <TabPanel value={value} index={1}>
                        {profileUser.posts.map(post => (
                            <Link to={{ pathname: `/post/${post.id}` }} key={post.id}>
                                <OriginalPost>
                                    {post.title.length > 50 ? post.title.substring(0, 50) + '...' : post.title}
                                </OriginalPost>
                            </Link>
                        ))}
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        {profileUser.comments.map(comment => (
                            <Link to={{ pathname: `/posts/comments/${comment.postId}` }}>
                                <OriginalPost
                                    key={comment.id}
                                >{comment.content.length > 50 ? comment.content.substring(0, 50) + '...' : comment.content}
                                </OriginalPost>
                            </Link>
                        ))}
                    </TabPanel>
                </>
            }
        </Container>

    )
}

export default Profile