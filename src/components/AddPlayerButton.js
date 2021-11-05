import React, { useState } from 'react';
import { Button, Modal, Input } from 'antd';

//Module that's displayed when user clicks on the "Add Person"-button
const AddPlayerButton = (props) => {

    //A state is used to determine if modal should be displayed
    let [isVisible, setVisible] = useState(false);
    let [playerName, setPlayerName] = useState('');

    function showModal() {
        setVisible(true);
    };

    function hideModal() {
        setVisible(false);
    };

    //Update name-variable on input change
    function handleInputChange(e) {
        setPlayerName(e.target.value);
    };

    //Add player by sending the input value of the modal to function handleNewPlayer.
    function handleAddClick() {
        props.action(playerName);
        hideModal();
    }

    return (
        <>
            <Button className={"Btn-green"} onClick={showModal}>
                Add Participant
            </Button>
            <Modal
                title="Add participant"
                visible={isVisible}
                onCancel={hideModal}
                footer={[
                    <Button className={"Btn-red"} onClick={hideModal}>Cancel</Button>,
                    <Button className={"Btn-green"} onClick={handleAddClick}>Add</Button>
                ]}>
                <Input size="large" placeholder="Enter name:" onChange={handleInputChange} />
            </Modal>
        </>
    )
}

export default AddPlayerButton;