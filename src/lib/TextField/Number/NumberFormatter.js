import { caretPosition } from '../../index'
import checkValue from '../../Utils/checkValue'

const NumberFormatter = (config) => {
    config = config || {}
    config.prefix = config.prefix || ''
    config.allowNegative = config.allowNegative || false
    if ((config.decimal && typeof config.decimal !== 'number') || (!config.decimal && config.money)) {
        config.decimal = 2
    }

    function maskValue(rawValue) {
        rawValue = checkValue(rawValue) ? rawValue.toString() : rawValue

        let addedDecimal = false

        if (!rawValue) {
            return rawValue
        }

        if (rawValue === '-') {
            return rawValue
        }

        let maskedValue = rawValue.toString()
        const isNegative = config.allowNegative && maskedValue.indexOf('-') > -1
        maskedValue = maskedValue.replace(/[^\d.]/g, '')

        const hasComma = maskedValue.split('.')[1]
        if (config.decimal) {
            if (!hasComma) {
                maskedValue = `${maskedValue}.${'0'.repeat(config.decimal)}`
                addedDecimal = true
            } else {
                const repeatCount = config.decimal - hasComma.length
                if (repeatCount > 0) {
                    maskedValue = `${maskedValue}${'0'.repeat(repeatCount > 0 ? repeatCount : 0)}`
                } else if (repeatCount < 0) {
                    maskedValue = maskedValue.substring(0, maskedValue.length + repeatCount)
                }
            }
        }

        if (isNegative) {
            maskedValue = `-${maskedValue}`
        }

        const activeElement = document.activeElement

        if (activeElement && activeElement.value) {
            const characters = activeElement.value.length
            const caretPos = caretPosition.get(activeElement)
            if (caretPos || addedDecimal) {
                setTimeout(() => {
                    if (document.activeElement === activeElement) {
                        if (caretPos && !addedDecimal) {
                            caretPosition.set(activeElement, caretPos + (activeElement.value.length - characters))
                        } else {
                            caretPosition.set(activeElement, activeElement.value.length - config.decimal - 1)
                        }
                    }
                })
            }
        }

        if (config.money) {
            maskedValue = addThousandDots(maskedValue, config.decimal)
        }

        if (!config.money && config.decimal) {
            maskedValue = maskedValue.replace('.', ',')
        }

        return config.prefix + maskedValue
    }

    function parseValue(maskedValue) {
        if (!checkValue(maskedValue)) {
            return maskedValue
        }

        let parsedValue = maskedValue.toString()

        const isNegative = config.allowNegative && parsedValue.indexOf('-') > -1
        parsedValue = parsedValue.replace(/[^\d]/g, '')

        if (parsedValue === '' && !isNegative) {
            return parsedValue
        }

        if (parsedValue === '' && isNegative) {
            return '-'
        }

        if (parsedValue.length < 3) {
            parsedValue = parsedValue.padStart(config.decimal + 1, '0')
        }

        if (isNegative) {
            parsedValue = `-${parsedValue}`
        }

        parsedValue = parsedValue.substring(0, 15)

        if (!config.decimal && !config.money) {
            parsedValue = parseFloat(parsedValue).toString()
        } else {
            parsedValue = parsedValue.substring(0, parsedValue.length - config.decimal) + '.' + parsedValue.substring(parsedValue.length - config.decimal).padEnd(config.decimal, '0')
            parsedValue = parseFloat(parsedValue).toString()
            parsedValue = parsedValue.split('.')
            if (parsedValue[1]) {
                parsedValue[1] = parsedValue[1].padEnd(config.decimal, '0')
            } else {
                parsedValue.push('0'.repeat(config.decimal))
            }
            parsedValue = parsedValue.join('.')
        }

        return parsedValue
    }

    return {
        mask: maskValue,
        parse: parseValue
    }
}

function addThousandDots(value, decimal) {
    if (value.includes('.')) {
        const split = value.split('.')
        return `${addThousandDots(split[0], decimal)},${split[1].substring(0, decimal)}`
    } else {
        return parseInt(value).toLocaleString('pt-BR')
    }
}

export default NumberFormatter
