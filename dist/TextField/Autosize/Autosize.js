import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useEffect, useRef } from 'react';
import TextField from '../TextField';

var Autosize = function Autosize(_ref) {
  var setRef = _ref.setRef,
      props = _objectWithoutProperties(_ref, ["setRef"]);

  var innerSetRef = useRef(null);

  var resize = function resize(target) {
    target.style.height = 'auto';
    target.style.height = target.scrollHeight + 1 + 'px';
  };

  var handleKeyUp = function handleKeyUp(_ref2) {
    var target = _ref2.target;
    resize(target);
  };

  useEffect(function () {
    if (setRef) {
      setRef.current = innerSetRef.current;
    }

    var target = innerSetRef.current.element;
    resize(target);
  }, [setRef]);
  useEffect(function () {
    var handleResize = function handleResize() {
      var target = innerSetRef.current.element;
      resize(target);
    };

    handleResize();
    window.addEventListener('scroll', handleResize);
    window.addEventListener('resize', handleResize);
    return function () {
      window.removeEventListener('scroll', handleResize);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return React.createElement(TextField, Object.assign({}, props, {
    setRef: innerSetRef,
    onInput: handleKeyUp,
    inputElement: function inputElement(props) {
      return React.createElement("textarea", Object.assign({
        rows: "2"
      }, props));
    }
  }));
};

export default Autosize;