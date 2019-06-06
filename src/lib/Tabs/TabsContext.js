import { createContext, useState } from 'react'

const TabsContext = (initialPage) => {
    const [currentPage, setCurrentPage] = useState(initialPage)

    return createContext({
        currentPage,
        setCurrentPage
    })
}

export default TabsContext
