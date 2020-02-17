import React from 'react'
import { classNames } from '../index'
import './Icon.scss'
import account from './icons/account'
import accountGroup from './icons/accountGroup'
import alarm from './icons/alarm'
import arrowDown from './icons/arrowDown'
import arrowLeft from './icons/arrowLeft'
import arrowRight from './icons/arrowRight'
import autoFix from './icons/autoFix'
import calendar from './icons/calendar'
import calendarCheck from './icons/calendarCheck'
import check from './icons/check'
import checkCircleOutline from './icons/checkCircleOutline'
import chevronLeft from './icons/chevronLeft'
import chevronRight from './icons/chevronRight'
import chevronUp from './icons/chevronUp'
import clipboardAlertOutline from './icons/clipboardAlertOutline'
import clipboardCheckOutline from './icons/clipboardCheckOutline'
import clipboardOutline from './icons/clipboardOutline'
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
import minusBoxOutline from './icons/minusBoxOutline'
import openInNew from './icons/openInNew'
import pencil from './icons/pencil'
import plus from './icons/plus'
import plusBoxOutline from './icons/plusBoxOutline'
import printer from './icons/printer'
import progressCheck from './icons/progressCheck'
import refresh from './icons/refresh'
import rss from './icons/rss'
import search from './icons/search'
import sitemap from './icons/sitemap'
import speedometer from './icons/speedometer'
import store from './icons/store'
import timer from './icons/timer'
import transferLeft from './icons/transferLeft'
import transferRight from './icons/transferRight'
import truckCheck from './icons/truckCheck'
import upload from './icons/upload'
import viewDashboard from './icons/viewDashboard'
import viewList from './icons/viewList'
import layers from './icons/layers'
import layersOff from './icons/layersOff'

const icons = {
    account,
    accountGroup,
    alarm,
    arrowDown,
    arrowLeft,
    arrowRight,
    autoFix,
    calendar,
    calendarCheck,
    check,
    checkCircleOutline,
    chevronLeft,
    chevronRight,
    chevronUp,
    clipboardAlertOutline,
    clipboardCheckOutline,
    clipboardOutline,
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
    minusBoxOutline,
    openInNew,
    pencil,
    plus,
    plusBoxOutline,
    printer,
    progressCheck,
    refresh,
    rss,
    search,
    sitemap,
    speedometer,
    store,
    timer,
    transferLeft,
    transferRight,
    truckCheck,
    upload,
    viewDashboard,
    viewList,
    layers,
    layersOff
}

const Icon = ({ className, name, onClick }) => {
    if (!icons[name] || typeof icons[name] !== 'function') throw new Error(`Icon ${name} not installed`)

    return (
        <div className={classNames(className, 'vui-Icon')} onClick={onClick}>
            {icons[name]()}
        </div>
    )
}

export default Icon
