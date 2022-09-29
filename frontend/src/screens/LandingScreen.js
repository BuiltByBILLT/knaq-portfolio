import React, { useState } from 'react'
import { Alert, Button, Col, Container, Form, Image, InputGroup, Nav, Navbar, Row } from 'react-bootstrap'
import StaticPage from '../components/StaticPage'
import { useMutation } from 'react-query'
import axios from 'axios'
import Logo from '../components/Logo'
import useMediaQuery from '../hooks/useMediaQuery'

const LandingScreen = () => {

    const [email, setEmail] = useState("")
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const isMedium = useMediaQuery("(min-width: 768px)")
    const isLarge = useMediaQuery("(min-width: 992px)")

    const { mutate: waitlistHandler, isLoading } = useMutation((e) => {
        e.preventDefault()
        return axios.post(`/api/manualWaitlist`, { email })
    }, {
        onSuccess: (data) => { setSuccess(true); setError('') },
        onError: (error) => { setError(error.response && error.response.data.message ? error.response.data.message : error.message) }
    })

    return (
        <>
            {true && <div style={{ position: "fixed", top: 0, zIndex: 20 }}>{isLarge ? "Large" : isMedium ? "Medium" : "Small"}</div>}
            <div id="hero" style={{ backgroundImage: "url('images/BG1.jpg')", backgroundSize: "100% 100%", backgroundRepeat: "no-repeat" }}>
                {/* <Navbar> */}

                <Nav className="">
                    <Nav.Link className="ml-3 mt-3" active={false} href="/"><img src="images/Logo-Full.png" style={{ width: "150px" }}></img></Nav.Link>
                    <Nav.Link className="px-1 mt-3 ml-auto" active={false} target="_blank" href="https://discord.gg/H4TAHRGNHR"><img className="social-icons" src="./icons/discord_icon.png" /></Nav.Link>
                    <Nav.Link className="px-1 mt-3 " active={false} target="_blank" href="http://www.instagram.com/knaqapp"><img className="social-icons" src="./icons/instagram_icon.png" /></Nav.Link>
                    <Nav.Link className="px-1 mt-3 mr-3" active={false} target="_blank" href="http://www.twitter.com/knaqapp"><img className="social-icons" src="./icons/twitter_icon.png" /></Nav.Link>
                </Nav>
                {/* </Navbar> */}
                <Container id="waitlist" className="pb-5">
                    <Row className='py-5 px-2 px-lg-4'>
                        <Col xs={12} lg={{ span: 10, offset: 1 }} className="my-auto">
                            <div>
                                <h1 className="mt-5 mx-auto" style={{ textAlign: "center", color: "var(--indigo)", maxWidth: "750px" }}>Creating a deeper connection between fans and creators</h1>
                                <p className="my-4" style={{ textAlign: "center", fontSize: "20px" }}>Earn tokens when you engage with your favorite creators </p>
                                {error && <Alert variant='danger'>{error}</Alert>}
                                {success
                                    ? <Alert variant="success" className="mx-5" style={{}}>Subscribed! Check your email for upcoming updates.</Alert>
                                    : <Form inline onSubmit={waitlistHandler} className="justify-content-center">
                                        <Form.Control placeholder="type your email" type="email"
                                            value={email} onChange={(e) => setEmail(e.target.value)}
                                            style={{
                                                borderRadius: "100px", width: "350px", height: "40px",
                                                textAlign: isLarge ? "left" : "center"
                                            }}
                                            className="px-4 mr-lg-2 indigoForm"
                                        />
                                        <Button variant='secondary' type="submit"
                                            style={{
                                                borderRadius: "100px", height: "40px",
                                                width: isLarge ? "" : "350px"
                                            }}
                                            className="pl-4 pr-2 py-0 mt-lg-0 mt-2"
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

                <Row id="rainbowbar" className="mx-0 my-5" style={{ background: "linear-gradient(to right, #392269, #bf1a2f, #f68721, #39b54a, #007abb)" }}>
                    <Container>
                        <Row className="" style={{ color: "var(--tan)" }}>
                            <Col xs={12} lg={4} className="my-3 d-flex align-items-center justify-content-center">
                                <h6>total users</h6>
                                <img style={{ height: "35px" }} className="svg-icon mx-3" src="icons/users-icon.svg" />
                                <h4>494,117</h4>
                            </Col>
                            <Col xs={12} lg={4} className="my-3 d-flex align-items-center justify-content-center"
                                style={{
                                    borderLeft: isLarge ? "2px solid var(--tan)" : "",
                                    borderRight: isLarge ? "2px solid var(--tan)" : ""
                                }} >
                                <h6>payouts earned</h6>
                                <img style={{ height: "35px" }} className="svg-icon mx-3" src="icons/money-icon.svg" />
                                <h4>131,050</h4>
                            </Col>
                            <Col xs={12} lg={4} className="my-3 d-flex align-items-center justify-content-center">
                                <h6>loyalty earned</h6>
                                <img style={{ height: "35px" }} className="svg-icon mx-3" src="icons/heart-icon.svg" />
                                <h4>120,210</h4>
                            </Col>
                        </Row>
                    </Container>
                </Row>

                <Container id="blue" className='pb-5 px-0' style={{ color: "var(--tan)", position: "relative" }}>
                    <>
                        {isLarge && <div id="arrow layer" className='pb-5' style={{ position: "absolute", width: "100%", height: "100%", zIndex: 10 }}>
                            <Row className="mx-0" style={{ height: "100%" }}>
                                <Col className="px-0" style={{ position: "relative", height: "100%" }}>
                                </Col>
                                <Col className="px-0" style={{ position: "relative", height: "100%" }}>
                                    <img src="./icons/arrow_right_1.svg" style={{ width: "72px", position: 'absolute', left: "-36px", top: "calc(50% - 36px)" }} />
                                </Col>
                                <Col className="px-0" style={{ position: "relative", height: "100%" }}>
                                    <img src="./icons/arrow_right_1.svg" style={{ width: "72px", position: 'absolute', left: "-36px", top: "calc(50% - 36px)" }} />
                                </Col>
                            </Row>
                        </div>}
                        <Row id="rombus layer" className='pb-5 mx-0'>
                            <Col xs={12} lg={4}>
                                <div className="rombus rombus-left rombus-girl">
                                    <div className="pb-5 px-5 rombus-right d-flex flex-column align-items-center justify-content-center" >
                                        <h1 className="mb-3 px-2">Interact & Earn Coins </h1>
                                        <p className="px-2">Interact with your favorite creators to earn tokens</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} lg={4}>
                                <div className="rombus rombus-right rombus-tokens">
                                    <div className="pb-5 px-5 rombus-left d-flex flex-column align-items-center justify-content-center">
                                        <h1 className="mb-3 px-2">Get Tiered Benefits</h1>
                                        <p className="px-2">Accumulate tokens for tiered benefits</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} lg={4}>
                                <div className="rombus rombus-left rombus-meetup">
                                    <div className="pb-5 px-5 rombus-right d-flex flex-column align-items-center justify-content-center">
                                        <h1 className="mb-3 px-2">Redeem for Exclusives</h1>
                                        <p className="px-2">Redeem tokens for exclusive experiences and merch</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </>
                </Container>
            </div >

            <div id="white background">
                <div id="empower">
                    <Container className="mt-5">
                        <Row className='py-4 px-4'>
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

                <div id="quad">
                    <Container>
                        <Row className='' style={{ color: "var(--indigo)" }}>
                            <Col xs={12} md={6} lg={3} className={isMedium ? "px-1 mt-2" : "px-5"}>
                                <div className="py-5 rombus rombus-quad" style={{
                                    background: isLarge ? "linear-gradient(45deg, #f7ece1 75%, #cac4ce 100%)"
                                        : "linear-gradient(45deg, #f7ece1 25%, #cac4ce)"

                                    , height: isLarge ? "350px" : isMedium ? "300px" : ""
                                }}>
                                    <div className="px-3 rombus-quad-inner d-flex flex-column" >
                                        <img src="icons/star_icon.svg" style={{ width: "40px" }} />
                                        <h1 className="my-3">Exclusive Content</h1>
                                        <p>A convenient place for you and your fan community to chat and hang out</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={6} lg={3} className={isMedium ? "px-1 mt-2" : "px-5"}>
                                <div className="py-5 rombus rombus-quad" style={{
                                    background: isLarge ? "linear-gradient(45deg, #f7ece1 50%, #cac4ce 75%)"
                                        : "linear-gradient(45deg, #f7ece1 25%, #cac4ce)"

                                    , height: isLarge ? "350px" : isMedium ? "300px" : ""
                                }}>
                                    <div className="px-3 rombus-quad-inner d-flex flex-column">
                                        <img src="icons/chat_icon.svg" style={{ width: "40px" }} />
                                        <h1 className="my-3">DM's & Group Chats</h1>
                                        <p>A way to show support to creators and value the fans that stay with you</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={6} lg={3} className={isMedium ? "px-1 mt-2" : "px-5"}>
                                <div className="py-5 rombus rombus-quad" style={{
                                    background: isLarge ? "linear-gradient(45deg, #f7ece1 25%, #cac4ce 50%)"
                                        : "linear-gradient(45deg, #f7ece1 25%, #cac4ce)"
                                    , height: isLarge ? "350px" : isMedium ? "300px" : ""
                                }}>
                                    <div className="px-3 rombus-quad-inner d-flex flex-column">
                                        <img src="icons/badge_icon.svg" style={{ width: "40px" }} />
                                        <h1 className="my-3">Badges</h1>
                                        <p>Reward fans for engaging with you on Spotify, Twitch, Discord, and more</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={6} lg={3} className={isMedium ? "px-1 mt-2" : "px-5"}>
                                <div className="py-5 rombus rombus-quad" style={{
                                    background: isLarge ? "linear-gradient(45deg, #f7ece1 0%, #cac4ce 25%)"
                                        : "linear-gradient(45deg, #f7ece1 25%, #cac4ce)"
                                    , height: isLarge ? "350px" : isMedium ? "300px" : ""
                                }}>

                                    <div className="px-3 rombus-quad-inner d-flex flex-column">
                                        <img src="icons/picture_icon.svg" style={{ width: "40px" }} />
                                        <h1 className="my-3">NFTs</h1>
                                        <p>The only platform that implements unqiue watermarks to prevent content leaks</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div id="join">
                    <Container className="py-5">
                        <Row className='py-4 px-4'>
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
            </div>



            <Navbar id='footer' bg="dark" variant="dark" style={{}} className="py-5">
                <Row style={{ width: "100%" }} className="mx-0">
                    <Col xs={12} lg="auto">
                        <Nav className={isLarge ? "" : "flex-column"}>
                            <Nav.Link className="mx-lg-2" active={false} target="_blank" href="/faq">FAQs</Nav.Link>
                            <Nav.Link className="mx-lg-2" active={false} target="_blank" href="/terms">Terms</Nav.Link>
                            <Nav.Link className="mx-lg-2" active={false} target="_blank" href="/privacy">Privacy</Nav.Link>
                        </Nav>
                    </Col>
                    <Col xs={12} lg="auto" className="ml-auto">
                        <Nav className="">
                            <Nav.Link className="px-1" active={false} target="_blank" href="https://discord.gg/H4TAHRGNHR"><img className="social-icons" src="./icons/discord_icon.png" /></Nav.Link>
                            <Nav.Link className="px-1 " active={false} target="_blank" href="http://www.instagram.com/knaqapp"><img className="social-icons" src="./icons/instagram_icon.png" /></Nav.Link>
                            <Nav.Link className="px-1 mr-3" active={false} target="_blank" href="http://www.twitter.com/knaqapp"><img className="social-icons" src="./icons/twitter_icon.png" /></Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Navbar>
        </>
    )
}

export default LandingScreen