import {useRef, useState} from 'react'

function useMenu() {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  return [
    ref,
    show,
    setShow
  ]
}

export default useMenu
