import {useRef, useState} from 'react'

function useDialog() {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  return [
    ref,
    show,
    setShow
  ]
}

export default useDialog
