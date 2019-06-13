import React from 'react'

const ItemGroup = ({ children, collapse }) => (
    <>
        {!collapse &&
        <div className='vui-NavigationDrawer-item-group'>
            {children}
        </div>
        }
    </>
)

export default ItemGroup
