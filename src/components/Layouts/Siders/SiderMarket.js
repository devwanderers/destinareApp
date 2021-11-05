import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import { Layout } from 'antd'
import {
    FaAccessibleIcon,
    FaCheckCircle,
    FaCodepen,
    FaAddressBook,
    FaAccusoft,
} from 'react-icons/fa'
const { Sider } = Layout

const menuItems = [
    {
        icon: FaAccessibleIcon,
        name: 'Test',
    },
    {
        icon: FaCheckCircle,
        name: 'Test 1',
    },
    {
        icon: FaCodepen,
        name: 'Test 2',
    },
    {
        icon: FaAddressBook,
        name: 'Test 3',
    },
    {
        icon: FaAccusoft,
        name: 'Test 4',
    },
]

const SiderMarket = ({ collapsed, onCollapse }) => {
    const [selectedMenu, setselectedMenu] = useState(0)
    const [displayText, setDisplayText] = useState(false)
    const handleSelectedMenu = (key) => {
        if (selectedMenu !== key) setselectedMenu(key)
    }
    useEffect(() => {
        if (!collapsed) {
            setTimeout(() => {
                setDisplayText(collapsed)
            }, 400)
        } else {
            setDisplayText(collapsed)
        }
    }, [collapsed])

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className="logo" />
            <div className="flex flex-col">
                {menuItems.map((menuItem, key) => (
                    <div
                        key={`menu-item-${menuItem.name}`}
                        className="flex flex-row items-center relative justify-between mb-5"
                    >
                        <button
                            className={`ant-btn ant-btn-link flex flex-row items-center w-full h-12 ml-3  p-2 border-none${
                                selectedMenu === key
                                    ? ''
                                    : ' text-white hover:text-white'
                            }`}
                            onClick={() => handleSelectedMenu(key)}
                        >
                            <div
                                className={` text-xl${
                                    selectedMenu === key
                                        ? ' border bg-primary bg-opacity-10 text-primary'
                                        : ' border-none text-white'
                                } border-primary h-11 w-11 rounded-lg flex justify-center items-center${
                                    !collapsed ? ' mr-4' : ''
                                }`}
                            >
                                <menuItem.icon
                                // height="24"
                                // width="24"
                                // style={{ fontSize: '24px' }}
                                />
                            </div>
                            {!displayText && (
                                <span className=" text-sm font-medium hover:border-b">
                                    {menuItem.name}
                                </span>
                            )}
                        </button>
                    </div>
                ))}
            </div>
        </Sider>
    )
}

export default SiderMarket
