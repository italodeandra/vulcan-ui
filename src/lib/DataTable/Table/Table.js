import React, {useContext, useLayoutEffect, useRef} from 'react'
import {Context} from '../DataTable'

const Table = ({children, sticky, style}) => {
    const ref = useRef(null);
    const {filter} = useContext(Context)

    useLayoutEffect(() => {
        if (sticky) {
            function handleResize() {
                let offsetTop = ref.current.offsetTop;
                let pageSize = window.innerHeight;

                    let height = pageSize - offsetTop;

                    let pagination = ref.current.parentNode.querySelector(".vui-DataTablePagination");
                    if(pagination) {
                        height -= pagination.scrollHeight + 8
                    }

                    ref.current.style.height = `${height}px`;
            }

            handleResize();
            window.addEventListener("resize", handleResize);

            return () =>  {
                window.removeEventListener("resize", handleResize)
            };
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter])

    return (
        <div className='vui-DataTable-overflow' ref={ref} style={style}>
            <table className='vui-DataTable-Table'>
                {children}
            </table>
        </div>
    )
}

export default Table
