import React from 'react'
import { Col, Row } from 'antd'
import { FaDiscord, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { ImagotipoSVG } from '../../assets/svg/home'

const DefaultFooter = (props) => {
    return (
        <footer className="pt-32 pb-12 bg-gray-13">
            <div className="section">
                <Row
                    className="border-b border-gray-300 relative pb-8"
                    justify="center"
                    align="top"
                >
                    <Col md={10}>
                        <div>
                            <ImagotipoSVG class="w-1/6 absolute -top-16 left-0" />
                            <p className="text-gray-8 text-lg mt-7">
                                We accept Credit Card, Debit Card and
                                Cryptocurrency payments.
                            </p>
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="mb-3">
                            <p className="text-white text-lg font-bold">
                                Destinare
                            </p>
                        </div>
                        <p className="text-gray-8 text-lg mb-3">About us</p>
                        <p className="text-gray-8 text-lg mb-3">DDOT</p>
                        <p className="text-gray-8 text-lg mb-3">Team</p>
                        <p className="text-gray-8 text-lg mb-3">Road map</p>
                        <p className="text-gray-8 text-lg mb-3">Whitepaper</p>
                    </Col>
                    <Col md={5}>
                        <div className="mb-3">
                            <p className="text-white text-lg font-bold">
                                Support
                            </p>
                        </div>
                        <p className="text-gray-8 text-lg mb-3">Help Center</p>
                        <p className="text-gray-8 text-lg mb-3">My Trip</p>
                        <p className="text-gray-8 text-lg mb-3">
                            Terms & Conditions
                        </p>
                        <p className="text-gray-8 text-lg mb-3">
                            Privacy Policy
                        </p>
                        <p className="text-gray-8 text-lg mb-3">
                            Cookie Policy
                        </p>
                    </Col>
                    <Col md={4}>
                        <div className="mb-3">
                            <p className="text-white text-lg font-bold">
                                Community
                            </p>
                        </div>
                        <div className="flex justify-start">
                            <div className="space-x-4 flex flex-row text-2xl text-gray-8">
                                <a>
                                    <span>
                                        <FaDiscord />
                                    </span>
                                </a>
                                <a>
                                    <span>
                                        <FaTwitter />
                                    </span>
                                </a>
                                <a>
                                    <span>
                                        <FaFacebookF />
                                    </span>
                                </a>
                                <a>
                                    <span>
                                        <FaInstagram />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="pt-8">
                    <Col md={24} className="text-center relative">
                        <a>
                            <p className="text-gray-8 text-lg absolute">
                                Privacity & Politic
                            </p>
                        </a>
                        <p className="text-gray-8 text-lg">
                            © Copyright 2017 - 2021. Destinare.io
                        </p>
                    </Col>
                </Row>
            </div>
        </footer>
    )
}

export default DefaultFooter
