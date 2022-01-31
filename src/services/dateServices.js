export const getDay = (initDate) => {
    const _initDate = new Date(initDate)
    const today = new Date()
    // today.setDate(today.getDate() + 1)
    // if (_initDate.getDate() === today.getDate()) return 1

    const miliseconds = today - _initDate
    let day = new Date(miliseconds)
    day = day.getDate()

    if (day > 30) return 30
    return day
}
