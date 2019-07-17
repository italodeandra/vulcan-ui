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
        { id: 5, hero: 'Black Widow', actor: 'Scarlett Johansson', power: 10 },
        { id: 6, hero: 'Black Widow', actor: 'Scarlett Johansson', power: 10 },
        { id: 7, hero: 'Black Widow', actor: 'Scarlett Johansson', power: 10 },
        { id: 8, hero: 'Black Widow', actor: 'Scarlett Johansson', power: 10 },
        { id: 9, hero: 'Black Widow', actor: 'Scarlett Johansson', power: 10 },
        { id: 10, hero: 'Black Widow', actor: 'Scarlett Johansson', power: 10 },
        { id: 11, hero: 'Black Widow', actor: 'Scarlett Johansson', power: 10 },
        { id: 12, hero: 'Black Widow', actor: 'Scarlett Johansson', power: 10 },
        { id: 13, hero: 'Black Widow', actor: 'Scarlett Johansson', power: 10 },
        { id: 14, hero: 'Black Widow', actor: 'Scarlett Johansson', power: 10 },
        { id: 15, hero: 'Black Widow', actor: 'Scarlett Johansson', power: 10 },
        { id: 16, hero: 'Black Widow', actor: 'Scarlett Johansson', power: 10 },
        { id: 17, hero: 'Black Widow', actor: 'Scarlett Johansson', power: 10 },
        { id: 18, hero: 'Black Widow', actor: 'Scarlett Johansson', power: 10 },
        { id: 19, hero: 'Black Widow', actor: 'Scarlett Johansson', power: 10 },
        { id: 20, hero: 'Black Widow', actor: 'Scarlett Johansson', power: 10 },
        { id: 21, hero: 'Black Widow', actor: 'Scarlett Johansson', power: 10 },
        { id: 22, hero: 'Black Widow', actor: 'Scarlett Johansson', power: 10 },
        { id: 23, hero: 'Black Widow', actor: 'Scarlett Johansson', power: 10 },
        { id: 24, hero: 'Thor', actor: 'Chris Hemsworth', power: 10 }
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
                        <DataTable onSortChange={handleSortChange} style={{ height: 400 }}>
                            <DataTable.Columns sticky>
                                <DataTable.Column>#</DataTable.Column>
                                <DataTable.Column>Hero</DataTable.Column>
                                <DataTable.Column name='power' rightAligned sortable>Power</DataTable.Column>
                                <DataTable.Column>Actor</DataTable.Column>
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
                                    <DataTable.Cell>10</DataTable.Cell>
                                    <DataTable.Cell>10</DataTable.Cell>
                                    <DataTable.Cell>10</DataTable.Cell>
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
