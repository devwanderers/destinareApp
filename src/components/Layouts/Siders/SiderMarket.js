import React, { useState } from 'react'

import { Layout } from 'antd'

import DarkModeSwitch from '../../DarkModeSwitch'
import { FaHome } from 'react-icons/fa'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

const { Sider } = Layout

const menuItems = [
    {
        icon: FaHome,
        name: 'Test',
    },
    {
        icon: FaHome,
        name: 'Test',
    },
]

const SiderMarket = ({ collapsed, onCollapse }) => {
    const [selectedMenu, setselectedMenu] = useState(0)
    const handleSelectedMenu = (key) => {
        if (selectedMenu !== key) setselectedMenu(key)
    }

    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={onCollapse}
            className="px-0 h-screen bg-light-1 dark:bg-gray-9 relative"
            trigger={null}
        >
            <div className="logo" />
            <div className="flex flex-col justify-between">
                <div className="flex flex-col pl-4">
                    {menuItems.map((menuItem, key) => (
                        <div
                            key={`menu-item-${menuItem.name}`}
                            className={`flex${
                                !collapsed
                                    ? ' flex-row items-center justify-between'
                                    : ''
                            }  relative  mb-5`}
                        >
                            <a
                                href="#"
                                className={`flex flex-row items-center w-full h-12 border-none ${
                                    selectedMenu === key
                                        ? 'text-gray-10 hover:text-gray-10 dark:text-primary dark:hover:text-primary'
                                        : 'text-gray-8 hover:text-gray-9 dark:text-gray-6 dark:hover:text-white'
                                    // selectedMenu === key
                                    //     ? 'text-gray-10 dark:text-primary hover:text-gray-10 dark:hover:text-primary'
                                    //     : 'text-gray-8 dark:text-gray-6 hover:text-gray-2 dark:hover:text-white'
                                }`}
                                onClick={(e) => {
                                    e.preventDefault()
                                    handleSelectedMenu(key)
                                }}
                            >
                                <span
                                    className={`text-2xl${
                                        selectedMenu === key
                                            ? ' border bg-opacity-10'
                                            : ' border-none '
                                    } border-black-1 dark:border-primary p-2 rounded-lg flex${
                                        !collapsed ? ' mr-4' : ''
                                    }`}
                                >
                                    <menuItem.icon className="" />
                                </span>
                                <span
                                    hidden={collapsed}
                                    className="text-sm font-medium hover:border-b"
                                >
                                    {menuItem.name}
                                </span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div
                className="absolute left-0 right-0 mb-4 flex justify-center"
                style={{ bottom: '48px' }}
            >
                <DarkModeSwitch />
            </div>
            <div
                onClick={onCollapse}
                className="absolute left-0 right-0 bottom-0 bg-gray-200 dark:bg-gray-2 flex justify-center items-center cursor-pointer dark:text-white"
                style={{ height: '45px' }}
            >
                {collapsed ? <IoIosArrowBack /> : <IoIosArrowForward />}
            </div>
        </Sider>
    )
}

export default SiderMarket
