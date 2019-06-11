import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import TextField from '../TextField';

var Autosize = function Autosize(_ref) {
  var setRef = _ref.setRef,
      props = _objectWithoutProperties(_ref, ["setRef"]);

  var handleKeyUp = function handleKeyUp(e) {
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 1 + 'px';
  };

  return React.createElement(TextField, Object.assign({}, props, {
    onInput: handleKeyUp,
    inputElement: function inputElement(props) {
      return React.createElement("textarea", Object.assign({
        rows: "2"
      }, props));
    }
  }));
};

export default Autosize;