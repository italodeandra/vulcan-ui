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
        setListItems({unselected, selected})
        setVirtualItems({unselected, selected})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleClick = (e, type, item, index) => {
        setLastSelected({item, index})

        if (e.ctrlKey) {
            virtualItems[type].forEach((item, listIndex) => {
                if (lastSelected.index <= index) {
                    if (listIndex >= lastSelected.index && listIndex <= index) {
                        item.checked = true
                        return item
                    }
                } else {
                    if (listIndex <= lastSelected.index && listIndex >= index) {
                        item.checked = true
                        return item
                    }
                }
            })
        } else {
            setVirtualItems(virtualItems => {
                let data = virtualItems[type].map(virtualItem => {
                    if (virtualItem.id === item.id)
                        virtualItem.checked = !virtualItem.checked
                    return virtualItem
                })

                return {
                    ...virtualItems,
                    [type]: data,
                }
            })
        }
    }

    const handleDoubleClick = async (item, before, prev) => {
        item['type'] = prev
        item['checked'] = false
        onChange(await reflectList([item], before, prev))
    }

    const reflectList = async (items, before, prev) => {
        let data = {}

        for (let item of items) {
            setVirtualItems(virtualItems => {
                let prevData = [...virtualItems[prev]]
                prevData.push(item)

                let beforeData = [...virtualItems[before]]
                let index = beforeData.findIndex(i => i.id === item.id)
                virtualItems[before].splice(index, 1)

                return {
                    ...virtualItems,
                    [item.type]: prevData,
                    [before]: virtualItems[before],
                }
            })

            // eslint-disable-next-line no-loop-func
            await setListItems(listItems => {
                let prevData = [...listItems[prev]]
                prevData.push(item)

                let beforeData = [...listItems[before]]
                let index = beforeData.findIndex(i => i.id === item.id)
                listItems[before].splice(index, 1)

                data = {
                    ...listItems,
                    [item.type]: prevData,
                    [before]: listItems[before],
                }

                return data
            })
        }

        return data
    }

    const handleChange = async (before, prev) => {
        let items = []

        virtualItems[before].forEach(item => {
            if (item.checked) {
                item['type'] = prev
                item.checked = false
                items.push(item)
            }
        })

        onChange(await reflectList(items, before, prev))
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

        return ""
    }

    const handleTransferAll = async (before, prev) => {
        let items = []

        virtualItems[before].forEach(item => {
            item['type'] = prev
            item.checked = false
            items.push(item)
        })

        onChange(await reflectList(items, before, prev))
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