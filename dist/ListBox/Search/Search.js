import _slicedToArray from '@babel/runtime/helpers/esm/slicedToArray'
import React, {useState} from 'react'
import {Button, Icon} from '../../index'
import './Search.sass'

var Search = function Search(_ref) {
    var name = _ref.name,
        placeholder = _ref.placeholder,
        onChange = _ref.onChange

    var _useState = useState(''),
        _useState2 = _slicedToArray(_useState, 2),
        value = _useState2[0],
        setValue = _useState2[1]

    var handleChange = function handleChange(_ref2) {
        var target = _ref2.target
        setValue(target.value)
        onChange && onChange(name, target.value)
    }

    return React.createElement('div', {
        className: 'vui-ListBox-Search'
    }, React.createElement('input', {
        className: 'vui-ListBox-Search-Input',
        name: name,
        value: value,
        onChange: handleChange,
        placeholder: placeholder ? placeholder : 'Pesquisar...'
    }), React.createElement(Button, {
        disabled: true,
        className: 'vui-ListBox-Search-Button',
        icon: true,
        onClick: handleChange
    }, React.createElement(Icon, {
        name: 'search'
    })))
}

export default Search
