const CardTokens = ({ tokens }) => {
    return (
        <div className="flex-1 flex flex-col justify-between bg-gray dark:bg-gray-4 border border-gray-11 dark:border-gray-4 pt-4 pb-4 px-8 rounded-xl relative mb-5">
            <div className="text-gray-10 dark:text-white flex flex-row justify-between items-center">
                <div className="text-xl leading-none">
                    <span className="text-gray-10 dark:text-white ">
                        Your tokens
                    </span>
                </div>
                <div className="text-2xl leading-none">
                    <span className="text-gray-10 dark:text-white">
                        {tokens}
                    </span>
                </div>
            </div>
        </div>
    )
}
export default CardTokens
