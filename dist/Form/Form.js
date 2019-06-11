import React, { useEffect, useRef } from 'react';
import { classNames } from '../index';

var Form = function Form(_ref) {
  var id = _ref.id,
      className = _ref.className,
      children = _ref.children,
      onSubmit = _ref.onSubmit,
      setRef = _ref.setRef;
  className = classNames(className, 'vui-Form');
  var ref = useRef(null);
  useEffect(function () {
    if (setRef) {
      setRef.current = {
        element: ref.current,
        isInvalid: checkIfIsInvalid
      };
    }
  }, [setRef]);

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    onSubmit && onSubmit({
      element: ref.current,
      isInvalid: checkIfIsInvalid
    });
  };

  var checkIfIsInvalid = function checkIfIsInvalid() {
    var firstInvalid = ref.current.querySelector('.vui-Field.has-error .input');

    if (firstInvalid) {
      return {
        focusFirstInvalid: function focusFirstInvalid() {
          firstInvalid.focus();
        }
      };
    } else {
      return null;
    }
  };

  return React.createElement("form", {
    id: id,
    className: className,
    onSubmit: handleSubmit,
    ref: ref
  }, children);
};

export default Form;