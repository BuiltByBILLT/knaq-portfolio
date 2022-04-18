import React, { useContext, useEffect, useRef, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { UserContext } from '../contexts/UserContext'
import { useMutation } from 'react-query'
import axios from 'axios'
import UploadPhotoModal from './UploadPhotoModal'

const NewPost = ({ refetchFree, refetchSub }) => {

    const user = useContext(UserContext)
    const [write, setWrite] = useState(false);
    const [postText, setPostText] = useState("");
    const [checked, setChecked] = useState(false);

    const [showPicture, setShowPicture] = useState(false);
    const [cropPictureUrl, setCropPictureUrl] = useState("")


    const URL = "https://api.knaqapp.com/api"
    const { mutate, isLoading, reset } = useMutation(postText => {
        return axios.post(`${URL}/post/publish`,
            {
                text: postText,
                subOnly: checked
            }, {
            headers: { Authorization: `Bearer ${user.token}` }
        })
    }, {
        onSuccess: (data) => {
            console.log(data.data)
            setWrite(``)
            setPostText(``)
            setChecked(false)
            reset()
            refetchFree()
            refetchSub()
            // Refect Feed
        },
    })

    const postHandler = () => {
        mutate(postText)
    }

    const myForm = useRef();
    useEffect(() => {
        if (write) myForm.current.focus()
    }, [write]);


    return (
        <div className="mt-3">
            <UploadPhotoModal show={showPicture} setShow={setShowPicture}
                setCropUrl={setCropPictureUrl} cropType="square"
            />
            <Row className="py-2">
                <Col xs="auto" className="pr-0">
                    <img src={user.avatarUrl || "/images/Logo.png"}
                        style={{ height: "30px", width: "30px", borderRadius: "100%" }}
                    />
                </Col>
                <Col className="my-auto">
                    {write && <Form.Control as="textarea" rows={3} value={postText} ref={myForm}
                        onChange={(e) => setPostText(e.target.value)}
                    ></Form.Control>}
                    {!write && <p onClick={() => setWrite(true)} className="text-muted mb-0">What's Happening?</p>}
                </Col>
            </Row>

            <Row className="mt-3 pb-3 border-bottom">
                <Col xs="auto" >
                    <div style={{ width: "30px" }} />
                </Col>
                <Col xs="auto" className="px-1 my-auto ">
                    <i className="far fa-image fa-lg" style={{ cursor: "pointer" }}
                        onClick={() => setShowPicture(true)}></i>
                </Col>
                <Col xs="auto" className="px-1 my-auto">
                    <i className="fas fa-video fa-lg"></i>
                </Col>

                <Col xs="auto" className="px-1 my-auto ml-auto">
                    <p className="mb-0">Sub-Only</p>
                </Col>
                <Col xs="auto" className="px-1 my-auto">
                    <Form.Check
                        type="switch"
                        id="subonlyCheck"
                        checked={checked}
                        onChange={(e) => setChecked(!checked)}
                    />
                </Col>
                <Col xs="auto" className="border-left">
                    <Button size="sm"
                        disabled={postText.length === 0 || isLoading}
                        onClick={postHandler}
                    >{isLoading ? "Posting..." : "Post"}</Button>
                </Col>
            </Row>
        </div>
    )
}

export default NewPost
