import React, {useEffect, useState} from 'react'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {Button, Card, DataTable, Icon, PrettyJson} from '../lib'
import useTitle from './useTitle'

const DataTableDemo = () => {
    const [filter, ] = useState({
        "pagination": {
            "rowsPerPage": 10,
            "page": 2
        },
        "columns": {
            "hero": {
                "direction": null
            },
            "power": {
                "direction": null
            },
            "id": {
                "query": "teste"
            },
            "actor": {}
        }
    })
    const [, setTitle] = useTitle()
    useEffect(() => setTitle('Data table'))

    const [list, setList] = useState([
        {id: 1, hero: 'Iron Man', actor: 'Robert Downey Jr.', power: 10},
        {id: 2, hero: 'Captain America', actor: 'Chris Evans', power: 10},
        {id: 3, hero: 'Carol Danvers', actor: 'Brie Larson', power: 10},
        {id: 4, hero: 'Black Widow', actor: 'Scarlett Johansson', power: 10},
        {id: 5, hero: 'Thor', actor: 'Chris Hemsworth', power: 10},
        {id: 6, hero: 'Iron Man', actor: 'Robert Downey Jr.', power: 10},
        {id: 7, hero: 'Captain America', actor: 'Chris Evans', power: 10},
        {id: 8, hero: 'Carol Danvers', actor: 'Brie Larson', power: 10},
        {id: 9, hero: 'Black Widow', actor: 'Scarlett Johansson', power: 10},
        {id: 10, hero: 'Thor', actor: 'Chris Hemsworth', power: 10},
        {id: 11, hero: 'Iron Man', actor: 'Robert Downey Jr.', power: 10},
        {id: 12, hero: 'Captain America', actor: 'Chris Evans', power: 10},
        {id: 13, hero: 'Carol Danvers', actor: 'Brie Larson', power: 10},
        {id: 14, hero: 'Black Widow', actor: 'Scarlett Johansson', power: 10},
        {id: 15, hero: 'Thor', actor: 'Chris Hemsworth', power: 10},
        {id: 16, hero: 'Iron Man', actor: 'Robert Downey Jr.', power: 10},
        {id: 17, hero: 'Captain America', actor: 'Chris Evans', power: 10},
        {id: 18, hero: 'Carol Danvers', actor: 'Brie Larson', power: 10},
        {id: 19, hero: 'Black Widow', actor: 'Scarlett Johansson', power: 10},
        {id: 20, hero: 'Thor', actor: 'Chris Hemsworth', power: 10},
        {id: 21, hero: 'Iron Man', actor: 'Robert Downey Jr.', power: 10},
        {id: 22, hero: 'Captain America', actor: 'Chris Evans', power: 10},
        {id: 23, hero: 'Carol Danvers', actor: 'Brie Larson', power: 10},
        {id: 24, hero: 'Black Widow', actor: 'Scarlett Johansson', power: 10},
        {id: 25, hero: 'Thor', actor: 'Chris Hemsworth', power: 10},
    ])

    const handleChangeCell = (list, item, property, newValue) => {
        const newList = [...list]
        const newItem = newList.find(i => i === item)
        newItem[property] = newValue
        setList(newList)
    }

    const handleFilterChange = (filter) => {
        console.info(JSON.stringify(filter))
    }

    return (
        <>
            <h1>Data table</h1>
            <>
                <div>
                    <Card>
                        <DataTable
                            onFilterChange={handleFilterChange}
                            filter={filter}
                        >
                            <DataTable.Header>
                                Data table header
                                <Button icon onClick={() => alert('Filter button clicked')}
                                        style={{marginLeft: 'auto'}}>
                                    <Icon name='filterVariant'/>
                                </Button>
                            </DataTable.Header>
                            <DataTable.Table sticky>
                                <DataTable.Columns sticky>
                                    <DataTable.Column name="id" search>#</DataTable.Column>
                                    <DataTable.Column
                                        name="hero"
                                        search
                                        sortable
                                        //   searchCustomInput={(props) => <select {...props}>
                                        //       <option value='Iron Man'>Iron Man</option>
                                        //   </select>}
                                        searchCustomInput={isTrue ? (props) => <DatePicker
                                            {...props}
                                            name="openedAt"
                                            selected={props.value}
                                        /> : false}
                                    >
                                        Hero
                                    </DataTable.Column>
                                    <DataTable.Column name='power' search rightAligned sortable>Power</DataTable.Column>
                                    <DataTable.Column search name='actor'>Actor</DataTable.Column>
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
                            </DataTable.Table>
                            <DataTable.Pagination
                                rowsPerPageOptions={[10, 25, 50, 100]}
                                rowsPerPage={25}
                                page={1}
                                count={80}
                            />
                        </DataTable>
                    </Card>
                </div>
                <PrettyJson json={list}/>
                <pre>{`<DataTable />`}</pre>
            </>
        </>
    )
}

export default DataTableDemo
