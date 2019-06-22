import React, { useEffect, useState } from 'react'
import { Button, Card, DataTable, Icon } from '../lib'
import useTitle from './useTitle'

const DataTableDemo = () => {
    const [, setTitle] = useTitle()
    useEffect(() => setTitle('Data table'))

    const [list] = useState([
        { id: 1, hero: 'Iron Man', actor: 'Robert Downey Jr.', power: 10 },
        { id: 2, hero: 'Captain America', actor: 'Chris Evans', power: 10 },
        { id: 3, hero: 'Carol Danvers', actor: 'Brie Larson', power: 10 },
        { id: 4, hero: 'Black Widow', actor: 'Scarlett Johansson', power: 10 },
        { id: 5, hero: 'Thor', actor: 'Chris Hemsworth', power: 10 }
    ])

    const handleSortChange = (columns) => {
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
                        <DataTable onSortChange={handleSortChange}>
                            <DataTable.Columns>
                                <DataTable.Column>#</DataTable.Column>
                                <DataTable.Column>Hero</DataTable.Column>
                                <DataTable.Column name='power' rightAligned sortable>Power</DataTable.Column>
                                <DataTable.Column>Actor</DataTable.Column>
                            </DataTable.Columns>
                            <DataTable.Rows>
                                {list.map(item => (
                                    <DataTable.Row key={item.id}>
                                        <DataTable.Cell>{item.id}</DataTable.Cell>
                                        <DataTable.Cell>{item.hero}</DataTable.Cell>
                                        <DataTable.Cell>{item.power}</DataTable.Cell>
                                        <DataTable.Cell>{item.actor}</DataTable.Cell>
                                    </DataTable.Row>
                                ))}
                            </DataTable.Rows>
                        </DataTable>
                    </Card>
                </div>
                <pre>{`<DataTable />`}</pre>
            </>
        </>
    )
}

export default DataTableDemo
