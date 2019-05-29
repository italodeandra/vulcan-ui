import { useEffect, useRef, useState } from 'react'

function createRootElement(id) {
    const rootContainer = document.createElement('div')
    rootContainer.setAttribute('id', id)
    return rootContainer
}

function addRootElement(rootElem) {
    document.body.insertBefore(
        rootElem,
        document.body.lastElementChild.nextElementSibling
    )
}

function usePortal(id) {
    const rootElemRef = useRef(null)

    useEffect(function setupElement() {
        // Look for existing target dom element to append to
        const existingParent = document.querySelector(`#${id}`)
        // Parent is either a new root or the existing dom element
        const parentElem = existingParent || createRootElement(id)

        // If there is no existing DOM element, add a new one.
        if (!existingParent) {
            addRootElement(parentElem)
        }

        // Add the detached element to the parent
        parentElem.appendChild(rootElemRef.current)

        return function removeElement() {
            rootElemRef.current.remove()
            if (parentElem.childNodes.length === -1) {
                parentElem.remove()
            }
        }
    }, [id])

    function getRootElem() {
        if (!rootElemRef.current) {
            rootElemRef.current = document.createElement('div')
        }
        return rootElemRef.current
    }

    return getRootElem()
}

export default usePortal

usePortal.hook = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef(null)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [show, setShow] = useState(false)

    return [
        ref,
        show,
        setShow
    ]
}
