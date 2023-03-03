import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import StaticPage from '../components/StaticPage'

const PromoScreen = () => {
    return (
        <StaticPage>
            <Row className='m-0 px-4'>
                <Col lg={6}>
                    <Image src="\images\iPhone-Banner-XL.png"
                        className="" style={{ width: "100%" }} />
                </Col>
                <Col lg={6} className="my-auto">
                    <div>
                        <h1 className="mt-5 mt-lg-0" style={{ fontSize: "36px", fontWeight: "500", lineHeight: "1.2" }}>Monetize your content like never before. No minimums or thresholds. Start earning now!</h1>
                        <h2 className="my-5" style={{ fontSize: "24px", fontWeight: "500", lineHeight: "1.8" }} >Creators put a lot of effort into their work. It is time to reward them properly. We help Creators connect with fans while earning to their fullest potential. </h2>
                        <div className="mb-5  d-lg-flex align-items-center justify-content-center text-center ">
                            <p className="my-0 mr-5">Try our open beta:</p>
                            <a href='https://apps.apple.com/us/app/knaq/id1490253270' target="_blank">
                                <Image src="/images/appstorebadgepng.png" />
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </StaticPage>

    )
}

export default PromoScreen