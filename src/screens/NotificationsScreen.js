import axios from 'axios'
import moment from 'moment'
import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col, Image, ListGroup, } from 'react-bootstrap'
import { useQuery } from 'react-query'
import Header from '../components/Header'
import TripleCol from '../components/TripleCol'
import { UserContext, UserContextUpdate } from '../contexts/UserContext'

export const Notifications = () => {


    const user = useContext(UserContext)
    const userUpdate = useContext(UserContextUpdate)
    const [notifications, setNotifications] = useState([])

    const { isLoading, data, refetch } = useQuery('notifications', () => {
        const URL = "https://api.knaqapp.com/api"
        return axios.get(URL + `/activity/notifications?start=0`, {
            headers: { Authorization: `Bearer ${user.token}` }
        })
    }, {
        onSuccess: (data) => {
            let raw = data.data.data.notifications
            console.log(raw)
            setNotifications([...raw])
        },
        refetchOnWindowFocus: true
    })


    return (
        <Container>
            <TripleCol>
                {notifications.map((note, index) => (
                    <Row key={index} className="py-3 my-2 px-3 border-bottom">
                        <Col xs={2}>
                            <Image src={note.originalUser.avatarUrl || "/images/Logo-BW.png"} roundedCircle style={{ width: "100%" }} />
                        </Col>
                        <Col xs={8}>
                            <Row>
                                <Col className="pl-0">
                                    <strong>@{note.originalUser.displayName} </strong>
                                    {note.type === "follow" && <span>started following you</span>}
                                    {note.type === 'like' && <span>liked your post</span>}
                                    {note.type === 'comment' && <span>commented on your post:</span>}
                                    {note.type === 'tip' && <span>sent you a tip</span>}
                                    {note.type === 'subscribe' && <span>subscribed for ${note.subMonth} months</span>}
                                    {note.type === 'referral' && <span>Claim your referral bonus!</span>}
                                    {note.text}
                                </Col>
                                <Col xs="auto" className="ml-auto p-0">
                                    <span className="text-muted text-right">{moment(note.updatedAt).fromNow()}</span>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={2} className="text-center my-auto">
                            {note.type === "follow" && <i className="fas fa-2x fa-user-plus text-info"></i>}
                            {note.type === 'like' && <Image src={"/images/post.jpg"} style={{ width: "100%" }} />}
                            {note.type === 'comment' && <Image src={"/images/post.jpg"} style={{ width: "100%" }} />}
                            {note.type === 'tip' && <p className="text=success">+{note.currency === "usd" ? "$" : ""}{note.price}</p>}
                            {note.type === 'subscribe' && <p className="text=success">+{note.currency === "usd" ? "$" : ""}{note.price}</p>}
                            {note.type === 'referral' && ""}
                        </Col>
                    </Row>
                ))}
            </TripleCol>
        </Container >
    )
}
export default Notifications