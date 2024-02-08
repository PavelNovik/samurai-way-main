import React, {ChangeEvent, useEffect, useState} from 'react';

type Props = {
    status: string
    updateProfileStatus: (status: string) => void
}

export const ProfileStatusFC = (props: Props) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateProfileStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    const onSubmitStatus = () => {
        props.updateProfileStatus(status)
    }

    return (
        <div>
            {!editMode && <div onDoubleClick={activateEditMode}>
                <span>{props.status || 'Enter you status'}</span>
            </div>}
            {editMode && <div onBlur={() => deactivateEditMode()}>
                <input value={status}
                       onChange={onStatusChange}
                    // ref={this.statusInputRef}
                       autoFocus={true} type="text" placeholder={'Enter your status'}/>
                <button onClick={onSubmitStatus}>Send</button>
            </div>}
        </div>
    );

}

