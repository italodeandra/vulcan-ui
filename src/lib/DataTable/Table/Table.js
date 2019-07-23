import React, { useEffect, useRef } from 'react'

const Table = ({children, sticky, style}) => {
    const ref = useRef(null);

    useEffect(() => {
        if (sticky) {
            function handleResize() {
                let offsetTop = ref.current.offsetTop;
                let pageSize = window.innerHeight;
        
                if (offsetTop + ref.current.scrollHeight >= pageSize) {
                    ref.current.style.height = `${pageSize - offsetTop}px`;
                }
            }

            handleResize();
            window.addEventListener("resize", handleResize);    
            
            return () =>  window.removeEventListener("resize", handleResize); 
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