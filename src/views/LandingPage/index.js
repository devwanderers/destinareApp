import React from 'react'
import { Layout, Row, Col } from 'antd'
import { useHistory } from 'react-router'
import { MarketPath } from '../../constants/routerConstants'
import DefaultNavbar from '../../components/Navbar/DefaultNavbar'
import DefaultFooter from '../../components/Footers/DefaultFooter'
import {
    IconBookingSVG,
    IconDefiSVG,
    IconDiscountsSVG,
    IconNFTSVG,
    RoadMapSVG,
} from '../../assets/svg/home'
import homeImages from '../../assets/images/home'

const { Content } = Layout

const LandingPage = ({ authenticated, userData, logout }) => {
    const history = useHistory()
    return (
        <Layout className="landing-page min-w-minMobileWidth bg-gray-50">
            <DefaultNavbar
                userData={userData}
                logout={logout}
                authenticated={authenticated}
                className="bg-white"
            />
            <Content>
                <section id="about" className="bg-gray-12">
                    <Row
                        className="section my-16 lg:my-24"
                        justify="center"
                        align="middle"
                    >
                        <Col
                            xs={24}
                            sm={12}
                            className="mb-10 md:mb-0 px-0 lg:px-5 xl:pr-16 xl:px-0"
                        >
                            <div className="mb-12">
                                <p className="text-3xl lg:text-5xl blue-gradient leading-none font-extrabold mb-4">
                                    Travel made simple
                                </p>
                                <p className="text-3xl lg:text-5xl text-black-3 leading-none font-extrabold">
                                    Discover the world and pay with crypto
                                </p>
                            </div>
                            <p className="text-xl text-black-3 mb-10">
                                We have successfully created a frictionless
                                travel booking experience that incorporates
                                next-generation blockchain technology and
                                tokenized incentives.
                            </p>
                            <p className="text-xl text-black-3">
                                By introducing a cutting edge user experience
                                and multiple cryptocurrencies and traditional
                                payment options alongside benefits tied to our
                                proprietary cryptocurrency DDOT.
                            </p>
                        </Col>
                        <Col xs={24} sm={12} className="px-0 lg:px-5 xl:px-0">
                            <img
                                className="m-auto w-full"
                                src={homeImages.phone}
                            />
                        </Col>
                    </Row>
                </section>
                <section className="bg-gray-13">
                    <Row
                        className="section py-16"
                        justify="center"
                        align="middle"
                    >
                        <Col
                            xs={24}
                            sm={12}
                            className="mb-10 md:mb-0 px-0 lg:px-5 xl:pr-16 xl:px-0"
                        >
                            <p className="text-5xl lg:text-6xl text-gray-11 leading-none font-bold mb-4">
                                DISCOVER
                            </p>
                            <div className="flex items-center space-x-5 lg:space-x-10">
                                <p className="text-4xl lg:text-6xl blue-gradient leading-none font-extrabold mb-4">
                                    +230
                                </p>
                                <p className="text-3xl xl:text-4xl text-gray-11 leading-none font-medium mb-4">
                                    Countries & Islands
                                </p>
                            </div>
                            <div className="flex items-center space-x-5 lg:space-x-10">
                                <p className="text-4xl lg:text-6xl blue-gradient leading-none font-extrabold mb-4">
                                    +900,000
                                </p>
                                <p className="text-3xl xl:text-5xl text-gray-11 leading-none font-medium mb-4">
                                    Destinations
                                </p>
                            </div>
                            <p className="text-lg text-gray-11 mb-4">
                                At Destinare, we connect travelers with one of
                                the world’s largest selections of incredible
                                places to stay, including everything from
                                hotels, apartments, villas, and hostels to
                                5-star luxury resorts.
                            </p>
                        </Col>
                        <Col xs={24} sm={12} className="px-0 lg:px-5 xl:px-0">
                            <img
                                className="w-full m-auto"
                                src={homeImages.discover}
                            />
                        </Col>
                    </Row>
                </section>
                {/* <section className="bg-light-3">
                    <Row className="section py-16" justify="center" align="top">
                        <Col xs={24} sm={12}>
                            <img
                                className="w-full m-auto"
                                src={homeImages.mision}
                            />
                        </Col>
                        <Col xs={24} sm={12} className="pl-5">
                            <div className="mb-10">
                                <p className="text-2xl text-orange-1 font-bold">
                                    Mision
                                </p>
                                <p className="text-xl text-black-3">
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut laoreet dolore magna
                                    aliquam erat volutpat.
                                </p>
                            </div>
                            <div>
                                <p className="text-2xl text-orange-1 font-bold">
                                    Vision
                                </p>
                                <p className="text-xl text-black-3">
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut laoreet dolore magna
                                    aliquam erat volutpat.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section> */}
                <section id="ddot" className="bg-white">
                    <div className="py-16">
                        <Row
                            className="section"
                            justify="center"
                            align="middle"
                        >
                            <Col md={24} className="text-center">
                                <p className="text-5xl md:text-8xl text-black-3 font-bold leading-tight">
                                    What is{' '}
                                    <span className="blue-gradient font-extrabold">
                                        DDOT
                                    </span>
                                </p>
                                <p className="text-xl md:text-2xl text-blue-3 font-bold">
                                    Destinare Descentrilezed Organization Token
                                </p>
                            </Col>
                        </Row>
                        <Row
                            className="section text-center mt-12"
                            justify="center"
                            align="middle"
                        >
                            <Col md={18}>
                                <p className="text-lg md:text-2xl text-black-3 pb-10">
                                    DDOT is our native currency, developed with
                                    PRC-20 makes it highly diverse and easy to
                                    shift interdomain. This diversity enables
                                    compatibility with multiple wallets and
                                    platforms as well.
                                </p>
                                <p className="text-lg md:text-2xl text-black-3">
                                    It is designed to encourage the use of the
                                    Destinare.io platform to enable travelers
                                    from around the world to be rewarded by
                                    consuming our products and take advantage of
                                    the crypto-world functionalities.
                                </p>
                            </Col>
                        </Row>
                        <Row
                            className="section text-center mt-12"
                            justify="center"
                            align="middle"
                        >
                            <Col
                                xs={24}
                                sm={24}
                                md={12}
                                lg={6}
                                className="my-5"
                            >
                                <p className="text-2xl text-black-3">
                                    Current price
                                </p>
                                <p className="text-2xl text-black-3 font-bold">
                                    SOON
                                </p>
                            </Col>
                            <Col
                                xs={24}
                                sm={24}
                                md={12}
                                lg={6}
                                className="my-5"
                            >
                                <p className="text-2xl text-black-3">
                                    Market cap
                                </p>
                                <p className="text-2xl text-black-3 font-bold">
                                    SOON
                                </p>
                            </Col>
                            <Col
                                xs={24}
                                sm={24}
                                md={12}
                                lg={6}
                                className="my-5"
                            >
                                <p className="text-2xl text-black-3">
                                    Circulating supply
                                </p>
                                <p className="text-2xl text-black-3 font-bold">
                                    SOON
                                </p>
                            </Col>
                            <Col
                                xs={24}
                                sm={24}
                                md={12}
                                lg={6}
                                className="my-5"
                            >
                                <p className="text-2xl text-black-3">
                                    Total supply
                                </p>
                                <p className="text-2xl text-black-3 font-bold">
                                    SOON
                                </p>
                            </Col>
                        </Row>
                    </div>
                </section>
                <section className="bg-white">
                    <section className="bg-worldmap bg-top bg-contain bg-no-repeat">
                        <div className="pt-24 pb-16">
                            <Row
                                className="section"
                                justify="center"
                                align="middle"
                            >
                                <Col xs={24} className="text-center">
                                    <p className="text-5xl text-black-3 font-bold leading-tight">
                                        <span className="blue-gradient font-extrabold">
                                            DDOT{' '}
                                        </span>
                                        Benefits
                                    </p>
                                </Col>
                            </Row>
                            <Row
                                className="section text-center"
                                justify="center"
                            >
                                <Col
                                    sm={24}
                                    md={12}
                                    lg={8}
                                    xl={6}
                                    className="h-72 w-full mt-32"
                                >
                                    <div className="h-full mx-5 flex flex-col relative border-r-8 border-b-8 rounded-md border-benefits-yellow-1">
                                        <IconBookingSVG className="w-2/5 left-0 right-0 ml-auto mr-auto -mt-16 absolute" />
                                        <div className="pt-20 lg:pt-14">
                                            <p className="text-black-2 text-2xl font-bold">
                                                Book Travel
                                            </p>
                                        </div>
                                        <div className="py-5 px-8">
                                            <p className="text-black-3 text-xl">
                                                Choose from over
                                                <br />
                                                <span className="font-bold text-3xl">
                                                    +900,000
                                                </span>
                                                <br />
                                                travel places worldwide
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col
                                    sm={24}
                                    md={12}
                                    lg={8}
                                    xl={6}
                                    className="h-72 w-full mt-32"
                                >
                                    <div className="h-full mx-5 flex flex-col relative border-r-8 border-b-8 rounded-md border-benefits-blue-1">
                                        <IconDiscountsSVG className="w-2/5 left-0 right-0 ml-auto mr-auto -mt-16 absolute" />
                                        <div className="pt-20 lg:pt-14">
                                            <p className="text-black-2 text-2xl font-bold">
                                                Unique Discounts
                                            </p>
                                        </div>
                                        <div className="py-5 px-8">
                                            <p className="text-black-3 text-xl">
                                                Get more than
                                                <br />
                                                <span className="font-bold text-3xl">
                                                    5%
                                                </span>{' '}
                                                <span className="font-bold text-xl">
                                                    discount
                                                </span>
                                                <br />
                                                from listed price in the
                                                industry.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col
                                    sm={24}
                                    md={12}
                                    lg={8}
                                    xl={6}
                                    className="h-72 w-full mt-32"
                                >
                                    <div className="h-full mx-5 flex flex-col relative border-r-8 border-b-8 rounded-md border-benefits-green-1">
                                        <IconNFTSVG className="w-2/5 left-0 right-0 ml-auto mr-auto -mt-16 absolute" />
                                        <div className="pt-20 lg:pt-14">
                                            <p className="text-black-2 text-2xl font-bold">
                                                NFT exclusive
                                            </p>
                                        </div>
                                        <div className="py-5 px-8">
                                            <p className="text-black-3 text-xl">
                                                Earn rewards with unique{' '}
                                                <span className="font-bold">
                                                    NFT
                                                </span>{' '}
                                                from real life tokenomics.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col
                                    sm={24}
                                    md={12}
                                    lg={8}
                                    xl={6}
                                    className="h-72 w-full mt-32"
                                >
                                    <div className="h-full mx-5 flex flex-col relative border-r-8 border-b-8 rounded-md border-benefits-orange-1">
                                        <IconDefiSVG className="w-2/5 left-0 right-0 ml-auto mr-auto -mt-16 absolute" />
                                        <div className="pt-20 lg:pt-14">
                                            <p className="text-black-2 text-2xl font-bold">
                                                DeFi
                                            </p>
                                        </div>
                                        <div className="py-5 px-8">
                                            <p className="text-black-3 text-xl">
                                                Earn more{' '}
                                                <span className="font-bold">
                                                    tokens
                                                </span>{' '}
                                                with staking and travel more.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </section>
                </section>
                <section className="bg-white bg-cover">
                    <div className="pt-16">
                        <Row
                            className="section"
                            justify="center"
                            align="middle"
                        >
                            <Col xs={24} className="text-center">
                                <p className="text-5xl text-black-3 font-bold leading-tight">
                                    <span className="blue-gradient font-extrabold">
                                        DDOT{' '}
                                    </span>
                                    Usecases
                                </p>
                            </Col>
                        </Row>
                        <Row
                            className="section mt-16 flex flex-wrap-reverse xl:flex-nowrap"
                            justify="center"
                            align="middle"
                        >
                            <Col md={24} lg={12} className="mt-16 lg:mt-0">
                                <img
                                    className="w-full md:w-4/5 lg:w-full m-auto"
                                    src={homeImages.hand}
                                />
                            </Col>
                            <Col md={24} lg={12}>
                                <p className="text-xl xl:text-2xl text-black-3 pb-10">
                                    The main use for DDOT is to book over
                                    3,100,000 travel products on Destinare.io
                                    covering 90,124 destinations in 230
                                    countries.
                                </p>
                                <p className="text-xl xl:text-2xl text-black-3">
                                    DDOT can also be used to reward for
                                    bookings, get better discounts, access to
                                    DeFi functionalities and more.
                                </p>
                            </Col>
                        </Row>
                    </div>
                </section>
                <section className="bg-gradient-to-r from-blue-4 to-blue-3 bg-cover">
                    <Row
                        className="section py-16"
                        justify="center"
                        align="middle"
                    >
                        <Col sm={24} md={12}>
                            <div className="text-white mb-10">
                                <p className="text-7xl lg:text-10xl xl:text-12xl font-black leading-none">
                                    DDOT
                                </p>
                                <p className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-none">
                                    Pre-sale
                                </p>
                            </div>
                            <div className="text-white mb-10">
                                <p className="text-2xl lg:text-4xl xl:text-5xl">
                                    Total tokens locked{' '}
                                    <span className="font-extrabold">25M</span>
                                </p>
                                <p className="text-2xl lg:text-4xl xl:text-5xl font-extrabold">
                                    Initial DEX price: 25M DDOT / Raised ETH
                                </p>
                            </div>
                            <div>
                                <button
                                    onClick={() => history.push(MarketPath)}
                                    className="px-10 py-1 text-white shadow-md rounded-full bg-gradient-to-r from-orange-2 to-orange-3"
                                >
                                    <span className="font-bold text-2xl lg:text-3xl xl:text-4xl">
                                        View reservations
                                    </span>
                                </button>
                            </div>
                        </Col>
                        <Col sm={24} md={12} className="mt-10 md:mt-0">
                            <div className="relative">
                                <img
                                    className="w-full m-auto"
                                    src={homeImages.wallet}
                                />
                            </div>
                        </Col>
                    </Row>
                </section>
                <section id="roadmap" className="bg-white">
                    <section className="bg-city bg-bottom bg-cover bg-no-repeat">
                        <Row
                            className="section py-16"
                            justify="center"
                            align="middle"
                        >
                            <Col md={24}>
                                <p className="text-black-3 text-6xl md:text-7xl font-extrabold">
                                    Roadmap
                                </p>
                            </Col>
                            <Col md={20}>
                                <RoadMapSVG />
                            </Col>
                        </Row>
                    </section>
                </section>
            </Content>
            <DefaultFooter history={history} marketPath={MarketPath} />
        </Layout>
    )
}

export default LandingPage
