import React from 'react';

type Props = {
    status: string
}

export class ProfileStatus extends React.Component<Props> {

    state = {
        editMode: false
    }
    activateEditMode = () => {
        this.setState({editMode: true})
        // this.forceUpdate()
    }
    deactivateEditMode = () => {
        this.setState({editMode: false})
    }

    render() {

        return (
            <div>
                {!this.state.editMode && <div onDoubleClick={this.activateEditMode}>
                    <span>{this.props.status}</span>
                </div>}
                {this.state.editMode && <div onBlur={() => this.deactivateEditMode()}>
                    <input autoFocus={true} type="text" placeholder={'Enter your status'}/>
                    <button>Send</button>
                </div>}
            </div>
        );
    }
}

