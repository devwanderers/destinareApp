import React from 'react'
import { Drawer } from 'antd'
import { DestinareLogoColorSVG } from '../../assets/svg/brand/index'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useHistory } from 'react-router'
import { HomePath } from '../../constants/routerConstants'
import { AiOutlineClose } from 'react-icons/ai'

const GenericNavbarMobile = ({
    className = '',
    contentDrawer,
    showDrawer,
    onClickBurguer,
    hideLogo,
    drawerStyle = {
        backgroundColor: '#fafafa',
        padding: '0px',
    },
}) => {
    const history = useHistory()
    return (
        <React.Fragment>
            <Drawer
                placement="left"
                closable={false}
                onClose={onClickBurguer}
                visible={showDrawer}
                key="left"
                bodyStyle={drawerStyle}
            >
                <div className="px-6 py-4">
                    <button
                        className="text-xl text-black-2 dark:text-white"
                        onClick={onClickBurguer}
                    >
                        <AiOutlineClose />
                    </button>
                </div>
                <div className="mt-4">{contentDrawer}</div>
            </Drawer>
            <header
                className={`h-12 md:h-20 z-10 px-2 lg:px-0 py-2 m-0  w-full ${className}`}
            >
                <div className="section relative flex justify-center px-2 md:px-8 h-full">
                    <a className="h-full absolute left-0 top-0 bottom-0">
                        <div
                            onClick={onClickBurguer}
                            className="flex items-center justify-center text-2xl h-full px-4 cursor-pointer transform active:scale-125 text-black-2 dark:text-white"
                        >
                            <GiHamburgerMenu height="100%" />
                        </div>
                    </a>

                    {!hideLogo && (
                        <a
                            className="h-full w-full md:w-48"
                            onClick={() => history.push(HomePath)}
                        >
                            <div className="flex justify-center h-full cursor-pointer text-gray-9">
                                <DestinareLogoColorSVG />
                            </div>
                        </a>
                    )}
                </div>
            </header>
        </React.Fragment>
    )
}

export default GenericNavbarMobile
