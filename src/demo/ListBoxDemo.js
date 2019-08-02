import React, {useEffect, useState} from 'react'
import useTitle from './useTitle'
import ListBox from '../lib/ListBox/ListBox'

const ListBoxDemo = () => {
    const [, setTitle] = useTitle()
    const [unselected] = useState([
        {
            id: 1,
            value: 'morango',
            label: 'Morango',
        },
        {
            id: 2,
            value: 'limao',
            label: 'Limão',
        },
        {
            id: 3,
            value: 'uva',
            label: 'Uva',
        },
        {
            id: 4,
            value: 'abacaxi',
            label: 'Abacaxi',
        },
        {
            id: 5,
            value: 'maracuja',
            label: 'Maracuja',
        },
        {
            id: 6,
            value: 'banana',
            label: 'Banana',
        },
        {
            id: 7,
            value: 'laranja',
            label: 'Laranja',
        },
        {
            id: 8,
            value: 'pera',
            label: 'Pera',
        },
    ])

    const [selected] = useState([])

    useEffect(() => setTitle('ListBox'))

    const onChange = (data) => {
        console.log(data)
    }

    return (
        <>
            <h1>ListBox</h1>
            <div>
                <ListBox
                    unselected={unselected}
                    selected={selected}
                    onChange={onChange}
                />
            </div>
            <pre>{`<ListBox
    unselected={unselected}
    selected={selected}
    onChange={onChange}
    className="className"
/>`}</pre>
        </>
    )
}

export default ListBoxDemo
