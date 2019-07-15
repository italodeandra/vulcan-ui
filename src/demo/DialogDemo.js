import React, {useEffect} from 'react'
import {Button, Dialog, useDialog} from '../lib'
import useTitle from './useTitle'

const DialogDemo = () => {
    const [, setTitle] = useTitle()
    useEffect(() => setTitle('Dialog'))

    const [dialog1Ref, dialog1Show, dialog1SetShow] = useDialog()

    return (
        <>
            <h1>Dialog</h1>
            <div>
                <Button
                    setRef={dialog1Ref}
                    onClick={() => dialog1SetShow(s => !s)}
                >Show dialog</Button>
                {dialog1Show &&
                <Dialog target={dialog1Ref} onClickOutside={() => dialog1SetShow(false)}>
                    <Dialog.Title>Test title</Dialog.Title>
                    <Dialog.Content>
                        Dialog item
                    </Dialog.Content>
                    <Dialog.Actions alignRight>
                        <Button autoFocus text onClick={() => dialog1SetShow(false)}>Close</Button>
                        <Button>Action</Button>
                    </Dialog.Actions>
                </Dialog>
                }
            </div>
            <pre>{``}</pre>
        </>
    )
}

export default DialogDemo
