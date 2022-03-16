import React from 'react'
import { Menu } from 'antd'
import { useHistory } from 'react-router'
import { DashboardPath } from '../../constants/routerConstants'
import { FaDiscord, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const destinareMenu = [
    {
        route: false,
        target_blank: false,
        onClick: '#about',
        name: 'About',
    },
    {
        route: false,
        target_blank: false,
        onClick: '#roadmap',
        name: 'Roadmap',
    },
    {
        route: false,
        target_blank: true,
        onClick:
            'https://destinare-app.s3.us-west-2.amazonaws.com/WHITEPAPER-DESTINARE.pdf',
        name: 'Whitepaper',
    },
    {
        route: true,
        target_blank: false,
        onClick: DashboardPath,
        name: 'APP',
    },
]

const MenuNavbar = ({ authenticated, isMobile, logout }) => {
    const history = useHistory()

    const socialMedia = (
        <div className="flex items-center lg:justify-start space-x-4 pl-5 pt-2">
            <a
                href="https://discord.com/invite/kSQutYY3"
                target="_blank"
                rel="noreferrer"
                className="text-xl text-blue-3 hover:text-blue-4 active:text-blue-4 focus:text-blue-4"
            >
                <FaDiscord />
            </a>
            <a
                href="https://twitter.com/Destinare_io"
                target="_blank"
                rel="noreferrer"
                className="text-xl text-blue-3 hover:text-blue-4 active:text-blue-4 focus:text-blue-4"
            >
                <FaTwitter />
            </a>
            <a
                href="https://www.facebook.com/Destinareio-104317588754693"
                target="_blank"
                rel="noreferrer"
                className="text-xl text-blue-3 hover:text-blue-4 active:text-blue-4 focus:text-blue-4"
            >
                <FaFacebookF />
            </a>
            <a
                href="https://www.instagram.com/destinare.io/"
                target="_blank"
                rel="noreferrer"
                className="text-xl text-blue-3 hover:text-blue-4 active:text-blue-4 focus:text-blue-4"
            >
                <FaInstagram />
            </a>
        </div>
    )

    return (
        <Menu className="border-r-0 mt-10">
            {destinareMenu.map((menu) => {
                if (!authenticated && menu.name === 'Travel Platform')
                    return null
                return (
                    <Menu.Item key={`menu-item-${menu.name}`}>
                        {menu.route ? (
                            <div
                                className="flex flex-row items-center"
                                onClick={() => history.push(menu.onClick)}
                            >
                                {menu.name}
                            </div>
                        ) : (
                            <div className="flex flex-row items-center">
                                <a
                                    href={menu.onClick}
                                    target={menu.target_blank && '_blank'}
                                >
                                    {menu.name}
                                </a>
                            </div>
                        )}
                    </Menu.Item>
                )
            })}
            {socialMedia}
        </Menu>
    )
}

export default MenuNavbar
