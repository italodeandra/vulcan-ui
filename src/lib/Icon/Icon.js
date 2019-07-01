import React from 'react'
import { classNames } from '../index'
import './Icon.scss'
import account from './icons/account'
import accountGroup from './icons/accountGroup'
import arrowDown from './icons/arrowDown'
import autoFix from './icons/autoFix'
import calendar from './icons/calendar'
import checkCircleOutline from './icons/checkCircleOutline'
import chevronUp from './icons/chevronUp'
import close from './icons/close'
import compass from './icons/compass'
import fileChart from './icons/fileChart'
import filterVariant from './icons/filterVariant'
import fire from './icons/fire'
import formatListCheckbox from './icons/formatListCheckbox'
import home from './icons/home'
import libraryShelves from './icons/libraryShelves'
import link from './icons/link'
import menu from './icons/menu'
import openInNew from './icons/openInNew'
import plus from './icons/plus'
import progressCheck from './icons/progressCheck'
import rss from './icons/rss'
import sitemap from './icons/sitemap'
import speedometer from './icons/speedometer'
import eye from './icons/eye'
import eyeOff from './icons/eyeOff'

const icons = {
    account,
    accountGroup,
    arrowDown,
    autoFix,
    calendar,
    checkCircleOutline,
    chevronUp,
    close,
    compass,
    eye,
    eyeOff,
    fileChart,
    filterVariant,
    fire,
    formatListCheckbox,
    home,
    libraryShelves,
    link,
    menu,
    openInNew,
    plus,
    progressCheck,
    rss,
    sitemap,
    speedometer
}

const Icon = ({ className, name, onClick }) => (
    <div className={classNames(className, 'vui-Icon')} onClick={onClick}>
        {icons[name]()}
    </div>
)

export default Icon
