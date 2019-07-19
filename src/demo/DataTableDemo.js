import React, { useEffect, useState } from 'react'
import { Button, Card, DataTable, Icon, PrettyJson } from '../lib'
import useTitle from './useTitle'

const DataTableDemo = () => {
    const [, setTitle] = useTitle()
    useEffect(() => setTitle('Data table'))

    const [list, setList] = useState([
        { id: 1, hero: 'Iron Man', actor: 'Robert Downey Jr.', power: 10 },
        { id: 2, hero: 'Captain America', actor: 'Chris Evans', power: 10 },
        { id: 3, hero: 'Carol Danvers', actor: 'Brie Larson', power: 10 },
        { id: 4, hero: 'Black Widow', actor: 'Scarlett Johansson', power: 10 },
        { id: 5, hero: 'Thor', actor: 'Chris Hemsworth', power: 10 }
    ])

    const handleSortChange = (columns) => {
        console.log(columns)
    }

    const handleChangeCell = (list, item, property, newValue) => {
        const newList = [...list]
        const newItem = newList.find(i => i === item)
        newItem[property] = newValue
        setList(newList)
    }

    const handleSearchChange = (columns) => {
        console.log(columns)
    }

    return (
        <>
            <h1>Data table</h1>
            <>
                <div>
                    <Card>
                        <DataTable.Header>
                            Data table header
                            <Button icon onClick={() => alert('Filter button clicked')} style={{ marginLeft: 'auto' }}>
                                <Icon name='filterVariant' />
                            </Button>
                        </DataTable.Header>
                        <DataTable onSortChange={handleSortChange} onSearchChange={handleSearchChange} sticky>
                            <DataTable.Columns sticky>
                                <DataTable.Column>#</DataTable.Column>
                                <DataTable.Column name="hero" search sortable
                                    // searchCustomInput={(props) => <input {...props} type="text"/>}
                                >
                                    Hero
                                </DataTable.Column>
                                <DataTable.Column name='power' search rightAligned sortable>Power</DataTable.Column>
                                <DataTable.Column >Actor</DataTable.Column>
                            </DataTable.Columns>
                            <DataTable.Rows>
                                {list.map(item => (
                                    <DataTable.Row key={item.id}>
                                        <DataTable.Cell>{item.id}</DataTable.Cell>
                                        <DataTable.Cell
                                            editable='always'
                                            onChange={(newValue) => handleChangeCell(list, item, 'hero', newValue)}
                                        >{item.hero}</DataTable.Cell>
                                        <DataTable.Cell>{item.power}</DataTable.Cell>
                                        <DataTable.Cell>{item.actor}</DataTable.Cell>
                                    </DataTable.Row>
                                ))}
                            </DataTable.Rows>
                            <DataTable.Footer sticky>
                                <DataTable.Row>
                                    <DataTable.Cell bold>Total</DataTable.Cell>
                                    <DataTable.Cell></DataTable.Cell>
                                    <DataTable.Cell>50</DataTable.Cell>
                                    <DataTable.Cell></DataTable.Cell>
                                </DataTable.Row>
                            </DataTable.Footer>
                        </DataTable>
                    </Card>
                </div>
                <PrettyJson json={list} />
                <pre>{`<DataTable />`}</pre>
            </>
        </>
    )
}

export default DataTableDemo
