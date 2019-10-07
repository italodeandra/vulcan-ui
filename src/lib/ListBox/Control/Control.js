import React from 'react'
import { Button, Icon } from '../../index'

const Control = ({ nonSelected, selected, onChange, onTransferAll }) => {

    const handleTransferAllRight = () => {
        onTransferAll && onTransferAll(nonSelected, selected)
    }

    const handleTransferAllLeft = () => {
        onTransferAll && onTransferAll(selected, nonSelected)
    }

    const handleChangeRight = () => {
        onChange && onChange(nonSelected, selected)
    }

    const handleChangeLeft = () => {
        onChange && onChange(selected, nonSelected)
    }

    return (
        <div className='vui-ListBox-controls'>
            <Button
                className='vui-ListBox-controls-button'
                icon
                onClick={handleTransferAllRight}
            >
                <Icon name='transferRight'/>
            </Button>
            <Button
                className='vui-ListBox-controls-button'
                icon
                onClick={handleChangeRight}
            >
                <Icon name='arrowRight'/>
            </Button>
            <Button
                className='vui-ListBox-controls-button'
                icon
                onClick={handleChangeLeft}
            >
                <Icon name='arrowLeft'/>
            </Button>
            <Button
                className='vui-ListBox-controls-button'
                icon
                onClick={handleTransferAllLeft}
            >
                <Icon name='transferLeft'/>
            </Button>
        </div>
    )
}

export default Control
