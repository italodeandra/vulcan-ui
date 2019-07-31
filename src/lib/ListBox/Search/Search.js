import React, {useState} from 'react'
import {Button, Icon} from '../../index'
import './Search.sass'

const Search = ({name, placeholder, onChange}) => {

    const [value, setValue] = useState('')

    const handleChange = ({target}) => {
        setValue(target.value)
        onChange && onChange(name, target.value)
    }

    return (
        <div className="vui-ListBox-Search">
            <input
                className="vui-ListBox-Search-Input"
                name={name}
                value={value}
                onChange={handleChange}
                placeholder={placeholder ? placeholder : "Pesquisar..."}
            />
            <Button disabled className="vui-ListBox-Search-Button" icon onClick={handleChange}>
                <Icon name='search'/>
            </Button>
        </div>
    )
}

export default Search