import React from 'react'
import { Modal } from 'react-bootstrap'
import Post from './Post'

const PostModal = ({ show, setShow, post }) => {
    const handleClose = () => setShow(false);

    return (
        <Modal show={show} onHide={handleClose} centered size="lg">
            <Modal.Body>
                <Post post={post} />
            </Modal.Body>
        </Modal>
    )
}

export default PostModal