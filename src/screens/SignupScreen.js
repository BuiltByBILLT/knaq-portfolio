import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Signup0 from '../components/Signup0'
import Signup1 from '../components/Signup1'
import Signup2 from '../components/Signup2'
import Signup3 from '../components/Signup3'
import Signup4 from '../components/Signup4'
import Signup5 from '../components/Signup5'
import Signup6 from '../components/Signup6'

const SignupScreen = () => {


    // const [username, setUsername] = useState('')
    // const [phone, setPhone] = useState('')
    // const [transition, setTransition] = useState(0)
    const [state, setState] = useState({
        transition: 0,
        email: "",
        phone: "",
        username: "",
        code: "",
        newPassword: "",
        confirmPassword: "",
        referral: "",
    })


    return (
        <Container className="my-5 py-xs-3 py-lg-5 ">
            <Row>
                <Col xs={12} xl={{ span: 10, offset: 1 }}>
                    <Signup0 state={state} setState={setState} />
                    <Signup1 state={state} setState={setState} />
                    <Signup2 state={state} setState={setState} />
                    <Signup3 state={state} setState={setState} />
                    <Signup4 state={state} setState={setState} />
                    <Signup5 state={state} setState={setState} />
                    <Signup6 state={state} setState={setState} />
                </Col>
            </Row>

        </Container >
    )
}

export default SignupScreen
