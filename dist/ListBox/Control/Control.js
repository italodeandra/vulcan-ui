import React from 'react'
import {Button, Icon} from '../../index'

var Control = function Control(_ref) {
    var nonSelected = _ref.nonSelected,
        selected = _ref.selected,
        onChange = _ref.onChange,
        onTransferAll = _ref.onTransferAll

    var handleTransferAllRight = function handleTransferAllRight() {
        onTransferAll && onTransferAll(nonSelected, selected)
    }

    var handleTransferAllLeft = function handleTransferAllLeft() {
        onTransferAll && onTransferAll(selected, nonSelected)
    }

    var handleChangeRight = function handleChangeRight() {
        onChange && onChange(nonSelected, selected)
    }

    var handleChangeLeft = function handleChangeLeft() {
        onChange && onChange(selected, nonSelected)
    }

    return React.createElement('div', {
        className: 'vui-ListBox-controls'
    }, React.createElement(Button, {
        className: 'vui-ListBox-controls-button',
        icon: true,
        onClick: handleTransferAllRight
    }, React.createElement(Icon, {
        name: 'transferRight'
    })), React.createElement(Button, {
        className: 'vui-ListBox-controls-button',
        icon: true,
        onClick: handleChangeRight
    }, React.createElement(Icon, {
        name: 'arrowRight'
    })), React.createElement(Button, {
        className: 'vui-ListBox-controls-button',
        icon: true,
        onClick: handleChangeLeft
    }, React.createElement(Icon, {
        name: 'arrowLeft'
    })), React.createElement(Button, {
        className: 'vui-ListBox-controls-button',
        icon: true,
        onClick: handleTransferAllLeft
    }, React.createElement(Icon, {
        name: 'transferLeft'
    })))
}

export default Control
