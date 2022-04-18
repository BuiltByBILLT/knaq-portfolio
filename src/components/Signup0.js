import React, { useState } from 'react'
import { Alert, Button, Col, Container, Form, ProgressBar, Row } from 'react-bootstrap'

const Signup_0 = ({ state, setState }) => {

    const [error, setError] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        setState({ ...state, transition: 1 })
    }

    if (state.transition !== 0) return null
    return (
        <div className="">
            <h1 className="text-center mb-4" style={{ fontSize: "72px", }}>Enter Email and Phone</h1>
            <Row className="mx-3">
                <Col className="px-1"><ProgressBar variant="success" now={100} key={0} /></Col>
                <Col className="px-1"><ProgressBar variant="success" now={0} key={1} /></Col>
                <Col className="px-1"><ProgressBar variant="success" now={0} key={2} /></Col>
                <Col className="px-1"><ProgressBar variant="success" now={0} key={3} /></Col>
                <Col className="px-1"><ProgressBar variant="success" now={0} key={4} /></Col>
            </Row>

            <p className='text-center my-5' style={{ fontSize: "20px" }}>Please enter your email and phone number</p>

            <Row>
                <Col xs={12} lg={{ span: 6, offset: 3 }}>
                    {error ? <Alert variant='danger'>{error}</Alert> : <div style={{}} />}
                    <Form onSubmit={submitHandler} className="">
                        <Form.Group controlId='email'>
                            <Form.Control type='email' placeholder='Email' value={state.email} required
                                onChange={(e) => setState({ ...state, email: e.target.value })}>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId='phone'>
                            <Form.Control type='phone' placeholder='Phone Number' value={state.phone} required
                                onChange={(e) => setState({ ...state, phone: e.target.value })}>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="info" block className="mt-4 mb-3" disabled={!state.phone || !state.email}
                            type="submit">
                            Next
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Signup_0
