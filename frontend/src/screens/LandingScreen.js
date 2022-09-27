import React, { useState } from 'react'
import { Alert, Button, Col, Container, Form, Image, InputGroup, Nav, Navbar, Row } from 'react-bootstrap'
import StaticPage from '../components/StaticPage'
import { useMutation } from 'react-query'
import axios from 'axios'
import Logo from '../components/Logo'

const LandingScreen = () => {

    const [email, setEmail] = useState("")
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const { mutate: waitlistHandler, isLoading } = useMutation((e) => {
        e.preventDefault()
        return axios.post(`/api/manualWaitlist`, { email })
    }, {
        onSuccess: (data) => { setSuccess(true); setError('') },
        onError: (error) => { setError(error.response && error.response.data.message ? error.response.data.message : error.message) }
    })

    return (
        <>
            <div id="hero" style={{ backgroundImage: "url('images/BG1.jpg')", backgroundSize: "100% 100%", backgroundRepeat: "no-repeat" }}>
                {/* <Navbar> */}

                <Nav className="">
                    <Nav.Link className="ml-3 mt-3" active={false} href="/landing"><img src="images/Logo-Full.png" style={{ width: "150px" }}></img></Nav.Link>
                    <Nav.Link className="px-1 mt-3 ml-auto" active={false} target="_blank" href="https://discord.gg/H4TAHRGNHR"><img className="social-icons" src="./icons/discord_icon.png" /></Nav.Link>
                    <Nav.Link className="px-1 mt-3 " active={false} target="_blank" href="http://www.instagram.com/knaqapp"><img className="social-icons" src="./icons/instagram_icon.png" /></Nav.Link>
                    <Nav.Link className="px-1 mt-3 mr-3" active={false} target="_blank" href="http://www.twitter.com/knaqapp"><img className="social-icons" src="./icons/twitter_icon.png" /></Nav.Link>
                </Nav>
                {/* </Navbar> */}
                <Container className="pb-5">
                    <Row className='py-5 px-4'>
                        <Col lg={{ span: 10, offset: 1 }} className="my-auto">
                            <div>
                                <h1 className="mt-5 mx-auto" style={{ textAlign: "center", color: "var(--indigo)", maxWidth: "750px" }}>Creating a deeper connection between fans and creators</h1>
                                <p className="my-4" style={{ textAlign: "center", fontSize: "20px" }}>Earn tokens when you engage with your favorite creators </p>
                                {error && <Alert variant='danger'>{error}</Alert>}
                                {success
                                    ? <Alert variant="success" className="mx-5" style={{}}>Subscribed! Check your email for upcoming updates.</Alert>
                                    : <Form inline onSubmit={waitlistHandler} className="justify-content-center">
                                        <Form.Control placeholder="type your email" type="email"
                                            value={email} onChange={(e) => setEmail(e.target.value)}
                                            style={{ borderRadius: "100px", width: "350px", height: "40px" }}
                                            className="px-4 mr-2 indigoForm"
                                        />
                                        <Button variant='secondary' type="submit"
                                            style={{ borderRadius: "100px", height: "40px" }}
                                            className="pl-4 pr-2 py-0"
                                        >
                                            join waitlist
                                            <img src="/icons/arrow_right_1.svg" style={{ height: "70%" }} className="pl-3" />
                                        </Button>
                                    </Form>}
                                {/* </div> */}
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Row className="mx-0 my-5" style={{ background: "linear-gradient(to right, #392269, #bf1a2f, #f68721, #39b54a, #007abb)" }}>
                    <Container>
                        <Row className="" style={{}}>
                            <Col className="my-3 d-flex align-items-center justify-content-end">
                                <h6 style={{ color: "var(--tan)", }}>total users</h6>
                                <img style={{ height: "35px" }} className="svg-icon mx-3" src="icons/users-icon.svg" />
                                <h4 style={{ color: "var(--tan)", }}>494,117</h4>
                            </Col>
                            <Col className="my-3 d-flex align-items-center justify-content-center"
                                style={{ borderLeft: "2px solid var(--tan)", borderRight: "2px solid var(--tan)" }} >
                                <h6 style={{ color: "var(--tan)", }}>payouts earned</h6>
                                <img style={{ height: "35px" }} className="svg-icon mx-3" src="icons/money-icon.svg" />
                                <h4 style={{ color: "var(--tan)", }}>131,050</h4>
                            </Col>
                            <Col className="my-3 d-flex align-items-center justify-content-start">
                                <h6 style={{ color: "var(--tan)", }}>loyalty earned</h6>
                                <img style={{ height: "35px" }} className="svg-icon mx-3" src="icons/heart-icon.svg" />
                                <h4 style={{ color: "var(--tan)", }}>120,210</h4>
                            </Col>
                        </Row>
                    </Container>
                </Row>

                <Container className='pb-5 px-0' style={{ color: "var(--tan)", position: "relative" }}>
                    <>
                        <div className='pb-5' style={{ position: "absolute", width: "100%", height: "100%", zIndex: 10 }}>
                            <Row style={{ height: "100%" }}>
                                <Col className="px-0" style={{ position: "relative", height: "100%" }}>
                                </Col>
                                <Col className="px-0" style={{ position: "relative", height: "100%" }}>
                                    <img src="./icons/arrow_right_1.svg" style={{ width: "72px", position: 'absolute', left: "-36px", top: "calc(50% - 36px)" }} />
                                </Col>
                                <Col className="px-0" style={{ position: "relative", height: "100%" }}>
                                    <img src="./icons/arrow_right_1.svg" style={{ width: "72px", position: 'absolute', left: "-36px", top: "calc(50% - 36px)" }} />
                                </Col>
                            </Row>
                        </div>
                        <Row className='pb-5'>
                            <Col style={{}}>
                                <div className="rombus rombus-left rombus-girl">
                                    <div style={{ height: "100%" }} className="pb-5 px-5 rombus-right d-flex flex-column align-items-center justify-content-center" >
                                        <h1 className="mb-3 px-2" style={{ fontSize: "34px" }}>Interact & Earn Coins </h1>
                                        <p className="px-2" style={{ fontSize: "18px" }}>Interact with your favorite creators to earn tokens</p>
                                    </div>
                                </div>
                            </Col>
                            <Col style={{}}>
                                <div className="rombus rombus-right rombus-tokens">
                                    <div style={{ height: "100%" }} className="pb-5 px-5 rombus-left d-flex flex-column align-items-center justify-content-center">
                                        <h1 className="mb-3 px-2" style={{ fontSize: "34px" }}>Get Tiered Benefits</h1>
                                        <p className="px-2" style={{ fontSize: "18px" }}>Accumulate tokens for tiered benefits</p>
                                    </div>
                                </div>
                            </Col>
                            <Col style={{}}>
                                <div className="rombus rombus-left rombus-meetup">
                                    <div style={{ height: "100%" }} className="pb-5 px-5 rombus-right d-flex flex-column align-items-center justify-content-center">
                                        <h1 className="mb-3 px-2" style={{ fontSize: "34px" }}>Redeem for Exclusives</h1>
                                        <p className="px-2" style={{ fontSize: "18px" }}>Redeem tokens for exclusive experiences and merch</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </>
                </Container>
            </div >

            <div id="empower">
                <Container className="mt-5">
                    <Row className='py-5 px-4'>
                        <Col lg={{ span: 10, offset: 1 }} className="my-auto">
                            <div>
                                <hr style={{ width: "50%", height: "5px", background: "var(--indigo)" }} />
                                <h1 className="mt-3 mx-auto" style={{ textAlign: "center", color: "var(--indigo)", maxWidth: "750px" }}>Empower your community with seamless social tools</h1>
                                <p className="my-4" style={{ textAlign: "center", fontSize: "20px" }}>Interact with your fans on a whole new level though easy to access channels where they can post commentary, fan art, and hot takes.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div id="join">
                <Container className="py-5">
                    <Row className='py-5 px-4'>
                        <Col lg={{ span: 10, offset: 1 }} className="my-auto">
                            <div>
                                <hr style={{ width: "50%", height: "5px", background: "var(--indigo)" }} />
                                <h1 className="mt-3 mx-auto" style={{ textAlign: "center", color: "var(--indigo)" }}>Join thousands of Creators and start connecting on KNAQ now</h1>
                                <hr style={{ width: "50%", height: "5px", background: "var(--indigo)" }} />
                                <p className="mt-4" style={{ textAlign: "center", fontSize: "20px" }}>It's time to showcase your personality now.</p>
                                <p className="mb-4" style={{ textAlign: "center", fontSize: "20px" }}>Create a KNAQ account in just a few minutes.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>



            <Navbar bg="dark" variant="dark" style={{}} className="py-5">
                <Nav>
                    <Nav.Link className="ml-3" active={false} target="_blank" href="/faq">FAQs</Nav.Link>
                    <Nav.Link className="ml-3" active={false} target="_blank" href="/terms">Terms</Nav.Link>
                    <Nav.Link className="ml-3" active={false} target="_blank" href="/privacy">Privacy</Nav.Link>

                </Nav>
                <Nav className="ml-auto ">
                    <Nav.Link className="px-1" active={false} target="_blank" href="https://discord.gg/H4TAHRGNHR"><img className="social-icons" src="./icons/discord_icon.png" /></Nav.Link>
                    <Nav.Link className="px-1 " active={false} target="_blank" href="http://www.instagram.com/knaqapp"><img className="social-icons" src="./icons/instagram_icon.png" /></Nav.Link>
                    <Nav.Link className="px-1 mr-3" active={false} target="_blank" href="http://www.twitter.com/knaqapp"><img className="social-icons" src="./icons/twitter_icon.png" /></Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}

export default LandingScreen