import React, { useContext, useLayoutEffect, useRef, useState } from "react";
import { Context } from "../DataTable";
import { Button, Icon } from "../..";

const SearchRow = () => {

    const ref = useRef(null);
    const [elements, setElements] = useState([])
    const { columns, setColumns, onSearchChange } = useContext(Context)

    useLayoutEffect(() => {
        let searchColumns = ref.current.previousSibling.querySelectorAll(".vui-DataTable-Column")

        searchColumns.forEach(column => {
            let columnName = column.getAttribute("name")

            if (column.classList.contains("search")) {
                setColumns(c => ({ ...c, [columnName]: {...c[columnName]} }))
                setElements(elements => [ ...elements, {name: columnName, input: true} ])
            } else {
                setElements(elements => [...elements, {}])
            }
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleChange({ target }) {
        setColumns(c => {
            let column = {
                ...c,
                [target.name]: {...c[target.name], query: target.value}
            };

            onSearchChange && onSearchChange(column)
            return column
        });
    }

    const inputProps = {
        onChange: handleChange,
        className: "vui-DataTable-SearchRow-Input input"
    }

    const input = (key) => {
        if (columns[key] && columns[key].searchCustomInput) {
            return columns[key].searchCustomInput({ 
                ...inputProps, 
                name: key,
                value: columns[key].query || ""
            })
        }

        return (
            <>
                <input {...inputProps} name={key} value={columns[key] && columns[key].query} />
                <Button className="vui-DataTable-SearchRow-Button" icon onClick={() => onSearchChange(columns)}>
                    <Icon name='search' />
                </Button>
            </>
        )
    }

    return (
        <tr className="vui-DataTable-Columns vui-DataTable-SearchRow" ref={ref}>
            {elements.map((element, index) => {
                return (
                    <td className="vui-DataTable-SearchRow-Cell vui-DataTable-Cell" key={index}>
                        {element.input && input(element.name)}
                    </td>
                )
            })}
        </tr>
    );
}

export default SearchRow;