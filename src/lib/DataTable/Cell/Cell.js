import React, { useLayoutEffect, useRef, useState } from 'react'
import { classNames } from '../../index'
import './Cell.scss'

const Cell = ({ children, editable, onChange, style }) => {
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

    const className = classNames(
        'vui-DataTable-Cell',
        rightAligned && 'right-aligned',
        centerAligned && 'center-aligned'
    )

    const handleChange = ({ target }) => {
        onChange && onChange(target.value)
    }

    const handleDoubleClick = () => {
        setIsEditing(true)
    }

    return (
        <td className={className} ref={ref} onClick={editable ? handleDoubleClick : undefined} style={style}>
            {!isEditing && editable !== 'always'
                ?
                children
                :
                <input defaultValue={children} onBlur={() => setIsEditing(false)} autoFocus onChange={handleChange} />
            }
        </td>
    )
}

export default Cell