import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, {useLayoutEffect, useRef, useState} from 'react';
import {classNames} from '../../index';
import './Cell.scss';

var Cell = function Cell(_ref) {
    var children = _ref.children,
        editable = _ref.editable,
        onChange = _ref.onChange,
        style = _ref.style;
    var ref = useRef(null);

    var _useState = useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        rightAligned = _useState2[0],
        setRightAligned = _useState2[1];

    var _useState3 = useState(false),
        _useState4 = _slicedToArray(_useState3, 2),
        centerAligned = _useState4[0],
        setCenterAligned = _useState4[1];

    var _useState5 = useState(false),
        _useState6 = _slicedToArray(_useState5, 2),
        isEditing = _useState6[0],
        setIsEditing = _useState6[1];

    useLayoutEffect(function () {
        var thisIndex = ref.current.parentNode.children.indexOf(ref.current);
        var isColumnRightAligned = ref.current.closest('.vui-DataTable').querySelectorAll('.vui-DataTable-Column')[thisIndex].classList.contains('right-aligned');

        if (isColumnRightAligned) {
            ref.current.classList.add('right-aligned');
        }

        setRightAligned(isColumnRightAligned);
        var isColumnCenterAligned = ref.current.closest('.vui-DataTable').querySelectorAll('.vui-DataTable-Column')[thisIndex].classList.contains('center-aligned');

        if (isColumnCenterAligned) {
            ref.current.classList.add('center-aligned');
        }

        setCenterAligned(isColumnCenterAligned); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var className = classNames('vui-DataTable-Cell', rightAligned && 'right-aligned', centerAligned && 'center-aligned');

    var handleChange = function handleChange(_ref2) {
        var target = _ref2.target;
        onChange && onChange(target.value);
    };

    var handleDoubleClick = function handleDoubleClick() {
        setIsEditing(true);
    };

    var handleEnter = function handleEnter(_ref3) {
        var key = _ref3.key;

        if (key === 'Enter') {
            setIsEditing(false);
        }
    };

    return React.createElement("td", {
        className: className,
        ref: ref,
        onClick: editable ? handleDoubleClick : undefined,
        style: style
    }, !isEditing && editable !== 'always' ? children : React.createElement("input", {
        defaultValue: children,
        onBlur: function onBlur() {
            return setIsEditing(false);
        },
        autoFocus: editable !== 'always',
        onChange: handleChange,
        onKeyDown: handleEnter
    }));
};

export default Cell;