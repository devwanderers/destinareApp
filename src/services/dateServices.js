export const getDifferenceInDays = (initDate) => {
    // const _initDate = new Date(initDate)
    const today = new Date()
    // today.setDate(today.getDate() + 30)
    // console.log({ today, initDate })
    // if (_initDate.getDate() === today.getDate()) return 1

    // console.log(today.getTime(), _initDate.getTime())
    const differenceInTime = today - initDate
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24))

    // console.log(differenceInDays)
    return differenceInDays
}
