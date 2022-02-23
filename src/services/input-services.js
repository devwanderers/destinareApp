/* eslint-disable prefer-regex-literals */
import { escapeRegExp } from './helpers'

export const onlyNumberKey = (evt) => {
    const ASCIICode = evt.which ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        evt.preventDefault()
}

const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`)

export const validOnlyNumbers = (value) => {
    if (value === '' || inputRegex.test(escapeRegExp(value))) {
        return true
    }
    return false
}

export const validMinValue = (minValue) => (value) => {
    if (value === '' || (value && parseFloat(value) >= minValue)) {
        return true
    }
    return false
}

export const validMaxValue = (maxValue) => (value) => {
    if (value === '' || (value && parseFloat(value) <= maxValue)) {
        return true
    }
    return false
}
