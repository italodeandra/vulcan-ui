import React from "react"
import Search from '../Search/Search'
import {Checkbox, List} from '../../index'

const Item = ({ before, prev, items, onDoubleClick, onClick, onSearch }) => {
    return (
        <div className="vui-ListBox-items">
            <Search
                onChange={onSearch}
                name={before}
                placeholder="Pesquisar..."
            />

            <List className="vui-ListBox-List">
                {items && items.map((item, index) => (
                    <List.ListItem
                        key={item.id}
                        onDoubleClick={() => onDoubleClick(item, before, prev)}
                        onClick={(e) => onClick(e, before, item, index)}
                        selectable
                        active={item.checked ? true : false}
                    >
                        <List.Content>
                            <List.Title>{item.label}</List.Title>
                        </List.Content>
                        <List.Action right>
                            <Checkbox
                                checked={item.checked ? true : false}
                                id={item.id}
                                name={item.id}
                            />
                        </List.Action>
                    </List.ListItem>
                ))}
            </List>
        </div>
    )
}

export default Item
