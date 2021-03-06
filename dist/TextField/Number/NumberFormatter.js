"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("../../index");

var _checkValue = _interopRequireDefault(require("../../Utils/checkValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NumberFormatter = function NumberFormatter(config) {
  config = config || {};
  config.prefix = config.prefix || '';
  config.allowNegative = config.allowNegative || false;

  if (config.decimal && typeof config.decimal !== 'number' || !config.decimal && config.money) {
    config.decimal = 2;
  }

  function maskValue(rawValue) {
    rawValue = (0, _checkValue.default)(rawValue) ? rawValue.toString() : rawValue;
    var addedDecimal = false;

    if (!rawValue) {
      return rawValue;
    }

    if (rawValue === '-') {
      return rawValue;
    }

    var maskedValue = rawValue.toString();
    var isNegative = config.allowNegative && maskedValue.indexOf('-') > -1;
    maskedValue = maskedValue.replace(/[^\d.]/g, '');
    var hasComma = maskedValue.split('.')[1];

    if (config.decimal) {
      if (!hasComma) {
        maskedValue = "".concat(maskedValue, ".").concat('0'.repeat(config.decimal));
        addedDecimal = true;
      } else {
        var repeatCount = config.decimal - hasComma.length;

        if (repeatCount > 0) {
          maskedValue = "".concat(maskedValue).concat('0'.repeat(repeatCount > 0 ? repeatCount : 0));
        } else if (repeatCount < 0) {
          maskedValue = maskedValue.substring(0, maskedValue.length + repeatCount);
        }
      }
    }

    if (isNegative) {
      maskedValue = "-".concat(maskedValue);
    }

    var activeElement = document.activeElement;

    if (activeElement && activeElement.value) {
      var characters = activeElement.value.length;

      var caretPos = _index.caretPosition.get(activeElement);

      if (caretPos || addedDecimal) {
        setTimeout(function () {
          if (document.activeElement === activeElement) {
            if (caretPos && !addedDecimal) {
              _index.caretPosition.set(activeElement, caretPos + (activeElement.value.length - characters));
            } else {
              _index.caretPosition.set(activeElement, activeElement.value.length - config.decimal - 1);
            }
          }
        });
      }
    }

    if (config.money) {
      maskedValue = addThousandDots(maskedValue, config.decimal);
    }

    if (!config.money && config.decimal) {
      maskedValue = maskedValue.replace('.', ',');
    }

    return config.prefix + maskedValue;
  }

  function parseValue(maskedValue) {
    if (!(0, _checkValue.default)(maskedValue)) {
      return maskedValue;
    }

    var parsedValue = maskedValue.toString();
    var isNegative = config.allowNegative && parsedValue.indexOf('-') > -1;
    parsedValue = parsedValue.replace(/[^\d]/g, '');

    if (parsedValue === '' && !isNegative) {
      return parsedValue;
    }

    if (parsedValue === '' && isNegative) {
      return '-';
    }

    if (parsedValue.length < 3) {
      parsedValue = parsedValue.padStart(config.decimal + 1, '0');
    }

    if (isNegative) {
      parsedValue = "-".concat(parsedValue);
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

function addThousandDots(value, decimal) {
  if (value.includes('.')) {
    var split = value.split('.');
    return "".concat(addThousandDots(split[0], decimal), ",").concat(split[1].substring(0, decimal));
  } else {
    return parseInt(value).toLocaleString('pt-BR');
  }
}

var _default = NumberFormatter;
exports.default = _default;