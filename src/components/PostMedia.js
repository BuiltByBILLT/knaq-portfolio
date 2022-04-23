import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Pagination, Navigation } from 'swiper'

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/navigation/navigation.min.css'


const PostMedia = ({ post }) => {

    if (post.images?.length === 1) return (
        <img src={post.images && post.images[0]} style={{ width: "100%" }}></img >
    )

    if (post.images?.length > 1) return (
        <Swiper
            style={{ height: "calc(100% + 40px)" }}
            pagination navigation
            modules={[Pagination, Navigation]}
        >
            {post.images.map(image => (
                <SwiperSlide><img src={image} style={{ width: "100%" }}></img ></SwiperSlide>
            ))}
        </Swiper>
    )

    if (post.video && post.videoScreenshot) return (
        <video controls>
            <source src={post.video} type="video/webm"></source>
        </video>
    )

    if (post.text) return (
        <div className='d-flex align-items-center justify-content-center text-center'
            style={{
                height: "100%", width: "100%", backgroundColor: "#EEE", overflow: "hidden",
                whiteSpace: "pre-wrap", fontSize: "36px", fontWeight: "bold"
            }}>
            {post.text}</div>
    )

    return null
}

export default PostMedia