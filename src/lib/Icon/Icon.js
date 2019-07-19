import React from 'react'
import {classNames} from '../index'
import './Icon.scss'
import account from './icons/account'
import accountGroup from './icons/accountGroup'
import alarm from './icons/alarm'
import arrowDown from './icons/arrowDown'
import arrowRight from './icons/arrowRight'
import autoFix from './icons/autoFix'
import calendar from './icons/calendar'
import calendarCheck from './icons/calendarCheck'
import check from './icons/check'
import checkCircleOutline from './icons/checkCircleOutline'
import chevronUp from './icons/chevronUp'
import clipboardCheckOutline from './icons/clipboardCheckOutline'
import close from './icons/close'
import compass from './icons/compass'
import contentSave from './icons/contentSave'
import deletee from './icons/deletee'
import eye from './icons/eye'
import eyeOff from './icons/eyeOff'
import fileChart from './icons/fileChart'
import fileTable from './icons/fileTable'
import fileUpload from './icons/fileUpload'
import filterVariant from './icons/filterVariant'
import fire from './icons/fire'
import formatListCheckbox from './icons/formatListCheckbox'
import home from './icons/home'
import libraryShelves from './icons/libraryShelves'
import link from './icons/link'
import menu from './icons/menu'
import openInNew from './icons/openInNew'
import plus from './icons/plus'
import printer from './icons/printer'
import progressCheck from './icons/progressCheck'
import refresh from './icons/refresh'
import rss from './icons/rss'
import search from './icons/search'
import sitemap from './icons/sitemap'
import speedometer from './icons/speedometer'
import store from './icons/store'
import truckCheck from './icons/truckCheck'
import upload from './icons/upload'

const icons = {
    account,
    accountGroup,
    alarm,
    arrowDown,
    arrowRight,
    autoFix,
    calendar,
    calendarCheck,
    check,
    checkCircleOutline,
    chevronUp,
    clipboardCheckOutline,
    close,
    compass,
    contentSave,
    'delete': deletee,
    eye,
    eyeOff,
    fileChart,
    fileTable,
    fileUpload,
    filterVariant,
    fire,
    formatListCheckbox,
    home,
    libraryShelves,
    link,
    menu,
    openInNew,
    plus,
    printer,
    progressCheck,
    refresh,
    rss,
    search,
    sitemap,
    speedometer,
    store,
    truckCheck,
    upload,
}

const Icon = ({className, name, onClick}) => {
    if (!icons[name] || typeof icons[name] !== 'function') throw new Error(`Icon ${name} not installed`)

    return (
        <div className={classNames(className, 'vui-Icon')} onClick={onClick}>
            {icons[name]()}
        </div>
    )
}

export default Icon
