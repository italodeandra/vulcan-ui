import { caretPosition } from '../../index'

const NumberFormatter = (config) => {
    config = config || {}

    function maskValue(rawValue) {
        if (!rawValue) {
            return rawValue
        }

        let maskedValue = rawValue.toString()

        const activeElement = document.activeElement

        if (activeElement && activeElement.value) {
            const characters = activeElement.value.length
            const caretPos = caretPosition.get(activeElement)
            if (caretPos) {
                setTimeout(() => {
                    if (document.activeElement === activeElement) {
                        caretPosition.set(activeElement, caretPos + (activeElement.value.length - characters))
                    }
                })
            }
        }

        if (config.money) {
            maskedValue = addThousandDots(maskedValue)
        }

        if (!config.money && config.decimal) {
            maskedValue = maskedValue.replace('.', ',')
        }

        return maskedValue
    }

    function parseValue(maskedValue) {
        let parsedValue = maskedValue.toString()

        parsedValue = parsedValue.replace(/[^\d]/g, '')

        if (parsedValue.length < 3) {
            if (parsedValue) {
                parsedValue = parseFloat(parsedValue).toString()
            }
            return parsedValue
        }

        parsedValue = parsedValue.substring(0, 15)

        if (!config.decimal && !config.money) {
            parsedValue = parseFloat(parsedValue).toString()
        } else {
            parsedValue = parsedValue.substring(0, parsedValue.length - 2) + '.' + parsedValue.substring(parsedValue.length - 2).padEnd(2, '0')
            parsedValue = parseFloat(parsedValue).toString()
            parsedValue = parsedValue.split('.')
            if (parsedValue[1]) {
                parsedValue[1] = parsedValue[1].padEnd(2, '0')
            } else {
                parsedValue.push('00')
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

function addThousandDots(value) {
    if (value.includes('.')) {
        const splitted = value.split('.')

        return `${addThousandDots(splitted[0])},${splitted[1]}`
    } else {
        return parseInt(value).toLocaleString('pt-BR')
    }
}

export default NumberFormatter
