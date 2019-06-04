import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".Button_componentButton {\n  border: none;\n  height: 36px;\n  border-radius: 4px;\n  text-transform: uppercase;\n  outline: none;\n  user-select: none;\n  cursor: pointer;\n  padding: 0 16px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  font: 500 14px \"Roboto\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Oxygen\",\r \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\r sans-serif;\n  transition-property: color, background-color;\n  transition-duration: 180ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n  .Button_componentButton:after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    border-radius: inherit;\n    transition-property: background-color;\n    transition-duration: 180ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n  .Button_componentButton.Button_contained {\n    background-color: #E0E0E0;\n    color: rgba(0, 0, 0, 0.87); }\n    .Button_componentButton.Button_contained:hover:after {\n      background-color: rgba(0, 0, 0, 0.05); }\n    .Button_componentButton.Button_contained:focus:after {\n      background-color: rgba(0, 0, 0, 0.07); }\n    .Button_componentButton.Button_contained:active:after {\n      background-color: rgba(0, 0, 0, 0.1); }\n  .Button_componentButton.Button_text {\n    background-color: transparent;\n    color: #E0E0E0; }\n    .Button_componentButton.Button_text:hover:after {\n      background-color: rgba(224, 224, 224, 0.05); }\n    .Button_componentButton.Button_text:focus:after {\n      background-color: rgba(224, 224, 224, 0.07); }\n    .Button_componentButton.Button_text:active:after {\n      background-color: rgba(224, 224, 224, 0.1); }\n";
var styles = { "componentButton": "Button_componentButton", "contained": "Button_contained", "text": "Button_text" };
styleInject(css);

function classNames() {
  for (var _len = arguments.length, names = Array(_len), _key = 0; _key < _len; _key++) {
    names[_key] = arguments[_key];
  }

  return names.filter(function (name) {
    return name;
  }).join(' ');
}

Button.propTypes = {
  type: PropTypes.string,
  submit: PropTypes.bool,
  setRef: PropTypes.object,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node
};

function Button(_ref) {
  var type = _ref.type,
      submit = _ref.submit,
      setRef = _ref.setRef,
      onClick = _ref.onClick,
      className = _ref.className,
      children = _ref.children;

  return React.createElement(
    'button',
    {
      type: submit ? 'submit' : 'button',
      ref: setRef,
      className: classNames(styles.componentButton, styles[type || 'contained'], className),
      onClick: onClick
    },
    children
  );
}

var css$1 = ".TextField_componentTextField {\n  margin-bottom: 16px;\n  position: relative; }\n  .TextField_componentTextField input:-webkit-autofill {\n    transition: background-color 0.1s ease-in-out 0s; }\n  .TextField_componentTextField input {\n    width: 100%;\n    min-height: 56px;\n    border-radius: 4px;\n    border: 1px solid #909090;\n    padding: 0 13px 3px 13px;\n    outline: none;\n    color: #000000de;\n    box-sizing: border-box;\n    transition-property: border, padding;\n    transition-duration: 180ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    font: 400 16px \"Roboto\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Oxygen\",\r \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\r sans-serif; }\n    .TextField_componentTextField.TextField_focused input {\n      padding: 0 12px 3px 12px;\n      border: 2px solid #E0E0E0; }\n  .TextField_componentTextField label {\n    color: #00000099;\n    background-color: #fff;\n    position: absolute;\n    font-size: 16px;\n    top: 15px;\n    left: 9px;\n    pointer-events: none;\n    padding: 2px 4px;\n    border-radius: 4px;\n    content: '@@@';\n    transition-property: color, font-size, top, left;\n    transition-duration: 180ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n    .TextField_componentTextField.TextField_focused label,\n    .TextField_componentTextField.TextField_filled label {\n      font-size: 12px;\n      top: -9px;\n      left: 9px; }\n    .TextField_componentTextField.TextField_required label:after {\n      content: ' *';\n      color: #F44336 !important; }\n  .TextField_componentTextField .TextField_tip {\n    font-size: 12px;\n    color: #00000099;\n    margin-top: 4px;\n    padding: 0 13px;\n    cursor: default;\n    transition-property: color;\n    transition-duration: 180ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    clear: both; }\n    .TextField_componentTextField .TextField_tip .TextField_floatRight {\n      float: right; }\n  .TextField_componentTextField.TextField_error:not(.TextField_pristine) > input {\n    border-color: #F44336 !important; }\n  .TextField_componentTextField.TextField_error:not(.TextField_pristine) label,\n  .TextField_componentTextField.TextField_error:not(.TextField_pristine) .TextField_tip {\n    color: #F44336 !important; }\n";
var styles$1 = { "componentTextField": "TextField_componentTextField", "focused": "TextField_focused", "filled": "TextField_filled", "required": "TextField_required", "tip": "TextField_tip", "floatRight": "TextField_floatRight", "error": "TextField_error", "pristine": "TextField_pristine" };
styleInject(css$1);

function validate(value, type, validation) {
  var message = {
    errorMessage: null,
    floatRightMessage: null
  };

  if (validation) {
    if (validation.required) {
      if (typeof value === 'undefined' || value === '' || value === null) {
        message.errorMessage = validation.required.message || validation.required;
        return message;
      }
    }

    if (value && validation.maxLength) {
      if (value.length > validation.maxLength.value) {
        message.errorMessage = validation.maxLength.message;
        message.floatRightMessage = validation.maxLength.floatRight;
        return message;
      }
    }
  }

  return message;
}

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf('text', 'submit'),
  id: PropTypes.string,
  onChange: PropTypes.func,
  autoComplete: PropTypes.bool,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  validation: PropTypes.object,
  tip: PropTypes.string,
  defaultValue: PropTypes.any,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  setRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  name: PropTypes.string,
  onCustomError: PropTypes.object,
  style: PropTypes.oneOf('filled', 'outlined')
};

function TextField(_ref) {
  var label = _ref.label,
      type = _ref.type,
      id = _ref.id,
      onChange = _ref.onChange,
      autoComplete = _ref.autoComplete,
      autoFocus = _ref.autoFocus,
      disabled = _ref.disabled,
      validation = _ref.validation,
      tip = _ref.tip,
      defaultValue = _ref.defaultValue,
      placeholder = _ref.placeholder,
      required = _ref.required,
      setRef = _ref.setRef,
      name = _ref.name,
      onCustomError = _ref.onCustomError,
      style = _ref.style;

  type = type || 'text';
  style = style || 'filled';

  var _useState = useState(defaultValue),
      _useState2 = slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = slicedToArray(_useState3, 2),
      isFocused = _useState4[0],
      setFocused = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = slicedToArray(_useState5, 2),
      isFilled = _useState6[0],
      setFilled = _useState6[1];

  var _useState7 = useState(true),
      _useState8 = slicedToArray(_useState7, 2),
      isPristine = _useState8[0],
      setPristine = _useState8[1];

  if (required && (!validation || !validation.required)) {
    validation = validation || {};
    validation.required = 'Please fill out this field';
  }

  var _useState9 = useState({}),
      _useState10 = slicedToArray(_useState9, 2),
      _useState10$ = _useState10[0],
      errorMessage = _useState10$.errorMessage,
      floatRightMessage = _useState10$.floatRightMessage,
      setErrorMessage = _useState10[1];

  var isRequired = validation && validation.required;
  var ref = setRef || useRef(null);

  /** Check error */
  useEffect(function () {
    setErrorMessage(validate(value, type, validation));
  }, [value, type, JSON.stringify(validation)]);

  /** Check default value change */
  useEffect(function () {
    if (value !== defaultValue) {
      setPristine(false);

      setValue(defaultValue);
    }
  }, [JSON.stringify(defaultValue)]);

  /** Check is filled */
  useEffect(function () {
    if (checkIsFilled(value)) {
      setFilled(true);
    } else {
      setFilled(false);
    }
  }, [JSON.stringify(value)]);

  /** Init custom error */
  useEffect(function () {
    if (onCustomError) {
      onCustomError.current = {
        set: function set$$1(error) {
          setErrorMessage(error);
          setPristine(false);
        }
      };
    }
  }, [onCustomError]);

  function checkIsFilled(value) {
    return typeof value !== 'undefined' && value !== '' && value !== null;
  }

  function handleInputChange(newValue) {
    setPristine(false);

    setValue(newValue);
    onChange && onChange(newValue);
  }

  function handleFocus(focused) {
    setFocused(focused);
    if (!focused) {
      setPristine(false);
    }
  }

  function checkAutofill(_ref2) {
    var target = _ref2.target;

    if (target.matches(':-webkit-autofill') && isPristine && !isFilled) {
      setFilled(true);
    }
  }

  return React.createElement(
    'div',
    {
      className: classNames(styles$1.componentTextField, isFocused && styles$1.focused, isFilled && styles$1.filled, isPristine && styles$1.pristine, isRequired && styles$1.required, errorMessage && styles$1.error, styles$1[style])
    },
    React.createElement('input', {
      ref: ref,
      tabIndex: '0',
      className: errorMessage ? 'error-focus' : '',
      id: id,
      type: type,
      onFocus: function onFocus() {
        return handleFocus(true);
      },
      onBlur: function onBlur() {
        return handleFocus(false);
      },
      onChange: function onChange($event) {
        return handleInputChange($event.target.value);
      },
      autoComplete: autoComplete || 'off',
      autoFocus: autoFocus,
      disabled: disabled,
      required: isRequired,
      defaultValue: defaultValue,
      placeholder: placeholder,
      name: name,
      onTransitionEnd: checkAutofill
    }),
    !!label && React.createElement(
      'label',
      { htmlFor: id },
      label
    ),
    (tip || !isPristine && !!errorMessage) && React.createElement(
      'div',
      { className: styles$1.tip },
      !isPristine && errorMessage ? errorMessage : tip,
      !!floatRightMessage && React.createElement(
        'span',
        { className: styles$1.floatRight },
        floatRightMessage
      )
    )
  );
}

var css$2 = ".Spinner_componentSpinner {\n  width: 24px;\n  display: inline-block; }\n  .Spinner_componentSpinner svg {\n    animation: Spinner_rotate 2s linear infinite;\n    z-index: 2; }\n    .Spinner_componentSpinner svg circle {\n      stroke-dasharray: 1, 150;\n      stroke-dashoffset: 0;\n      animation: Spinner_dash 1.5s ease-in-out infinite, Spinner_multicolor2 1.5s ease-in-out infinite; }\n\n@keyframes Spinner_rotate {\n  100% {\n    transform: rotate(360deg); } }\n\n@keyframes Spinner_dash {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0; }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35; }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124; } }\n\n@keyframes Spinner_multicolor2 {\n  0% {\n    stroke: #3FCB2A; }\n  11% {\n    stroke: #32D9A1; }\n  22% {\n    stroke: #33C3DD; }\n  33% {\n    stroke: #2B7CD7; }\n  44% {\n    stroke: #5D33D5; }\n  55% {\n    stroke: #BF2FDC; }\n  66% {\n    stroke: #DE349E; }\n  77% {\n    stroke: #E25335; }\n  88% {\n    stroke: #FB9600; }\n  100% {\n    stroke: #FFCE00; } }\n";
var styles$2 = { "componentSpinner": "Spinner_componentSpinner", "rotate": "Spinner_rotate", "dash": "Spinner_dash", "multicolor2": "Spinner_multicolor2" };
styleInject(css$2);

Spinner.propTypes = {
  className: PropTypes.string
};

function Spinner(_ref) {
  var className = _ref.className;

  return React.createElement(
    'div',
    { className: styles$2.componentSpinner + ' ' + className },
    React.createElement(
      'svg',
      { viewBox: '0 0 44 44' },
      React.createElement('circle', { cx: '22', cy: '22', r: '20', fill: 'none', strokeWidth: '4' })
    )
  );
}

var css$3 = ".FloatingActionButton_componentFloatingActionButton {\n  border: none;\n  background-color: #E0E0E0;\n  color: rgba(0, 0, 0, 0.87);\n  height: 56px;\n  border-radius: 28px;\n  text-transform: uppercase;\n  outline: none;\n  user-select: none;\n  cursor: pointer;\n  padding: 0 16px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n  font: 500 14px \"Roboto\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Oxygen\",\r \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\r sans-serif;\n  transition-property: color, background-color;\n  transition-duration: 180ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n  .FloatingActionButton_componentFloatingActionButton:after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    border-radius: inherit;\n    transition-property: background-color;\n    transition-duration: 180ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n  .FloatingActionButton_componentFloatingActionButton:hover:after {\n    background-color: rgba(0, 0, 0, 0.05); }\n  .FloatingActionButton_componentFloatingActionButton:focus:after {\n    background-color: rgba(0, 0, 0, 0.07); }\n  .FloatingActionButton_componentFloatingActionButton:active:after {\n    background-color: rgba(0, 0, 0, 0.1); }\n  .FloatingActionButton_componentFloatingActionButton.FloatingActionButton_extended {\n    padding: 0 12px;\n    height: 48px; }\n    .FloatingActionButton_componentFloatingActionButton.FloatingActionButton_extended label {\n      margin: 0 8px 0 12px; }\n";
var styles$3 = { "componentFloatingActionButton": "FloatingActionButton_componentFloatingActionButton", "extended": "FloatingActionButton_extended" };
styleInject(css$3);

FloatingActionButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  extended: PropTypes.bool,
  className: PropTypes.string
};

function FloatingActionButton(_ref) {
  var onClick = _ref.onClick,
      children = _ref.children,
      extended = _ref.extended,
      className = _ref.className;

  return React.createElement(
    'button',
    {
      type: 'button',
      className: classNames(styles$3.componentFloatingActionButton, extended && styles$3.extended, className),
      onClick: onClick
    },
    children
  );
}

/**
 * Creates DOM element to be used as React root.
 * @returns {HTMLElement}
 */
function createRootElement(id) {
  var rootContainer = document.createElement('div');
  rootContainer.setAttribute('id', id);
  return rootContainer;
}

/**
 * Appends element as last child of body.
 * @param {HTMLElement} rootElem
 */
function addRootElement(rootElem) {
  document.body.insertBefore(rootElem, document.body.lastElementChild.nextElementSibling);
}

/**
 * Hook to create a React Portal.
 * Automatically handles creating and tearing-down the root elements (no SRR
 * makes this trivial), so there is no need to ensure the parent target already
 * exists.
 * @example
 * const target = usePortal(id, [id]);
 * return createPortal(children, target);
 * @param {String} id The id of the target container, e.g 'modal' or 'spotlight'
 * @returns {HTMLElement} The DOM node to use as the Portal target.
 */
function usePortal(id) {
  var rootElemRef = useRef(null);

  useEffect(function setupElement() {
    // Look for existing target dom element to append to
    var existingParent = document.querySelector('#' + id);
    // Parent is either a new root or the existing dom element
    var parentElem = existingParent || createRootElement(id);

    // If there is no existing DOM element, add a new one.
    if (!existingParent) {
      addRootElement(parentElem);
    }

    // Add the detached element to the parent
    parentElem.appendChild(rootElemRef.current);

    return function removeElement() {
      rootElemRef.current.remove();
      if (parentElem.childNodes.length === -1) {
        parentElem.remove();
      }
    };
  }, [id]);

  /**
   * It's important we evaluate this lazily:
   * - We need first render to contain the DOM element, so it shouldn't happen
   *   in useEffect. We would normally put this in the constructor().
   * - We can't do 'const rootElemRef = useRef(document.createElement('div))',
   *   since this will run every single render (that's a lot).
   * - We want the ref to consistently point to the same DOM element and only
   *   ever run once.
   * @link https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily
   */
  function getRootElem() {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement('div');
    }
    return rootElemRef.current;
  }

  return getRootElem();
}

var css$4 = "#Menu_componentMenuContainer {\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.Menu_componentMenu {\n  background-color: white;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  position: absolute;\n  width: 112px; }\n  .Menu_componentMenu .menu-item {\n    padding: 15px 16px;\n    font-size: 14px;\n    font-weight: 500; }\n";
var styles$4 = { "componentMenuContainer": "Menu_componentMenuContainer", "componentMenu": "Menu_componentMenu" };
styleInject(css$4);

Menu.propTypes = {
  target: PropTypes.object,
  targetAlign: PropTypes.string,
  onClickOutside: PropTypes.func,
  children: PropTypes.node
};

function Menu(_ref) {
  var target = _ref.target,
      targetAlign = _ref.targetAlign,
      onClickOutside = _ref.onClickOutside,
      children = _ref.children;

  var _useState = useState(null),
      _useState2 = slicedToArray(_useState, 2),
      targetPositionX = _useState2[0],
      setTargetPositionX = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = slicedToArray(_useState3, 2),
      targetPositionY = _useState4[0],
      setTargetPositionY = _useState4[1];

  var ref = useRef(null);
  var portalContainer = usePortal(styles$4.componentMenuContainer);

  useEffect(function () {
    var targetPosition = {
      x: null,
      y: null
    };
    var targetAlignArray = targetAlign ? targetAlign.split(' ') : '';
    var targetDOMRect = target.current.getBoundingClientRect();
    var refDOMRect = ref.current.getBoundingClientRect();
    if (!targetAlignArray.includes('right')) {
      setTargetPositionX(targetDOMRect.x);
    } else {
      setTargetPositionX(targetDOMRect.x + targetDOMRect.width - refDOMRect.width);
    }
    if (!targetAlignArray.includes('bottom')) {
      setTargetPositionY(targetDOMRect.y);
    } else {
      setTargetPositionY(targetPosition.y = targetDOMRect.y + targetDOMRect.height - refDOMRect.height);
    }
  }, []);

  useEffect(function () {
    if (onClickOutside) {
      window.addEventListener('click', handleClickOutside);
    }

    return function () {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (event.target) {
      if (!event.target.classList.contains(styles$4.componentMenu) && !event.target.classList.contains(styles$4.menuItem)) {
        onClickOutside();
      }
    }
  }

  return createPortal(React.createElement(
    'div',
    {
      ref: ref,
      className: styles$4.componentMenu,
      style: {
        left: targetPositionX,
        top: targetPositionY
      }
    },
    children
  ), portalContainer);
}

var css$5 = ".Dialog_componentDialog {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.32);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 16px; }\n  .Dialog_componentDialog .Dialog_dialog {\n    position: relative;\n    background-color: white;\n    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);\n    border-radius: 4px;\n    width: 100%;\n    max-width: 560px;\n    max-height: 100%;\n    display: flex;\n    flex-direction: column; }\n    .Dialog_componentDialog .Dialog_dialog .dialog-header {\n      min-height: 64px;\n      padding: 21px 24px;\n      font-size: 20px;\n      font-weight: 500;\n      box-sizing: border-box;\n      color: #000000de; }\n    .Dialog_componentDialog .Dialog_dialog .dialog-content {\n      padding: 21px 24px;\n      font-size: 14px;\n      box-sizing: border-box;\n      color: #00000099;\n      overflow-y: auto; }\n      .Dialog_componentDialog .Dialog_dialog .dialog-header ~ .dialog-content {\n        padding-top: 0; }\n    .Dialog_componentDialog .Dialog_dialog .dialog-buttons {\n      display: flex;\n      justify-content: flex-end;\n      padding: 8px; }\n      .Dialog_componentDialog .Dialog_dialog .dialog-buttons > button:not(:first-child) {\n        margin-left: 8px; }\n";
var styles$5 = { "componentDialog": "Dialog_componentDialog", "dialog": "Dialog_dialog" };
styleInject(css$5);

Dialog.propTypes = {
  onClickOutside: PropTypes.func,
  children: PropTypes.node
};

function Dialog(_ref) {
  var onClickOutside = _ref.onClickOutside,
      children = _ref.children;

  var portalContainer = usePortal('component-Dialog-container');

  function handleClickOutside() {
    onClickOutside && onClickOutside();
  }

  return createPortal(React.createElement(
    'div',
    {
      className: styles$5.componentDialog,
      onClick: handleClickOutside
    },
    React.createElement(
      'div',
      {
        className: styles$5.dialog,
        onClick: function onClick(event) {
          return event.stopPropagation();
        }
      },
      children
    )
  ), portalContainer);
}

var css$6 = ".Form_componentForm {\n  outline: none; }\n";
var styles$6 = { "componentForm": "Form_componentForm" };
styleInject(css$6);

Form.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.node,
  setRef: PropTypes.object
};

function Form(_ref) {
  var onSubmit = _ref.onSubmit,
      children = _ref.children,
      setRef = _ref.setRef;

  var formRef = setRef || useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    var fields = formRef.current.querySelectorAll('[tabIndex]');
    fields.forEach(function (field) {
      return field.focus();
    });
    formRef.current.focus();

    var fieldWithError = Array.prototype.find.call(fields, function (field) {
      return field.classList.contains('error-focus');
    });
    if (fieldWithError) {
      fieldWithError.focus();
      return;
    }

    onSubmit && onSubmit();
  }

  return React.createElement(
    'form',
    {
      className: styles$6.componentForm,
      onSubmit: handleSubmit,
      ref: formRef,
      tabIndex: '0'
    },
    children
  );
}

function useMenu() {
  var ref = useRef(null);

  var _useState = useState(false),
      _useState2 = slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  return [ref, show, setShow];
}

function useDialog() {
  var ref = useRef(null);

  var _useState = useState(false),
      _useState2 = slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  return [ref, show, setShow];
}

export { Button, TextField, Spinner, FloatingActionButton, Menu, Dialog, Form, usePortal, useMenu, useDialog, classNames };
//# sourceMappingURL=index.es.js.map
