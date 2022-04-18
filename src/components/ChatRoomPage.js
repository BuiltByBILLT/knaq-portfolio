import React, { useContext, useEffect, useMemo, useRef } from 'react';
import { Col, Form, Row } from 'react-bootstrap'
import ChatMessages from './ChatMessages'
import { UserContext, UserContextUpdate } from '../contexts/UserContext'
import { useMutation, useQuery } from 'react-query'
import axios from 'axios'
import { useState } from 'react';
import { NavContext } from '../contexts/NavContext';
import ChatTitleBar from './ChatTitleBar';
import ChatSettings from './ChatSettings';

const ChatRoomPage = () => {
    console.log("page")

    const user = useContext(UserContext)
    const nav = useContext(NavContext)
    const [message, setMessage] = useState(""); // Send Message
    const [raw, setRaw] = useState([]); // Passed to ChatMessages
    // const [settings, setSettings] = useState(false); // Passed to ChatTitleBar


    // Fetch Messages -> Passed to ChatMessages
    const { refetch } = useQuery(`chatRoom${nav.chat.id}`, () => {
        const URL = "https://api.knaqapp.com/api"
        return axios.get(URL + `/chat/${nav.chat.id}/messages?start=0`, {
            headers: { Authorization: `Bearer ${user.token}` }
        })
    }, {
        onSuccess: (data) => {
            let newData = data.data.data.reverse()
            if (JSON.stringify(newData) === JSON.stringify(raw)) return
            setRaw([...newData])
            console.log("new chat messages activity")
            // Mark as read
            axios.post(
                `https://api.knaqapp.com/api/chat/${nav.chat.id}/read`,
                { messageId: newData[newData.length - 1] && newData[newData.length - 1].id },
                { headers: { Authorization: `Bearer ${user.token}` } }
            )
        },
        refetchOnWindowFocus: true,
        refetchInterval: 2000,
        notifyOnChangeProps: []
    })

    // Send Message
    const { mutate, isLoading, reset } = useMutation(message => {
        const URL = "https://api.knaqapp.com/api"
        return axios.post(
            `${URL}/chat/${nav.chat.id}/message`,
            { text: message },
            { headers: { Authorization: `Bearer ${user.token}` } }
        )
    }, {
        onSuccess: (data) => {
            console.log(data.data)
            reset()
            refetch()
            setMessage(``)
            myForm.current.focus();
        },
    })

    // Keep input focused and messages scrolled down
    const myScreen = useRef(); // passed to ChatMessages
    const myForm = useRef();
    useEffect(() => {
        if (!nav.chatSettings) myForm.current.focus();
    }, [message, raw]);


    // Handlers
    const submitHandler = (e) => {
        e.preventDefault()
        if (!message || isLoading) return
        mutate(message)
    }

    return (
        <>
            <div className="fadedTop"></div>
            <div ref={myScreen}
                className="hiddenScroll px-2 pb-2 d-flex flex-column align-items-bottom"
                style={{ height: "calc(100vh - 60px - 50px)", overflowY: "scroll", }}
            >
                <ChatMessages raw={raw} myScreen={myScreen} />
            </div>

            <Row className="align-items-center border-top mx-0" style={{ height: "50px" }}>
                <Col xs="auto" className="">
                    <i className="far fa-image" style={{ fontSize: "22px", marginTop: "4px" }}></i>
                </Col>
                <Col className="px-0">
                    <Form onSubmit={submitHandler}>
                        <Form.Control ref={myForm}
                            type="text" placeholder="Type Message"
                            className="py-0 mx-auto text-left"
                            style={{ borderRadius: "25px", height: "30px" }}
                            value={message}
                            disabled={isLoading}
                            onChange={(e) => setMessage(e.target.value)} />
                    </Form>
                </Col>
                <Col xs="auto" className="text-info" style={{ cursor: "pointer" }}
                    onClick={submitHandler}>
                    Send
                </Col>
            </Row>

        </>
    )
}

export default ChatRoomPage
