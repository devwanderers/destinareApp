import React from 'react'
// import { FaCheck } from 'react-icons/fa'
import { Layout, Row, Col } from 'antd'
// import Paragraph from '../../components/DisplayText/Paragraph'
import DefaultNavbar from '../../components/Navbar/DefaultNavbar'
import DefaultFooter from '../../components/Footers/DefaultFooter'
// import PromotionsSection from './Sections/PromotionSections'
// import NextSection from './Sections/NextSection/index'
// import Logo from '../../assets/svg/brand/Logo'
// import LogoIconSVG from './../../assets/svg/brand/LogoIconSVG'
// import LogoText from '../../assets/svg/brand/LogoText'
// import {
//     AdventureSVG,
//     LeftLogoSVG,
//     MembersSVG,
// } from '../../assets/svg/utilities'
import {
    IconBookingSVG,
    IconDefiSVG,
    IconDiscountsSVG,
    IconNFTSVG,
    RoadMapSVG,
} from '../../assets/svg/home'
import homeImages from '../../assets/images/home'
// import useWindowSize from './../../hooks/useWindowSize'
// import { returnValueByScreenWidth } from '../../services/stylesServices'

const { Content } = Layout

// const Card = ({ className, main }) => {
//     const { width } = useWindowSize()
//     return (
//         <div
//             className={`px-10 md:px-5 lg:px-10 py-10 lg:py-10 xl:py-12 bg-white shadow-xl  ${
//                 !main ? 'bg-white' : 'gradient-g'
//             } ${className}`}
//             style={{
//                 height: returnValueByScreenWidth(width, {
//                     base: 'auto',
//                     md: '400px',
//                     lg: '500px',
//                     xl: '535px',
//                 }),
//             }}
//         >
//             <div
//                 className={`flex flex-col h-full justify-between ${
//                     main ? 'text-white' : ''
//                 }`}
//             >
//                 <div className="w-full">
//                     <div className="italic font-extrabold  leading-none text-center text-4xl md:text-4xl xl:text-2.7">
//                         TRAVELER
//                     </div>
//                     <div className=" font-semibold text-xl md:text-base lg:text-lg xl:text-xl text-center">
//                         20$ / Month
//                     </div>
//                     <div className="w-full pb-12 md:pb-0 pt-8 lg:pt-10 xl:pt-12 text-xs lg:text-sm xl:text-base">
//                         <div className="flex flex-row mb-3 break-words">
//                             <span
//                                 className="relative mr-2"
//                                 style={{ top: '3px' }}
//                             >
//                                 <FaCheck />
//                             </span>
//                             <span>Lorem ipsum dolor sit amet. </span>
//                         </div>
//                         <div className="flex flex-row mb-3 break-words">
//                             <span
//                                 className="relative mr-2"
//                                 style={{ top: '3px' }}
//                             >
//                                 <FaCheck />
//                             </span>
//                             <span>Lorem ipsum dolor sit amet. </span>
//                         </div>
//                         <div className="flex flex-row mb-3 break-words">
//                             <span
//                                 className="relative mr-2"
//                                 style={{ top: '3px' }}
//                             >
//                                 <FaCheck />
//                             </span>
//                             <span>Lorem ipsum dolor sit amet. </span>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="w-full flex justify-center">
//                     <Button
//                         shape="round"
//                         className={`  h-auto md:text-base lg:text-lg px-10  ${
//                             !main ? 'text-white bg-yellow-1' : ''
//                         }`}
//                         style={{
//                             paddingTop: '0.6rem',
//                             paddingBottom: '0.6rem',
//                         }}
//                     >
//                         Get Started
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     )
// }

const LandingPage = ({ authenticated, userData, logout }) => {
    // const { width } = useWindowSize()

    return (
        <Layout className="landing-page min-w-minMobileWidth bg-gray-50">
            <DefaultNavbar
                userData={userData}
                logout={logout}
                authenticated={authenticated}
                className="bg-white"
            />
            <Content>
                <section className="bg-gray-12">
                    <Row
                        className="section my-24"
                        justify="center"
                        align="middle"
                    >
                        <Col xs={24} sm={12} className="pr-16">
                            <div className="mb-12">
                                <p className="md:text-2xl lg:text-5xl blue-gradient leading-none font-extrabold mb-4">
                                    Travel mad simple
                                </p>
                                <p className="md:text-2xl lg:text-5xl text-black-3 leading-none font-extrabold">
                                    Discover the world and pay with your crypto
                                </p>
                            </div>
                            <p className="md:text-xl text-black-3 mb-10">
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit, sed diam nonummy nibh euismod
                                tincidunt ut laoreet dolore magna aliquam erat
                                volutpat.
                            </p>
                            <p className="md:text-xl text-black-3">
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit, sed diam nonummy nibh euismod
                                tincidunt ut laoreet dolore magna aliquam erat
                                volutpat.
                            </p>
                        </Col>
                        <Col xs={24} sm={12}>
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
                        <Col xs={24} sm={12} className="pr-5">
                            <div className="mb-10">
                                <p className="md:text-2xl lg:text-6xl text-gray-11 leading-none font-bold mb-4">
                                    DISCOVER
                                </p>
                                <div className="flex items-center space-x-10">
                                    <p className="md:text-2xl lg:text-7xl blue-gradient leading-none font-extrabold mb-4">
                                        +50
                                    </p>
                                    <p className="lg:text-5xl text-gray-11 leading-none font-medium mb-4">
                                        Countries
                                    </p>
                                </div>
                                <div className="flex items-center space-x-10">
                                    <p className="md:text-2xl lg:text-7xl blue-gradient leading-none font-extrabold mb-4">
                                        +350
                                    </p>
                                    <p className="lg:text-5xl text-gray-11 leading-none font-medium mb-4">
                                        Destinations
                                    </p>
                                </div>
                                <p className="md:text-lg text-gray-11 mb-4">
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut laoreet dolore magna
                                    aliquam erat volutpat.
                                </p>
                            </div>
                        </Col>
                        <Col xs={24} sm={12}>
                            <img
                                className="w-full m-auto"
                                src={homeImages.discover}
                            />
                        </Col>
                    </Row>
                </section>
                <section className="bg-light-3">
                    <Row className="section py-16" justify="center" align="top">
                        <Col xs={24} sm={12}>
                            <img
                                className="w-full m-auto"
                                src={homeImages.mision}
                            />
                        </Col>
                        <Col xs={24} sm={12} className="pl-5">
                            <div className="mb-10">
                                <p className="md:text-2xl text-orange-1 font-bold">
                                    Mision
                                </p>
                                <p className="md:text-xl text-black-3">
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut laoreet dolore magna
                                    aliquam erat volutpat.
                                </p>
                            </div>
                            <div>
                                <p className="md:text-2xl text-orange-1 font-bold">
                                    Vision
                                </p>
                                <p className="md:text-xl text-black-3">
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut laoreet dolore magna
                                    aliquam erat volutpat.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>
                <section className="bg-white">
                    <div className="py-16">
                        <Row
                            className="section"
                            justify="center"
                            align="middle"
                        >
                            <Col md={24} className="text-center">
                                <p className="md:text-8xl text-black-3 font-bold leading-tight">
                                    What is{' '}
                                    <span className="blue-gradient font-extrabold">
                                        DDOT
                                    </span>
                                </p>
                                <p className="md:text-2xl text-blue-3 font-bold">
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
                                <p className="md:text-2xl text-black-3 pb-10">
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut laoreet dolore magna
                                    aliquam erat volutpat.
                                </p>
                                <p className="md:text-2xl text-black-3">
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut laoreet dolore magna
                                    aliquam erat volutpat.
                                </p>
                            </Col>
                        </Row>
                        <Row
                            className="section text-center mt-12"
                            justify="center"
                            align="middle"
                        >
                            <Col md={6}>
                                <p className="md:text-2xl text-black-3">
                                    Current price
                                </p>
                                <p className="md:text-2xl text-black-3 font-bold">
                                    $2.36
                                </p>
                            </Col>
                            <Col md={6}>
                                <p className="md:text-2xl text-black-3">
                                    Market cap
                                </p>
                                <p className="md:text-2xl text-black-3 font-bold">
                                    $125,001,156
                                </p>
                            </Col>
                            <Col md={6}>
                                <p className="md:text-2xl text-black-3">
                                    Circulating supply
                                </p>
                                <p className="md:text-2xl text-black-3 font-bold">
                                    52,791,432 AVA
                                </p>
                            </Col>
                            <Col md={6}>
                                <p className="md:text-2xl text-black-3">
                                    Total supply
                                </p>
                                <p className="md:text-2xl text-black-3 font-bold">
                                    52,791,432 AVA
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
                                    <p className="md:text-5xl text-black-3 font-bold leading-tight">
                                        <span className="blue-gradient font-extrabold">
                                            DDOT{' '}
                                        </span>
                                        Benfits
                                    </p>
                                </Col>
                            </Row>
                            <Row
                                className="flex section text-center mt-24"
                                justify="space-between"
                            >
                                <div className="flex">
                                    <div className="w-1/4 mx-5 flex flex-col relative border-r-8 border-b-8 rounded-md border-benefits-yellow-1">
                                        <IconBookingSVG className="w-2/5 left-0 right-0 ml-auto mr-auto -mt-16 absolute" />
                                        <div className="pt-14">
                                            <p className="text-black-2 text-2xl font-bold">
                                                Book Travel
                                            </p>
                                        </div>
                                        <div className="pt-5 pb-10">
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
                                    <div className="w-1/4 mx-5 flex flex-col relative border-r-8 border-b-8 rounded-md border-benefits-blue-1">
                                        <IconDiscountsSVG className="w-2/5 left-0 right-0 ml-auto mr-auto -mt-16 absolute" />
                                        <div className="pt-14">
                                            <p className="text-black-2 text-2xl font-bold">
                                                Unique Descounts
                                            </p>
                                        </div>
                                        <div className="pt-5 pb-10">
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
                                    <div className="w-1/4 mx-5 flex flex-col relative border-r-8 border-b-8 rounded-md border-benefits-green-1">
                                        <IconNFTSVG className="w-2/5 left-0 right-0 ml-auto mr-auto -mt-16 absolute" />
                                        <div className="pt-14">
                                            <p className="text-black-2 text-2xl font-bold">
                                                NFT exclusive
                                            </p>
                                        </div>
                                        <div className="pt-5 pb-10">
                                            <p className="text-black-3 text-xl">
                                                Earn rewards with unique{' '}
                                                <span className="font-bold">
                                                    NFT
                                                </span>{' '}
                                                from real life tokenomics.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-1/4 mx-5 flex flex-col relative border-r-8 border-b-8 rounded-md border-benefits-orange-1">
                                        <IconDefiSVG className="w-2/5 left-0 right-0 ml-auto mr-auto -mt-16 absolute" />
                                        <div className="pt-14">
                                            <p className="text-black-2 text-2xl font-bold">
                                                DeFi
                                            </p>
                                        </div>
                                        <div className="pt-5 pb-10">
                                            <p className="text-black-3 text-xl">
                                                Earn more{' '}
                                                <span className="font-bold">
                                                    tokens
                                                </span>{' '}
                                                with staking and travel more.
                                            </p>
                                        </div>
                                    </div>
                                </div>
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
                                <p className="md:text-5xl text-black-3 font-bold leading-tight">
                                    <span className="blue-gradient font-extrabold">
                                        DDOT{' '}
                                    </span>
                                    usecases
                                </p>
                            </Col>
                        </Row>
                        <Row
                            className="section mt-16"
                            justify="center"
                            align="middle"
                        >
                            <Col xs={24} sm={12}>
                                <img
                                    className="w-full m-auto"
                                    src={homeImages.hand}
                                />
                            </Col>
                            <Col xs={24} sm={12}>
                                <p className="md:text-2xl text-black-3 pb-10">
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut laoreet dolore magna
                                    aliquam erat volutpat.
                                </p>
                                <p className="md:text-2xl text-black-3">
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut laoreet dolore magna
                                    aliquam erat volutpat.
                                </p>
                            </Col>
                        </Row>
                    </div>
                </section>
                <section className="bg-gradient-to-r from-blue-4 to-blue-3 bg-cover">
                    <Row className="section py-16" justify="center" align="top">
                        <Col xs={24} sm={12}>
                            <div className="text-white mb-10">
                                <p className="text-12xl font-black leading-none">
                                    DDOT
                                </p>
                                <p className="text-7xl font-bold leading-none">
                                    Presale
                                </p>
                            </div>
                            <div className="text-white mb-10">
                                <p className="text-5xl">
                                    Token bonus:{' '}
                                    <span className="font-extrabold">30%</span>
                                </p>
                                <p className="text-5xl font-extrabold">
                                    1 DDOT = $0.1 USD
                                </p>
                            </div>
                            <div>
                                <button className="px-10 py-1 text-white shadow-md rounded-full bg-gradient-to-r from-orange-2 to-orange-3">
                                    <span className="font-bold text-4xl">
                                        Buy token
                                    </span>
                                </button>
                            </div>
                        </Col>
                        <Col xs={24} sm={12}>
                            <div className="relative">
                                <img
                                    className="w-full m-auto"
                                    src={homeImages.wallet}
                                />
                                <p className="text-md absolute top-5 right-14 text-white font-bold">
                                    Cambiar el simbolo de las monedas a DDOT
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>
                <section className="bg-white">
                    <section className="bg-city bg-bottom bg-cover bg-no-repeat">
                        <Row
                            className="section py-16"
                            justify="center"
                            align="middle"
                        >
                            <Col md={24}>
                                <p className="text-black-3 text-7xl font-extrabold">
                                    Roadmap
                                </p>
                            </Col>
                            <Col md={24}>
                                <RoadMapSVG />
                            </Col>
                        </Row>
                    </section>
                </section>
                {/* <section className=" relative">
                    <div className="absolute bottom-0 right-0 top-0 md:w-5/12 lg:w-6/12 xl:w-4/12 2xl:w-3/12 pt-20 hidden md:flex justify-end items-end  overflow-hidden">
                        <div className="h-auto" style={{ width: '80%' }}>
                            <LeftLogoSVG />
                        </div>
                    </div>
                    <div className="section3 mx-auto relative">
                        <PromotionsSection />
                    </div>
                    <div className="flex w-full flex-col section py-20 md:pt-16 lg:pt-28 lg:pb-48 xl:pt-32 xl:pb-64 px-4 lg:px-8 xl:px-0 mx-auto relative">
                        <NextSection />
                    </div>
                </section> */}
                {/* <section
                    className="bg-clouds bg-cover bg-center bg-red-50 md:-mt-20 lg:-mt-60 xl:-mt-72 relative"
                    style={{
                        clipPath: returnValueByScreenWidth(width, {
                            md: 'polygon(0 0, 100% 30%, 100% 100%, 0 100%)',
                            lg: 'polygon(0 0, 100% 40%, 100% 100%, 0 100%)',
                            xl: 'polygon(0 0, 100% 45%, 100% 100%, 0 100%)',
                        }),
                    }}
                >
                    <div
                        className="absolute top-0 left-0 right-0 bottom-0 "
                        style={{ backgroundColor: '#211915', opacity: 0.15 }}
                    ></div>
                    <div className="relative flex w-full flex-col section px-4 lg:px-8 xl:px-0 mx-auto pt-32 pb-28 md:pt-44 md:pb-24 xl:pt-64 xl:pb-40">
                        <div className="flex-1 text-center lg:mt-40 text-3xl md:text-4xl lg:text-3.5">
                            <div className="leading-none text-white">
                                <div className="font-montserrat text-center break-words font-medium flex flex-col  items-center tracking-wider shadow-c">
                                    <div className="flex flex-row mb-4 lg:mb-8">
                                        <strong className="mr-2 lg:mr-5">
                                            Join
                                        </strong>
                                        <div className="mr-2 lg:mr-5 h-1.875 md:h-2.25 lg:h-3.5 pb-1">
                                            <LogoText
                                                color="#f9a24f"
                                                width="100%"
                                                height="100%"
                                            />
                                        </div>
                                        <strong>and</strong>
                                    </div>{' '}
                                    <strong>
                                        experience the smart way to travel.
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* <section>
                    <Row>
                        <Col
                            xs={24}
                            sm={12}
                            className="bg-yellow-1 pt-20 pb-32"
                        >
                            <div
                                className=" ml-auto px-8 md:px-12 lg:px-20 xl:px-24"
                                style={{ maxWidth: '625px' }}
                            >
                                <div className="mx-auto md:ml-auto w-4/12 md:w-6/12 lg:w-4/12 xl:w-3/12 mb-4">
                                    <AdventureSVG />
                                </div>
                                <div className="text-white text-2xl lg:text-3xl xl:text-4xl font-semibold text-center md:text-left">
                                    Here is where aventure and technology take
                                    place.
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={12} className="bg-white pt-20 pb-32">
                            <div
                                className="px-8 md:px-12 lg:px-20 xl:px-24"
                                style={{ maxWidth: '625px' }}
                            >
                                <div className="mx-auto md:ml-auto w-4/12 md:w-6/12 lg:w-4/12 xl:w-3/12 mb-4">
                                    <MembersSVG />
                                </div>
                                <div className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-center md:text-left">
                                    A membership with the opportunity to travel
                                    around the world.
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section> */}
                {/* <section className="bg-sunset bg-cover bg-center relative">
                    <div className="absolute top-0 left-0 right-0 bottom-0 gradient-y-down opacity-30"></div>
                    <div className="section relative flex flex-col justify-center mx-auto py-16 md:py-32">
                        <div
                            className="absolute opacity-20 hidden md:block "
                            style={{
                                top: '5%',
                                bottom: '5%',
                                left: 0,
                                right: 0,
                            }}
                        >
                            <LogoIconSVG />
                        </div>
                        <div
                            className="relative text-center text-5xl lg:text-8xl xl:text-10xl font-bebas-nue text-white lg:mb-16 xl:mb-20 pb-8 md:pb-0"
                            style={{ textShadow: '#5b5b5f 2px 3px 10px' }}
                        >
                            <div>PLANS AND MEMBERSHIPS</div>
                        </div>
                        <Row className="relative lg:px-12">
                            <Col xs={24} md={8}>
                                <div
                                    className="mb-4 mx-auto md:mx-0 md:pr-3 lg:pr-4 xl:pr-0"
                                    style={{ maxWidth: '350px' }}
                                >
                                    <Card />
                                </div>
                            </Col>
                            <Col xs={24} md={8}>
                                <div
                                    className="mb-4 mx-auto"
                                    style={{ maxWidth: '350px' }}
                                >
                                    <Card main />
                                </div>
                            </Col>
                            <Col xs={24} md={8}>
                                <div
                                    className="mx-auto md:ml-auto md:mr-0 md:pl-3 lg:pl-4 xl:pl-0"
                                    style={{ maxWidth: '350px' }}
                                >
                                    <Card />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section> */}
                {/* <section>
                    <div className="section px-0 lg:px-25px flex mx-auto py-10 lg:pt-16 lg:pb-20">
                        <div className="flex-1 bg-gray-400 py-10 px-6 md:px-12 lg:px-20 xl:px-24">
                            <div className="font-bebas-nue text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-9">
                                STAY WITH US, GET OUR NEWSLETTER
                            </div>
                            <div className="mb-10">
                                <div className="w-full md:w-6/12 break-words text-xs lg:text-sm xl:text-base">
                                    Become part of our traveling community, be
                                    the first one to know about our launches or
                                    promotions.
                                </div>
                            </div>
                            <Row>
                                <Col xs={14} className="">
                                    <Input.Search
                                        size={returnValueByScreenWidth(width, {
                                            base: 'middle',
                                            lg: 'large',
                                        })}
                                        className="h-auto custom-button-addon-black font-roboto fotn"
                                        placeholder="Email address"
                                        enterButton="Sign up"
                                    />
                                </Col>
                                <Col
                                    xs={10}
                                    className="flex justify-end md:justify-center "
                                >
                                    <div className="text-gray-9 h-8 lg:h-50px pt-1">
                                        <Logo
                                            color="black"
                                            height="100%"
                                            width="100%"
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </section> */}
            </Content>
            <DefaultFooter />
        </Layout>
    )
}

export default LandingPage
