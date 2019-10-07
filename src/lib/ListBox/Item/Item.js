import React, { useEffect, useRef, useState } from 'react'
import { Checkbox, List } from '../../index'
import Search from '../Search/Search'

const Item = ({ before, prev, items, onDoubleClick, onClick, onSearch }) => {
    const [ render, setRender ] = useState({ from: 0, to: 0 })
    const scrollableRef = useRef()

    useEffect(() => {
        const target = scrollableRef.current
        let from = (Math.floor((target.scrollTop) / 56) - 1)
        let to = (Math.ceil((target.getBoundingClientRect().height / 56) + (target.scrollTop / 56) + 2))
        if (items) {
            to = to > items.length ? items.length : to
        }
        setRender({ from, to })
    }, [ before, prev, items ])

    function handleScroll(e) {
        const { target } = e
        let from = (Math.floor((target.scrollTop) / 56))
        let to = (Math.floor((target.getBoundingClientRect().height / 56) + (target.scrollTop / 56)))
        if (items) {
            to = to > items.length ? items.length : to
        }
        setRender({ from, to })
    }

    return (
        <div className='vui-ListBox-items'>
            <Search
                onChange={onSearch}
                name={before}
                placeholder='Pesquisar...'
            />

            <List className='vui-ListBox-List' onScroll={handleScroll} setRef={scrollableRef}>
                {items && <>
                    <div style={{ height: 56 * (render.from) }}/>
                    {items.sort((a, b) => (a.id > b.id) ? 1 : -1).map((item, index) => (
                        <List.ListItem
                            key={item.id}
                            onDoubleClick={() => onDoubleClick(item, before, prev)}
                            onClick={(e) => onClick(e, before, item, index)}
                            selectable
                            active={!!item.checked}
                        >
                            <List.Content>
                                <List.Title>{item.label}</List.Title>
                            </List.Content>
                            <List.Action right>
                                <Checkbox
                                    onClick={(e) => e.stopPropagation()}
                                    checked={!!item.checked}
                                    id={item.id}
                                    name={item.id}
                                />
                            </List.Action>
                        </List.ListItem>
                    )).filter((_, i) => (i >= render.from && i <= render.to))}
                    <div style={{ height: 56 * (items.length - render.to) }}/>
                </>}
            </List>
        </div>
    )
}

export default Item
