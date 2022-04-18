import React, { useContext, useState } from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import PostGraphicOverlay from './PostGraphicOverlay'
import { UserContext, UserContextUpdate } from '../contexts/UserContext'
import PostSubscribeOverlay from './PostSubscribeOverlay'

const PostMedia = ({ post }) => {

    const user = useContext(UserContext)
    const userUpdate = useContext(UserContextUpdate)

    return (
        <div style={{ position: "relative", backgroundColor: "#EEE", paddingTop: "100%" }}>
            {user.nsfwFilter && post.nsfw && <PostGraphicOverlay />}
            {post.subOnly && post.isSubbed && <PostSubscribeOverlay post={post} />}
            <div className='d-flex justify-content-center align-items-center font-weight-bold'
                style={{ width: "100%", height: "100%", position: "absolute", top: "0", overflow: "hidden" }}>

                {(post.images && post.images[0])
                    ? <img src={post.images && post.images[0]} style={{ width: "100%" }}></img >
                    : (post.video && post.videoScreenshot)
                        ? <Image src={post.videoScreenshot} style={{ width: "100%", objectFit: "contain" }} fluid />
                        : (post.text)
                            ? <div style={{ whiteSpace: "pre-wrap", fontSize: "36px", }}>{post.text}</div>
                            : null
                }
            </div>
        </div>
    )
}

export default PostMedia