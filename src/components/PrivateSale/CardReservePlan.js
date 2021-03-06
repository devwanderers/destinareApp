import React from 'react'
import { BiLock } from 'react-icons/bi'
import { AiFillCheckCircle } from 'react-icons/ai'
import { FaEthereum } from 'react-icons/fa'
import CardContainer from '../Cards/CardContainer'
import ButtonSpinner from '../Buttons/ButtonSpinner'
import { cls } from '../../services/helpers'

const CardReservePlan = ({
    title = '',
    subtitle = '',
    properties = [],
    onClick,
    lock,
    paid,
    loading,
}) => {
    return (
        <CardContainer
            className={cls(`
                px-8 pt-5 xl:pt-12  pb-5 xl:pb-8
            `)}
        >
            {paid && (
                <div className=" absolute right-0 top-0 p-2 text-3xl text-green-500">
                    <AiFillCheckCircle />
                </div>
            )}
            <div className="flex flex-col w-full">
                <div className="md:text-base lg:text-lg xl:text-xl font-bold text-black-2 dark:text-gray-3 leading-none flex gap-1">
                    <FaEthereum className="relative" style={{ top: '-2px' }} />
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
            {!paid ? (
                <ButtonSpinner
                    onClick={onClick}
                    size="normal"
                    className="mt-12 w-full transform"
                    disabled={lock}
                    loading={loading}
                >
                    {lock ? (
                        <div className="flex gap-2 items-center">
                            Buy <BiLock />
                        </div>
                    ) : !loading ? (
                        'Buy'
                    ) : (
                        ''
                    )}
                </ButtonSpinner>
            ) : (
                <ButtonSpinner
                    onClick={onClick}
                    size="normal"
                    className="mt-12 w-full transform"
                >
                    Go to investments
                </ButtonSpinner>
            )}
        </CardContainer>
    )
}

export default CardReservePlan
