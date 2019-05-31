import React from 'react'
import './Icon.scss'
import accountGroup from './icons/accountGroup'
import checkCircleOutline from './icons/checkCircleOutline'
import fileChart from './icons/fileChart'
import formatListCheckbox from './icons/formatListCheckbox'
import home from './icons/home'
import link from './icons/link'
import menu from './icons/menu'
import openInNew from './icons/openInNew'
import plus from './icons/plus'
import progressCheck from './icons/progressCheck'
import sitemap from './icons/sitemap'
import speedometer from './icons/speedometer'

const icons = {
    accountGroup,
    checkCircleOutline,
    fileChart,
    formatListCheckbox,
    home,
    link,
    menu,
    openInNew,
    plus,
    progressCheck,
    sitemap,
    speedometer
}

const Icon = ({ name }) => (
    <div className='vui-Icon'>
        {icons[name]()}
    </div>
)

export default Icon
