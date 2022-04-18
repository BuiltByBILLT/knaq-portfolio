import React, { useContext } from 'react'
import { Container, Row, Col, Nav, Navbar, Form, Button, InputGroup, Image, Dropdown } from 'react-bootstrap'
import { NavContext, NavContextUpdate } from '../contexts/NavContext'


const RoomTypeSelect = () => {


    const nav = useContext(NavContext)
    const updateNav = useContext(NavContextUpdate)

    const switchHandler = () => {
        updateNav({ type: "ROOM_TYPE", payload: nav.roomType === "CHAT" ? "VOICE" : "CHAT" })
    }

    return (
        <Dropdown >
            <Dropdown.Toggle variant="secondary" className="p-2 text-left"
                style={{ fontWeight: 800, fontSize: "16px", textTransform: "capitalize", width: "160px" }}>
                {nav.roomType === "CHAT" ? "Chat Rooms" : "Voice Rooms"}{" "}
                <i className="fas fa-caret-down"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu className="p-0">
                <Dropdown.Item className="p-2"
                    style={{ fontWeight: 800, fontSize: "16px", width: "160px" }}
                    onClick={switchHandler}>
                    {nav.roomType !== "CHAT" ? "Chat Rooms" : "Voice Rooms"}
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default RoomTypeSelect
