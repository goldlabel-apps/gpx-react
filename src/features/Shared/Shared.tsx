import React from 'react'
import {
    useFeatureSelect,
} from "./store/hooks"
import {
    selectShared,
} from "./store/slice"
import {
    Confirm,
    Notifyer,
    NewItem,
    EditDrawer,
} from "./"

export default function Shared() {
    
    const shared = useFeatureSelect(selectShared);
    const {newItem, editing, notifying, confirming} = shared

    return (
            <React.Fragment> 
                { newItem ? <NewItem /> : null }
                { editing ? <EditDrawer /> : null }
                { confirming ? <Confirm /> : null }
                { notifying ? <Notifyer /> : null }
            </React.Fragment>
    )
}
