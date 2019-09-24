import { caretPosition } from '../../index';

var NumberFormatter = function NumberFormatter(config) {
  config = config || {};
  config.prefix = config.prefix || '';
  config.allowNegative = config.allowNegative || false;

  if (config.decimal && typeof config.decimal !== 'number' || !config.decimal && config.money) {
    config.decimal = 2;
  }

  function maskValue(rawValue) {
    var addedDecimal = false;

    if (!rawValue) {
      return rawValue;
    }

    if (config.decimal && rawValue.length < 3) {
      rawValue = "".concat(rawValue, ".").concat('0'.repeat(config.decimal));
      addedDecimal = true;
    }

    var maskedValue = rawValue.toString();
    var isNegative = config.allowNegative && maskedValue.indexOf('-') > -1;
    maskedValue = maskedValue.replace(/[^\d.]/g, '');

    if (isNegative) {
      maskedValue = "-".concat(maskedValue);
    }

    var activeElement = document.activeElement;

    if (activeElement && activeElement.value) {
      var characters = activeElement.value.length;
      var caretPos = caretPosition.get(activeElement);

      if (caretPos || addedDecimal) {
        setTimeout(function () {
          if (document.activeElement === activeElement) {
            if (caretPos && !addedDecimal) {
              caretPosition.set(activeElement, caretPos + (activeElement.value.length - characters));
            } else {
              caretPosition.set(activeElement, activeElement.value.length - config.decimal - 1);
            }
          }
        });
      }
    }

    if (config.money) {
      maskedValue = addThousandDots(maskedValue);
    }

    if (!config.money && config.decimal) {
      maskedValue = maskedValue.replace('.', ',');
    }

    return config.prefix + maskedValue;
  }

  function parseValue(maskedValue) {
    var parsedValue = maskedValue.toString();
    var isNegative = config.allowNegative && parsedValue.indexOf('-') > -1;
    parsedValue = parsedValue.replace(/[^\d]/g, '');

    if (isNegative) {
      parsedValue = "-".concat(parsedValue);
    }

    if (parsedValue.length < 3) {
      if (parsedValue) {
        parsedValue = parseFloat(parsedValue).toString();
      }

      return parsedValue;
    }

    parsedValue = parsedValue.substring(0, 15);

    if (!config.decimal && !config.money) {
      parsedValue = parseFloat(parsedValue).toString();
    } else {
      parsedValue = parsedValue.substring(0, parsedValue.length - config.decimal) + '.' + parsedValue.substring(parsedValue.length - config.decimal).padEnd(config.decimal, '0');
      parsedValue = parseFloat(parsedValue).toString();
      parsedValue = parsedValue.split('.');

      if (parsedValue[1]) {
        parsedValue[1] = parsedValue[1].padEnd(config.decimal, '0');
      } else {
        parsedValue.push('0'.repeat(config.decimal));
      }

      parsedValue = parsedValue.join('.');
    }

    return parsedValue;
  }

  return {
    mask: maskValue,
    parse: parseValue
  };
};

function addThousandDots(value) {
  if (value.includes('.')) {
    var split = value.split('.');
    return "".concat(addThousandDots(split[0]), ",").concat(split[1]);
  } else {
    return parseInt(value).toLocaleString('pt-BR');
  }
}

export default NumberFormatter;