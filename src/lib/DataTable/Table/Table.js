import React, { useLayoutEffect, useRef } from 'react'

const Table = ({children, sticky, style}) => {
    const ref = useRef(null);

    useLayoutEffect(() => {
        if (sticky) {
            function handleResize() {
                let offsetTop = ref.current.offsetTop;
                let pageSize = window.innerHeight;

                if (offsetTop + ref.current.scrollHeight >= pageSize) {
                    let height = pageSize - offsetTop;

                    let pagination = ref.current.parentNode.querySelector(".vui-DataTablePagination");
                    if(pagination) {
                        height -= pagination.scrollHeight + 8
                    }

                    ref.current.style.height = `${height}px`;
                }
            }

            handleResize();
            window.addEventListener("resize", handleResize);
            
            return () =>  {
                window.removeEventListener("resize", handleResize)
            };
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='vui-DataTable-overflow' ref={ref} style={style}>
            <table className='vui-DataTable-Table'>
                {children}
            </table>
        </div>
    )
}

export default Table