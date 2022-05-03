import axios from 'axios'
import { useMutation } from 'react-query'
import React, { useState } from 'react'
import { Alert, Button, Col, Form, ProgressBar, Row } from 'react-bootstrap'

const Signup0 = ({ state, setState }) => {

    const [error, setError] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        // mutate()
        setState({ ...state, transition: 1 })
    }

    const { mutate, isLoading } = useMutation(() => {
        return axios.post('https://api.knaqapp.com/api/auth/code_request', { phoneNumber: state.phoneNumber })
    }, {
        onSuccess: (data) => {
            console.log(data.data)
            setState({ ...state, transition: 1 })
            setError('')
        },
        onError: (error) => {
            setError(error.response && error.response.data.message
                ? error.response.data.message : error.message)
        }
    })

    if (state.transition !== 0) return null
    return (
        <div className="">
            <h1 className="text-center mb-4" style={{ fontSize: "72px", }}>Enter Phone Number</h1>
            <Row className="mx-3">
                <Col className="px-1"><ProgressBar variant="success" now={100} key={0} /></Col>
                <Col className="px-1"><ProgressBar variant="success" now={0} key={1} /></Col>
                <Col className="px-1"><ProgressBar variant="success" now={0} key={2} /></Col>
                <Col className="px-1"><ProgressBar variant="success" now={0} key={3} /></Col>
                <Col className="px-1"><ProgressBar variant="success" now={0} key={4} /></Col>
            </Row>

            <p className='text-center mt-5 mb-3' style={{ fontSize: "20px" }}>Please enter your phone number to recieve an authentication code</p>

            <Row>
                <Col xs={12} lg={{ span: 6, offset: 3 }}>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={submitHandler} className="">
                        <Form.Group controlId='phone'>
                            <Form.Control type='phone' placeholder='Phone Number' value={state.phoneNumber} required
                                onChange={(e) => setState({ ...state, phoneNumber: e.target.value })}>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="info" block className="mt-4 mb-3" disabled={!state.phoneNumber}
                            type="submit">
                            Next
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Signup0
