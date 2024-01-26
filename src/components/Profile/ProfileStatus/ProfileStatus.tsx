import React, {ChangeEvent, LegacyRef, RefObject} from 'react';

type Props = {
    status: string
    updateProfileStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<Props> {
    statusInputRef = React.createRef<HTMLInputElement>()

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({editMode: true})
        // this.forceUpdate()
    }
    deactivateEditMode = () => {
        this.setState({editMode: false})
        // if (this.statusInputRef.current?.value) this.props.updateProfileStatus(this.statusInputRef.current.value)
        this.props.updateProfileStatus(this.state.status)
    }
    onSubmitStatus = () => {
        debugger
        // if (this.statusInputRef.current?.value) this.props.updateProfileStatus(this.statusInputRef.current.value)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    render() {

        return (
            <div>
                {!this.state.editMode && <div onDoubleClick={this.activateEditMode}>
                    <span>{this.props.status || 'Enter you status'}</span>
                </div>}
                {this.state.editMode && <div onBlur={() => this.deactivateEditMode()}>
                    <input value={this.state.status}
                           onChange={this.onStatusChange}
                           // ref={this.statusInputRef}
                           autoFocus={true} type="text" placeholder={'Enter your status'}/>
                    <button onClick={this.onSubmitStatus}>Send</button>
                </div>}
            </div>
        );
    }
}

