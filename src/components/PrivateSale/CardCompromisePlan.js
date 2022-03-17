import React from 'react'
import { Spin } from 'antd'
import { FaEthereum } from 'react-icons/fa'
import CardContainer from '../Cards/CardContainer'
import ButtonSpinner from '../Buttons/ButtonSpinner'
import { cls } from '../../services/helpers'

const CardCompromisePlan = ({
    title = '',
    subtitle = '',
    properties = [],
    onClick,
    verified,
}) => {
    return (
        <CardContainer
            className={cls(`
                px-8 pt-5 xl:pt-12  pb-5 xl:pb-8
                ${!verified && ''}
            `)}
        >
            {!verified ? (
                <div className="flex flex-col justify-center items-center h-64">
                    <div className="text-center">
                        <div>
                            <Spin size="normal" />
                        </div>
                        <span className="ml-2 text-xl text-gray-10 dark:text-gray-3">
                            Verifying
                        </span>
                    </div>
                    <p className="text-center mt-8 text-gray-10 dark:text-gray-3">
                        Thanks for applying, stay tunned on discord once the
                        verification proccess is finished it would be announced
                        there.
                    </p>
                </div>
            ) : (
                <React.Fragment>
                    <div className="flex flex-col w-full">
                        <div className="md:text-base lg:text-lg xl:text-xl font-bold text-black-2 dark:text-gray-3 leading-none flex gap-1">
                            <FaEthereum
                                className="relative"
                                style={{ top: '-2px' }}
                            />
                            {subtitle}
                        </div>
                        <div className="mt-6 md:text-base lg:text-lg font-medium leading-none text-primary mb-2">
                            {title}
                        </div>
                        <div className="space-y-5 mt-6">
                            {properties.map(([titlePropertie, value]) => {
                                return (
                                    <div
                                        key={`card-${title}-${titlePropertie}`}
                                        className="flex flex-row items-center gap-8"
                                    >
                                        <div className="md:text-xs lg:text-sm text-gray-5 dark:text-gray-2 leading-none font-medium w-12  text-right">
                                            {titlePropertie}
                                        </div>
                                        <div className="lg:text-xs xl:text-base font-bold text-black-2 dark:text-gray-6 leading-none">
                                            {value}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <ButtonSpinner
                        onClick={onClick}
                        size="normal"
                        className="mt-12 w-full transform"
                    >
                        Compromise
                    </ButtonSpinner>
                </React.Fragment>
            )}
        </CardContainer>
    )
}

export default CardCompromisePlan
