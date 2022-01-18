import React from 'react'
import { Col, Row } from 'antd'
import { FaDiscord, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { ImagotipoSVG } from '../../assets/svg/home'

const DefaultFooter = ({ history, marketPath }) => {
    const year = new Date().getFullYear()
    return (
        <footer className="pt-16 lg:pt-32 pb-12 bg-gray-13">
            <div className="section">
                <Row
                    className="border-b border-gray-300 relative pb-8"
                    justify="center"
                    align="top"
                >
                    <Col md={24} lg={10} className="mb-10 lg:mb-0">
                        <div>
                            <ImagotipoSVG className="w-1/6 relative lg:absolute mr-auto lg:mr-0 ml-auto lg:ml-0 lg:-top-16 lg:left-0" />
                            <p className="text-center lg:text-left text-gray-8 text-lg mt-7">
                                We accept Credit Card, Debit Card and
                                Cryptocurrency payments. (Q3 2022)
                            </p>
                        </div>
                    </Col>
                    <Col
                        xs={24}
                        sm={24}
                        md={8}
                        lg={5}
                        className="text-center lg:text-left py-5 md:py-0"
                    >
                        <div className="mb-3">
                            <p className="text-white text-lg font-bold">
                                Destinare
                            </p>
                        </div>
                        <a href="#about">
                            <p className="text-gray-8 text-lg mb-3">About us</p>
                        </a>
                        <a href="#ddot">
                            <p className="text-gray-8 text-lg cursor-pointer mb-3">
                                DDOT
                            </p>
                        </a>
                        <a href="#roadmap">
                            <p className="text-gray-8 text-lg mb-3">Roadmap</p>
                        </a>
                        <a
                            href="https://destinare-app.s3.us-west-2.amazonaws.com/WHITEPAPER-DESTINARE.pdf"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <p className="text-gray-8 text-lg mb-3">
                                Whitepaper
                            </p>
                        </a>
                    </Col>
                    <Col
                        xs={24}
                        sm={24}
                        md={8}
                        lg={5}
                        className="text-center lg:text-left py-5 md:py-0"
                    >
                        <div className="mb-3">
                            <p className="text-white text-lg font-bold">
                                Support
                            </p>
                        </div>
                        <p className="text-gray-8 text-lg mb-3">
                            Terms & Conditions
                        </p>
                        <p className="text-gray-8 text-lg mb-3">
                            Privacy Policy
                        </p>
                        {/* <p className="text-gray-8 text-lg mb-3">
                            Cookie Policy
                        </p> */}
                    </Col>
                    <Col
                        xs={24}
                        sm={24}
                        md={8}
                        lg={4}
                        className="text-center lg:text-left py-5 md:py-0"
                    >
                        <div className="mb-3">
                            <p className="text-white text-lg font-bold">
                                Community
                            </p>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start space-x-5">
                            <a
                                href="https://discord.gg/destinare"
                                target="_blank"
                                rel="noreferrer"
                                className="text-3xl text-gray-8 hover:text-white"
                            >
                                <FaDiscord />
                            </a>
                            <a
                                href="https://twitter.com/Destinare_io"
                                target="_blank"
                                rel="noreferrer"
                                className="text-2xl text-gray-8 hover:text-white"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="https://www.facebook.com/Destinareio-104317588754693"
                                target="_blank"
                                rel="noreferrer"
                                className="text-2xl text-gray-8 hover:text-white"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="https://www.instagram.com/destinare.io/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-3xl text-gray-8 hover:text-white"
                            >
                                <FaInstagram />
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row className="pt-8">
                    <Col xs={24} className="text-center relative">
                        <a>
                            <p className="text-gray-8 text-lg md:absolute my-5 md:my-0">
                                Privacity & Politic
                            </p>
                        </a>
                        <p className="text-gray-8 text-lg">
                            © Copyright 2017 - {year}. Destinare.io
                        </p>
                    </Col>
                </Row>
            </div>
        </footer>
    )
}

export default DefaultFooter
