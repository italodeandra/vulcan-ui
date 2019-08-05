import React, {useContext, useRef, useState} from 'react'
import {Button, classNames, Icon, useDeepCompareLayoutEffect} from '../..'
import {Context} from '../DataTable'

import './SearchRow.sass'

const SearchRow = () => {

    const ref = useRef(null)
    const [elements, setElements] = useState([])
    const {columns, filter, setColumns, onTrigger} = useContext(Context)

    useDeepCompareLayoutEffect(() => {
        let searchColumns = ref.current.previousSibling.querySelectorAll('.vui-DataTable-Column')

        setElements([])

        searchColumns.forEach(column => {
            let columnName = column.getAttribute('name')

            if (column.classList.contains('search')) {
                setColumns(c => ({...c, [columnName]: {...c[columnName]}}))
                setElements(elements => [...elements, {name: columnName, input: true}])
            } else {
                setElements(elements => [...elements, {}])
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter])

    function handleChange(key, value) {
        setColumns(c => {
            let columns = {
                ...c,
                [key]: {...c[key], query: value}
            }

            onTrigger('columns', columns)
            return columns
        })
    }

    const inputProps = {
        onChange: handleChange,
        className: 'vui-DataTable-SearchRow-Input input'
    }

    const input = (key) => {
        if (columns[key] && columns[key].searchCustomInput) {
            return columns[key].searchCustomInput({
                ...inputProps,
                name: key,
                onChange: (value) => handleChange(key, value),
                value: columns[key].query || ''
            })
        }

        return (
            <>
                <input
                    {...inputProps}
                    className={classNames(inputProps.className, 'default')}
                    name={key}
                    onChange={(e) => handleChange(key, e.target.value)}
                    value={(columns[key] && columns[key].query) || ''}
                />
                <Button className='vui-DataTable-SearchRow-Button' icon onClick={() => onTrigger('columns', columns)}>
                    <Icon name='search'/>
                </Button>
            </>
        )
    }

    return (
        <tr className='vui-DataTable-Columns vui-DataTable-SearchRow' ref={ref}>
            {elements.map((element, index) => {
                return (
                    <td className='vui-DataTable-SearchRow-Cell vui-DataTable-Cell' key={index}>
                        {element.input && input(element.name)}
                    </td>
                )
            })}
        </tr>
    )
}

export default SearchRow
