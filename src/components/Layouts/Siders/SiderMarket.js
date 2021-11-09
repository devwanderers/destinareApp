import React, { useState } from 'react'

import { Layout } from 'antd'

import { FaHome } from 'react-icons/fa'
import useDarkMode from './../../../hooks/useDarkMode'
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
    const [switchDarkMode] = useDarkMode()
    const handleSelectedMenu = (key) => {
        if (selectedMenu !== key) setselectedMenu(key)
    }

    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={onCollapse}
            className="px-0 h-screen"
        >
            <div className="logo" />
            <div className="flex flex-col justify-between">
                <div className="flex flex-col">
                    {menuItems.map((menuItem, key) => (
                        <div
                            key={`menu-item-${menuItem.name}`}
                            className="flex flex-row items-center relative justify-between mb-5"
                        >
                            <button
                                className={`ant-btn ant-btn-link flex flex-row items-center w-full h-12 ml-3 p-2 border-none${
                                    selectedMenu === key
                                        ? ''
                                        : ' text-white hover:text-white'
                                }`}
                                onClick={() => handleSelectedMenu(key)}
                            >
                                <span
                                    className={` text-2xl${
                                        selectedMenu === key
                                            ? ' border bg-primary bg-opacity-10 text-primary'
                                            : ' border-none text-gray-6'
                                    } border-primary p-2 rounded-lg flex${
                                        !collapsed ? ' mr-4' : ''
                                    }`}
                                >
                                    <menuItem.icon
                                    // height="24"
                                    // width="24"
                                    // style={{ fontSize: '24px' }}
                                    />
                                </span>
                                <span
                                    hidden={collapsed}
                                    className=" text-sm font-medium hover:border-b"
                                >
                                    {menuItem.name}
                                </span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <div
                className="absolute left-0 right-0 mb-4 px-10"
                style={{ bottom: '48px' }}
            >
                <button
                    className="bg-primary text-white font-semibold   border-none text-xl w-full py-2 mx-auto rounded-md hover:ring-blue-2 hover:ring-2 "
                    onClick={switchDarkMode}
                >
                    Dark Mode
                </button>
            </div>
        </Sider>
    )
}

export default SiderMarket
