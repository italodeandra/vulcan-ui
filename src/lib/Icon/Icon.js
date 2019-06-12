import React from 'react'
import { classNames } from '../index'
import './Icon.scss'
import account from './icons/account'
import accountGroup from './icons/accountGroup'
import checkCircleOutline from './icons/checkCircleOutline'
import close from './icons/close'
import fileChart from './icons/fileChart'
import filterVariant from './icons/filterVariant'
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
    account,
    accountGroup,
    checkCircleOutline,
    close,
    fileChart,
    filterVariant,
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

const Icon = ({ className, name, onClick }) => (
    <div className={classNames(className, 'vui-Icon')} onClick={onClick}>
        {icons[name]()}
    </div>
)

export default Icon
