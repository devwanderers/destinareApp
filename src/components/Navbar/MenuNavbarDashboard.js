import React from 'react'
import { Menu } from 'antd'
import { useHistory } from 'react-router'
import {
    HomePath,
    MarketPath,
    StakingView,
} from '../../constants/routerConstants'
import {
    FaHome,
    FaDiscord,
    FaFacebookF,
    FaInstagram,
    FaTwitter,
} from 'react-icons/fa'
import { MdDashboard } from 'react-icons/md'
import { GiWarPick } from 'react-icons/gi'

const { SubMenu } = Menu
const destinareMenu = [
    {
        icon: FaHome,
        onClick: HomePath,
        name: 'Home',
        group: false,
    },
    {
        icon: MdDashboard,
        onClick: MarketPath,
        name: 'Dashboard',
        group: false,
    },
    {
        icon: GiWarPick,
        name: 'Earn',
        group: true,
        items: [
            {
                onClick: StakingView,
                name: 'Staking with lock',
            },
        ],
    },
]

// const _menu = [destinareMenu.home, destinareMenu.dashboard, destinareMenu.earn]

const MenuNavbarDashboard = () => {
    const history = useHistory()

    const socialMedia = (
        <div className="flex items-center lg:justify-start space-x-4 pl-5 mt-10">
            <a
                href="https://discord.com/invite/kSQutYY3"
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-blue-3 dark:text-white hover:text-blue-4 active:text-blue-4 focus:text-blue-4"
            >
                <FaDiscord />
            </a>
            <a
                href="https://twitter.com/Destinare_io"
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-blue-3 dark:text-white hover:text-blue-4 active:text-blue-4 focus:text-blue-4"
            >
                <FaTwitter />
            </a>
            <a
                href="https://www.facebook.com/Destinareio-104317588754693"
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-blue-3 dark:text-white hover:text-blue-4 active:text-blue-4 focus:text-blue-4"
            >
                <FaFacebookF />
            </a>
            <a
                href="https://www.instagram.com/destinare.io/"
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-blue-3 dark:text-white hover:text-blue-4 active:text-blue-4 focus:text-blue-4"
            >
                <FaInstagram />
            </a>
        </div>
    )

    return (
        <Menu
            mode="inline"
            className="border-r-0 -mx-24px mt-10 dark:bg-blue-1 dark:text-white"
        >
            {destinareMenu.map((menu) => {
                return menu.group ? (
                    <SubMenu
                        key={`menu-item-${menu.name}`}
                        icon={<menu.icon />}
                        className="dark:bg-blue-1  active:bg-blue-1"
                        title={menu.name}
                    >
                        {menu.items.map((menu) => {
                            return (
                                <Menu.Item
                                    key={`menu-item-${menu.name}`}
                                    className="dark:bg-blue-1  active:bg-blue-1"
                                >
                                    <div
                                        className="flex flex-row items-center"
                                        onClick={() =>
                                            history.push(menu.onClick)
                                        }
                                    >
                                        {menu.name}
                                    </div>
                                </Menu.Item>
                            )
                        })}
                    </SubMenu>
                ) : (
                    <Menu.Item
                        icon={<menu.icon />}
                        key={`menu-item-${menu.name}`}
                        className="dark:bg-blue-1  active:bg-blue-1"
                    >
                        <div
                            className="flex flex-row items-center"
                            onClick={() => history.push(menu.onClick)}
                        >
                            {menu.name}
                        </div>
                    </Menu.Item>
                )
            })}
            {socialMedia}
        </Menu>
    )
}

export default MenuNavbarDashboard
