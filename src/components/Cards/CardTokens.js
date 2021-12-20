import useCurrency from '../../hooks/useCurrency'

const CardTokens = ({ tokens }) => {
    const _tokens = tokens / 1e18
    return (
        <div className="text-center bg-gray dark:bg-gray-4 border border-gray-11 dark:border-gray-4 pt-4 pb-4 px-8 rounded-xl mb-5">
            <p className="text-xl leading-none text-gray-10 dark:text-white">
                Your tokens
            </p>
            <p className="mt-5 text-xl leading-none text-gray-10 dark:text-white">
                {useCurrency(_tokens, 0)} DDOT
            </p>
        </div>
    )
}
export default CardTokens
