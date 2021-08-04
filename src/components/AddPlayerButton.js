import React, { Component} from 'react';
import { Modal, Button, Input } from 'antd';

class AddPlayerButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            isModalVisible: false,
            playerName: (''),
            newPlayer: [{ key: 5, participant: this.playerName, wins: 0, losses: 0},]
        };
    }

    showModal(){
        this.setState({isModalVisible: true})
    }

    hideModal(){
        this.setState({isModalVisible: false})
    } 
    changePlayerName(e) {
        this.setState({playerName: e.target.value})
    }
    handleNewPlayer() {
        this.props.action(this.state.playerName);
        this.hideModal();
    }

    render(){
        return (
            <>
                <Button type="primary" onClick={this.showModal.bind(this)}>
                    Add Person
                </Button>
                <Modal title="Add player" visible={this.state.isModalVisible} onOk={this.handleNewPlayer.bind(this)} onCancel={this.hideModal.bind(this)}>
                    <Input size="large" placeholder="Enter name:" onChange={this.changePlayerName.bind(this)}/>
                </Modal>
            </>
        )
    }
}
export default AddPlayerButton;