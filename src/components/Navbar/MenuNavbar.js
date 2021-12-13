import React from 'react'
import { Menu } from 'antd'
import { useHistory } from 'react-router'
import { MarketPath } from '../../constants/routerConstants'
import { FaDiscord, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
// import windowOpen from './../../services/windowOpen'

// const menusOptions = {
//     travel: {
//         icon: IoMdAirplane,
//         onClick: () =>
//             windowOpen(
//                 'https://members.tripvixia.com/membership/signup?invite=0e3cb515-2949-4e1a-bb83-fd7fe4a5b251&referraltype=3'
//             ),
//         name: 'Travel Platform',
//     },
//     whitePaper: {
//         icon: BsBook,
//         onClick: () => {},
//         name: 'WHITE PAPER',
//     },
// }

const destinareMenu = {
    about: {
        onClick: '',
        name: 'About',
    },
    team: {
        onClick: '',
        name: 'Pre-sale',
    },
    roadMap: {
        onClick: '',
        name: 'Roadmap',
    },
    whitepaper: {
        onClick: '',
        name: 'Whitepaper',
    },
    presale: {
        onClick: MarketPath,
        name: 'APP',
    },
}

// const menus = [menusOptions.travel]
// const menusMobile = [menusOptions.whitePaper, menusOptions.travel]
const _menu = [
    destinareMenu.about,
    destinareMenu.team,
    destinareMenu.roadMap,
    destinareMenu.whitepaper,
    destinareMenu.presale,
]

const MenuNavbar = ({ authenticated, isMobile, logout }) => {
    const history = useHistory()
    // const _menu = !isMobile ? menus : menusMobile
    // let logOutItem =
    //     !authenticated && isMobile ? (
    //         <Menu.Item className="">
    //             <div
    //                 className="flex flex-row items-center"
    //                 onClick={() => history.push(LoginInPath)}
    //             >
    //                 <AiOutlineLogin className="mr-2 relative -mt-1" /> Log in
    //             </div>
    //         </Menu.Item>
    //     ) : (
    //         <Menu.Item className="">
    //             <div
    //                 className="flex flex-row items-center"
    //                 onClick={() => logout()}
    //             >
    //                 <AiOutlineLogout className="mr-2 relative -mt-1" /> Log out
    //             </div>
    //         </Menu.Item>
    //     )
    // if (!isMobile && !authenticated) {
    //     logOutItem = null
    // }

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
        <Menu className="border-r-0 -mx-24px mt-10">
            {/* <Menu.Divider className="flex md:hidden" /> */}
            {_menu.map((menu) => {
                if (!authenticated && menu.name === 'Travel Platform')
                    return null
                return (
                    <Menu.Item
                        key={`menu-item-${menu.name}`}
                        className="bg-white"
                    >
                        <div
                            className="flex flex-row items-center"
                            onClick={() => history.push(menu.onClick)}
                        >
                            {/* <menu.icon className="mr-2 relative -mt-1" />{' '} */}
                            {menu.name}
                        </div>
                    </Menu.Item>
                )
            })}
            {/* <Menu.Divider className="flex" /> */}
            {/* {logOutItem} */}
            {socialMedia}
        </Menu>
    )
}

export default MenuNavbar
