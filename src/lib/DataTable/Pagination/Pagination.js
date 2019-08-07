import React, {useContext, useEffect, useLayoutEffect, useRef, useState} from 'react'
import {Button, Icon} from '../../index'
import {Context} from '../DataTable'

import './Pagination.scss'

const Pagination = ({rowsPerPage, rowsPerPageOptions, page, count}) => {

    if (!rowsPerPage)
        console.error('The property "rowsPerPage" is required for Pagination')

    if (!rowsPerPageOptions)
        console.error('The property "rowsPerPageOptions" is required for Pagination')

    if (!page)
        console.error('The property "page" is required for Pagination')

    if (typeof count === 'undefined')
        console.error('The property "count" is required for Pagination')

    const {onTrigger, setFilter} = useContext(Context)
    const ref = useRef(null)
    const [totalColumns, setTotalColumns] = useState(0)
    const [pagination, setPagination] = useState({rowsPerPage, page})

    useEffect(() => {
        setFilter(filter => ({
            ...filter,
            pagination
        }))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useLayoutEffect(() => {
        let length = ref.current.parentNode.parentNode.querySelectorAll('.vui-DataTable-Columns tr .vui-DataTable-Column').length
        setTotalColumns(length)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleClick(type) {
        setPagination(pagination => {
            let data = {
                page: type === 'prevPage' ? pagination.page - 1 : pagination.page + 1,
                rowsPerPage: pagination.rowsPerPage,
            }

            onTrigger("pagination", data)
            return data
        })
    }

    function handleChange({target}) {
        setPagination(pagination => {
            let data = {
                page: pagination.page,
                rowsPerPage: +target.value,
            }

            onTrigger("pagination", data)
            return data
        })
    }

    function currentItems() {
        let pageItems = pagination.page * pagination.rowsPerPage

        let initValue = pageItems - (pagination.rowsPerPage - 1)
        let lastValue = pageItems >= count ? count : pageItems

        return (
            <>{initValue}-{lastValue} de {count}</>
        )
    }

    return (
        <div className='vui-DataTable-Row vui-DataTablePagination' ref={ref}>
            <div className='vui-DataTable-Cell' colSpan={totalColumns}>
                <div className='vui-DataTablePagination-Items'>
                    <div className='vui-DataTablePagination-Item'>
                        <p>Itens por página:</p>
                        <select
                            className='vui-DataTablePagination-ItemsByPage'
                            name='rowsPerPage'
                            onChange={handleChange}
                            value={pagination.rowsPerPage}
                        >
                            {rowsPerPageOptions && rowsPerPageOptions.map((option, index) => (
                                <option
                                    value={option}
                                    key={index}
                                >
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='vui-DataTablePagination-Item'>
                        {currentItems()}
                    </div>
                    <div className='vui-DataTablePagination-Item'>
                        <Button
                            icon
                            disabled={pagination.page === 1}
                            onClick={() => handleClick('prevPage')}
                        >
                            <Icon name='chevronLeft'/>
                        </Button>
                        <Button
                            icon
                            disabled={pagination.page * pagination.rowsPerPage >= count}
                            onClick={() => handleClick('nextPage')}
                        >
                            <Icon name='chevronRight'/>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pagination
