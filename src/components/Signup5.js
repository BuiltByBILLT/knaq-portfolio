import React, { useState } from 'react'
import { Alert, Button, Col, Container, Form, ProgressBar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Signup_5 = ({ state, setState }) => {

    const submitHandler = (e) => {
        e.preventDefault()
        setState({ ...state, transition: 6 })
    }

    if (state.transition !== 5) return null
    return (
        <div className="animate__animated animate__fadeInRight">
            <h1 className="text-center mb-4" style={{ fontSize: "72px", }}>Add Profile Photo</h1>
            <Row className="mx-3">
                <Col className="px-1"><ProgressBar variant="success" now={100} key={0} /></Col>
                <Col className="px-1"><ProgressBar variant="success" now={100} key={1} /></Col>
                <Col className="px-1"><ProgressBar variant="success" now={100} key={2} /></Col>
                <Col className="px-1"><ProgressBar variant="success" now={100} key={3} /></Col>
                <Col className="px-1"><ProgressBar variant="success" now={100} key={4} /></Col>
            </Row>


            <Row>
                <Col xs={12} lg={{ span: 6, offset: 3 }}>
                    <p className='text-center my-5' style={{ fontSize: "20px" }}>
                        Add a profile photo so your friends know it's you
                    </p>
                    <div className="text-center">
                        <i className="fas fa-user-circle text-muted" style={{ fontSize: "200px" }}></i>
                    </div>

                    <Button variant="info" block className="mt-5 mb-3" disabled={!state.code}
                        type="button" onClick={submitHandler}>
                        Add Photo
                    </Button>
                    <div className="text-center">
                        <Link className="text-center my-4" onClick={submitHandler}>
                            Skip
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Signup_5
