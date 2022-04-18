import React, { useContext, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useQuery } from 'react-query'
import NewPost from '../components/NewPost'
import Post from '../components/Post'
import TripleCol from '../components/TripleCol'
import axios from 'axios'
import { UserContext, UserContextUpdate } from '../contexts/UserContext'
import { offlinePost } from '../util/offlineData'

export const Home = () => {

    const user = useContext(UserContext)
    const userUpdate = useContext(UserContextUpdate)

    const [posts, setPosts] = useState([])
    const [feed, setFeed] = useState([]);
    const [free, setFree] = useState([]);
    const [paid, setPaid] = useState([]);

    const { isLoading, data, refetch } = useQuery('myHomeFeed', () => {
        // console.log(user.id)
        return axios.get(`https://api.knaqapp.com/api/post/posts?userId=${user.id}&isMyFeed=true`, {
            // return axios.get(`/post/posts`, {
            headers: { Authorization: `Bearer ${user.token}` }
        })
    }, {
        onSuccess: (data) => {
            let raw = data.data.data.posts
            setFeed([...raw])
        }
    })

    const { refetch: refetchFree } = useQuery(`userFree`, () => {
        return axios.get(`https://api.knaqapp.com/api/post/posts?otherId=${user.id}&isFree=true`, {
            headers: { Authorization: `Bearer ${user.token}` }
        })
    }, {
        onSuccess: (data) => {
            let raw = data.data.data.posts
            setFree([...raw])
        },
    })

    const { refetch: refetchSub } = useQuery(`userSub`, () => {
        return axios.get(`https://api.knaqapp.com/api/post/posts?otherId=${user.id}&isFree=false`, {
            headers: { Authorization: `Bearer ${user.token}` }
        })
    }, {
        onSuccess: (data) => {
            let raw = data.data.data.posts
            setPaid([...raw])
        },
    })

    useEffect(() => {
        setPosts([...feed, ...free, ...paid].sort((a, b) => {
            let aDate = new Date(a.updatedAt)
            let bDate = new Date(b.updatedAt)
            return bDate - aDate
        }))
    }, [feed, free, paid])

    return (
        <Container>
            <TripleCol>
                <NewPost refetchFree={refetchFree} refetchSub={refetchSub} />
                {posts.map(post => <Post key={post.id} post={post} />)}
                <h3 className="text-center text-muted my-5">No More Posts</h3>
            </TripleCol>
        </Container >
    )
}

export default Home