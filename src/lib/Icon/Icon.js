import React from 'react'
import home from './icons/home'
import menu from './icons/menu'
import './Icon.scss'

const icons = {
    home,
    menu
}

const Icon = ({ name }) => (
    <div className='vui-Icon'>
        {icons[name]()}
    </div>
)

export default Icon
