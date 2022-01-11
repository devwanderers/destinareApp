import useCurrency from '../../hooks/useCurrency'

const CardTokens = ({ tokens }) => {
    const _tokens = tokens / 1e18
    return (
        <div className="text-center bg-gray dark:bg-gray-4 border border-gray-11 dark:border-gray-4 pt-4 pb-4 px-8 rounded-xl mb-5">
            <p className="text-xl leading-none text-gray-10 dark:text-white">
                Your tokens DDOT
            </p>
            <p className="mt-5 text-xl leading-none text-gray-10 dark:text-white">
                {isNaN(_tokens) ? 0 : useCurrency(_tokens, 0)}
            </p>
        </div>
    )
}
export default CardTokens
