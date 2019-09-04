import React, {useEffect, useState} from 'react'
import './ListBox.sass'
import Item from './Item/Item'
import Control from './Control/Control'

const UNSELECTED = 'unselected'
const SELECTED = 'selected'

const ListBox = ({className, onChange, selected, unselected}) => {

    if (!unselected)
        console.error('The property "unselected" is required for ListBox')

    const [lastSelected, setLastSelected] = useState()
    const [listItems, setListItems] = useState()
    const [virtualItems, setVirtualItems] = useState()

    useEffect(() => {
        let data = {unselected, selected}
        setListItems(data)
        setVirtualItems(data)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected, unselected])

    const handleClick = (e, type, item, index) => {
        setLastSelected({item, index})

        if (e.ctrlKey) {
            virtualItems[type].forEach((item, listIndex) => {
                if (lastSelected.index <= index) {
                    if (listIndex >= lastSelected.index && listIndex <= index)
                        item.checked = true
                } else {
                    if (listIndex <= lastSelected.index && listIndex >= index)
                        item.checked = true
                }
            })
        } else
            virtualItems[type][index].checked = !virtualItems[type][index].checked
    }

    const handleDoubleClick = (item, before, prev) => {
        item['type'] = prev
        item['checked'] = false
        reflectList([item], before, prev)
    }


    const reflectList = (items, before, prev) => {
        setListItems(listItems => {
            let prevData = [...listItems[prev]]
            let beforeData = [...listItems[before]]

            for (let item of items) {
                prevData.push(item)
                let index = beforeData.findIndex(i => i.id === item.id)
                beforeData.splice(index, 1)
            }

            let data = {
                ...listItems,
                [prev]: prevData,
                [before]: beforeData,
            }

            setVirtualItems(data)
            onChange(data)

            return data
        })
    }

    const handleChange = async (before, prev) => {
        // eslint-disable-next-line array-callback-return
        let items = virtualItems[before].filter(item => {
            if (item.checked) {
                item['type'] = prev
                item.checked = false
                return item
            }
        })

        reflectList(items, before, prev)
    }

    const handleSearch = async (type, value) => {
        if (value.length) {
            setVirtualItems(virtualItems => {
                let items = [...listItems[type]].filter(item => {
                    if (item.label.toLowerCase().indexOf(value.toLowerCase()) !== -1)
                        return item

                    return null
                })

                return {...virtualItems, [type]: items}
            })
        } else {
            setVirtualItems(virtualItems => {
                return {...virtualItems, [type]: [...listItems[type]]}
            })
        }

        return ''
    }

    const handleTransferAll = async (before, prev) => {
        let items = virtualItems[before].map(item => {
            item['type'] = prev
            item.checked = false
            return item
        })

        reflectList(items, before, prev)
    }

    return (
        <div className={`vui-ListBox ${className}`}>
            <Item
                before={UNSELECTED}
                prev={SELECTED}
                items={virtualItems && virtualItems.unselected}
                onClick={handleClick}
                onDoubleClick={handleDoubleClick}
                onSearch={handleSearch}
            />

            <Control
                nonSelected={UNSELECTED}
                selected={SELECTED}
                onChange={handleChange}
                onTransferAll={handleTransferAll}
            />

            <Item
                before={SELECTED}
                prev={UNSELECTED}
                items={virtualItems && virtualItems.selected}
                onClick={handleClick}
                onDoubleClick={handleDoubleClick}
                onSearch={handleSearch}
            />
        </div>
    )
}

export default ListBox
