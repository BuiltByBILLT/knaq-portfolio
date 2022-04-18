import React, { useState } from 'react'
import { Alert, Button, Col, Container, Form, ProgressBar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Loader from './Loader'
import { useHistory } from 'react-router-dom'

const Signup_5 = ({ state, setState }) => {

    const [success, setSuccess] = useState(true)

    const history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        history.push('/profile')
        // setState({ ...state, transition: 6 })
    }

    if (state.transition !== 6) return null
    return (
        <div className="">
            <h1 className="text-center mb-4" style={{ fontSize: "72px", }}>
                {success ? "Profile Created!" : "Creating Profile..."}
            </h1>

            <p className='text-center mt-5' style={{ fontSize: "20px" }}>
                {success ? "Woohoo!" : "Please do not close or refresh this window"}
            </p>
            <Row>
                <Col xs={12} lg={{ span: 6, offset: 3 }}>
                    {success
                        ? <div className="text-center">
                            <i className="fas fa-check-circle text-success" style={{ fontSize: "200px", margin: "70px" }}></i>
                        </div>
                        : <Loader size={200} />
                    }

                    {success && <Button variant="info" block className="mt-5 mb-3" disabled={!state.code}
                        type="button" onClick={submitHandler}>
                        Go to Profile Page
                    </Button>}
                </Col>
            </Row>
        </div>
    )
}

export default Signup_5
