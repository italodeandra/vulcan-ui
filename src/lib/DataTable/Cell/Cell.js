import React, {useLayoutEffect, useRef, useState} from 'react'
import {classNames} from '../../index'
import './Cell.scss'

const Cell = ({children, editable, onChange, style, customInput, colSpan, className}) => {
    const ref = useRef(null)
    const [rightAligned, setRightAligned] = useState(false)
    const [centerAligned, setCenterAligned] = useState(false)
    const [isEditing, setIsEditing] = useState(false)

    useLayoutEffect(() => {
        const thisIndex = ref.current.parentNode.children.indexOf(ref.current)
        const isColumnRightAligned = ref.current.closest('.vui-DataTable').querySelectorAll('.vui-DataTable-Column')[thisIndex].classList.contains('right-aligned')
        if (isColumnRightAligned) {
            ref.current.classList.add('right-aligned')
        }
        setRightAligned(isColumnRightAligned)

        const isColumnCenterAligned = ref.current.closest('.vui-DataTable').querySelectorAll('.vui-DataTable-Column')[thisIndex].classList.contains('center-aligned')
        if (isColumnCenterAligned) {
            ref.current.classList.add('center-aligned')
        }
        setCenterAligned(isColumnCenterAligned)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    className = classNames(
        'vui-DataTable-Cell',
        className,
        editable && 'editable',
        rightAligned && 'right-aligned',
        centerAligned && 'center-aligned',
    )

    const handleChange = ({target}) => {
        onChange && onChange(target.value)
    }

    const handleDoubleClick = () => {
        setIsEditing(true)
    }

    const handleEnter = ({key}) => {
        if (key === 'Enter') {
            setIsEditing(false)
        }
    }

    const inputProps = {
        value: children || '',
        onBlur: () => setIsEditing(false),
        autoFocus: editable !== 'always',
        onChange: handleChange,
        onKeyDown: handleEnter,
    }

    const input = customInput ? customInput(inputProps) : <input {...inputProps} />

    return (
        <td className={className} ref={ref} onClick={editable ? handleDoubleClick : undefined} style={style}
            colSpan={colSpan}>
            {!isEditing && editable !== 'always'
                ?
                children
                :
                input
            }
        </td>
    )
}

export default Cell
