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
                        <h1 className="mt-5 mt-lg-0" style={{ fontSize: "36px", fontWeight: "500", lineHeight: "1.2" }}>Knaq: Aligning Creators and their Communities</h1>
                        <h2 className="my-5" style={{ fontSize: "24px", fontWeight: "500", lineHeight: "1.8" }} >For Creators: Connect and rewaed your most loyal fanbase </h2>
                        <h2 className="my-5" style={{ fontSize: "24px", fontWeight: "500", lineHeight: "1.8" }} >For Fans: Interact-To-Earn exclusive experiences with your favorite Creators </h2>
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