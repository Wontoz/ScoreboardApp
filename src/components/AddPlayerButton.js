import React from 'react';
import { Modal, Button } from 'antd';

const AddPlayerButton = () => {
    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const hideModal = () => {
        setIsModalVisible(false);
    };
    
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Add player
            </Button>
            <Modal title="Add player" visible={isModalVisible} onOk={hideModal} onCancel={hideModal}>
                <p>Name...</p>
                <p>Wins...</p>
                <p>Losses...</p>
            </Modal>
        </>
    )
}

export default AddPlayerButton;