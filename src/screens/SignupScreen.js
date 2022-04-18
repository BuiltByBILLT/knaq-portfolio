import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Signup_0 from '../components/Signup0'
import Signup_1 from '../components/Signup1'
import Signup_2 from '../components/Signup2'
import Signup_3 from '../components/Signup3'
import Signup_4 from '../components/Signup4'
import Signup_5 from '../components/Signup5'
import Signup_6 from '../components/Signup6'

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
                    <Signup_0 state={state} setState={setState} />
                    <Signup_1 state={state} setState={setState} />
                    <Signup_2 state={state} setState={setState} />
                    <Signup_3 state={state} setState={setState} />
                    <Signup_4 state={state} setState={setState} />
                    <Signup_5 state={state} setState={setState} />
                    <Signup_6 state={state} setState={setState} />
                </Col>
            </Row>

        </Container >
    )
}

export default SignupScreen
