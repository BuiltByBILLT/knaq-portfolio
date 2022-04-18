import React, { useContext, useEffect, useRef, useState } from 'react'
import { Container, Row, Col, Image, Modal, } from 'react-bootstrap'
import { useQuery } from 'react-query'
import Header from '../components/Header'
import TripleCol from '../components/TripleCol'
import axios from 'axios'
import { UserContext, UserContextUpdate } from '../contexts/UserContext'
import PostMedia from '../components/PostMedia'
import Post from '../components/Post'

import '../hiddenScroll.css'
import PostModal from '../components/PostModal'

export const Explore = () => {

    const user = useContext(UserContext)
    const userUpdate = useContext(UserContextUpdate)

    const [posts, setPosts] = useState([])
    const [filtered, setFiltered] = useState([])
    const [start, setStart] = useState(0)

    //Modal
    const [show, setShow] = useState(false);
    const [modalPost, setModalPost] = useState({})


    const URL = "https://api.knaqapp.com/api"
    const { isLoading, data, refetch } = useQuery('exploreFeed', () => {
        return axios.get(URL + `/post/posts?start=${start}`, {
            headers: { Authorization: `Bearer ${user.token}` }
        })
    }, {
        onSuccess: (data) => {
            let raw = data.data.data.posts
            setPosts([...posts, ...raw])
            setFiltered(posts.filter(post => post.images))
            setStart(start + 1)
        }
    })

    useEffect(() => {
        // setFiltered(posts.filter(post => post.images))
        if (filtered.length < 9) refetch()
    }, [posts])


    // Scroll to Bottom
    const listInnerRef = useRef();
    const onScroll = () => {
        if (listInnerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
            if (scrollTop + clientHeight === scrollHeight) {
                console.log("reached bottom");
                // setStart(start)
                refetch()
            }
        }
    };

    return (
        <Container >
            <PostModal show={show} setShow={setShow} post={modalPost} />
            <TripleCol>
                <Row onScroll={onScroll} ref={listInnerRef} className="hiddenScroll" >
                    {filtered.map((post) => (
                        <Col key={post.id} lg={4} className="p-2">
                            <div onClick={() => { setShow(true);; setModalPost(post) }}>
                                <PostMedia post={post} />
                            </div>
                        </Col>
                    ))}
                </Row>
            </TripleCol>


        </Container >
    )
}
export default Explore