import React, { useState } from 'react'
// import { Button, Dropdown, Avatar } from 'antd'
import { Button } from 'antd'
import { FaDiscord, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { useHistory } from 'react-router'
import GenericNavBar from './GenericNavbar'
import { MarketPath } from '../../constants/routerConstants'
import useWindowSize from './../../hooks/useWindowSize'
import GenericNavbarMobile from './GenericNavbarMobile'
import MenuNavbar from './MenuNavbar'

const DefaultNavbar = ({ authenticated, userData, logout, ...rest }) => {
    const [showDrawer, setShowDrawer] = useState(false)
    const history = useHistory()
    const { width } = useWindowSize()
    const handleShowDrawer = () => setShowDrawer(!showDrawer)

    let avatarTitle = userData?.firstName
        ? `${userData.firstName
              .substring(0, 1)
              .toUpperCase()}${userData.lastName.substring(0, 1).toUpperCase()}`
        : ''
    let name = `${userData.firstName} ${userData.lastName}`

    if (name.length > 26) name = `${name.substring(0, 25)}...`
    if (avatarTitle === '') avatarTitle = 'U'
    const menu = (
        <MenuNavbar
            isMobile={width <= 768}
            authenticated={authenticated}
            logout={logout}
        />
    )

    return width > 768 ? (
        <GenericNavBar
            {...rest}
            rightSection={
                <React.Fragment>
                    <Button
                        type="link"
                        className="h-full flex-1 btn text-xs lg:text-lg leading-none text-black-3 font-normal hover:text-blue-3 active:text-blue-3 focus:text-blue-3"
                    >
                        <a href="#about">
                            <span>About</span>
                        </a>
                    </Button>
                    <Button
                        type="link"
                        className="h-full flex-1 btn text-xs lg:text-lg leading-none text-black-3 font-normal hover:text-blue-3 active:text-blue-3 focus:text-blue-3"
                    >
                        <a href="#roadmap">
                            <span>Roadmap</span>
                        </a>
                    </Button>
                    <Button
                        type="link"
                        className="h-full flex-1 btn text-xs lg:text-lg leading-none text-black-3 font-normal hover:text-blue-3 active:text-blue-3 focus:text-blue-3"
                    >
                        <a
                            href="https://destinare-app.s3.us-west-2.amazonaws.com/WHITEPAPER-DESTINARE.pdf"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>Whitepaper</span>
                        </a>
                    </Button>
                    <Button
                        onClick={() => history.push(MarketPath)}
                        type="link"
                        className="h-full flex-1 btn text-xs lg:text-lg leading-none text-black-3 font-normal hover:text-blue-3 active:text-blue-3 focus:text-blue-3"
                    >
                        <span>APP</span>
                    </Button>
                    <div className="flex items-center justify-center">
                        <Button
                            href="https://discord.gg/destinare"
                            target="_blank"
                            type="link"
                            className="btn text-2xl leading-none text-blue-3 font-normal hover:text-blue-4 active:text-blue-4 focus:text-blue-4"
                        >
                            <FaDiscord />
                        </Button>
                        <Button
                            href="https://twitter.com/Destinare_io"
                            target="_blank"
                            type="link"
                            className="btn text-2xl leading-none text-blue-3 font-normal hover:text-blue-4 active:text-blue-4 focus:text-blue-4"
                        >
                            <FaTwitter />
                        </Button>
                        <Button
                            href="https://www.facebook.com/Destinareio-104317588754693"
                            target="_blank"
                            type="link"
                            className="btn text-2xl leading-none text-blue-3 font-normal hover:text-blue-4 active:text-blue-4 focus:text-blue-4"
                        >
                            <FaFacebookF />
                        </Button>
                        <Button
                            href="https://www.instagram.com/destinare.io/"
                            target="_blank"
                            type="link"
                            className="btn text-2xl leading-none text-blue-3 font-normal hover:text-blue-4 active:text-blue-4 focus:text-blue-4"
                        >
                            <FaInstagram />
                        </Button>
                    </div>
                    {/* {!authenticated && (
                        <Button
                            type="primary"
                            className="gradient-g focus:bg-red-300 focus:ring-2 ring-red-300 text-lg lg:text-xl leading-none h-full px-8 lg:px-10 tracking-wide rounded-none border-none p-0 m-0"
                            onClick={() => history.push(LoginInPath)}
                        >
                            Log In
                        </Button>
                    )}
                    {authenticated && (
                        <div className="h-full flex justify-center items-center">
                            <Dropdown
                                overlay={menu}
                                trigger={['click']}
                                placement="bottomRight"
                            >
                                <a
                                    className="ant-dropdown-link"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <Avatar
                                        // className="gradient-g"
                                        style={{ backgroundColor: '#f9a24f' }}
                                        size="large"
                                    >
                                        {avatarTitle}
                                    </Avatar>
                                </a>
                            </Dropdown>
                        </div>
                    )} */}
                </React.Fragment>
            }
        />
    ) : (
        <GenericNavbarMobile
            {...rest}
            showDrawer={showDrawer}
            onClickBurguer={handleShowDrawer}
            contentDrawer={
                <React.Fragment>
                    {/* <div className="flex flex-col">
                        <Avatar
                            className="mb-4"
                            style={{ backgroundColor: '#f9a24f' }}
                            size="large"
                        >
                            {avatarTitle}
                        </Avatar>
                        <span className="font-medium mb-3">{name}</span>
                    </div> */}
                    {menu}
                </React.Fragment>
            }
            hideLogo={true}
        />
    )
}

export default DefaultNavbar
