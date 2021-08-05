import React, { useState } from 'react';
import { Modal } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

//Module that's displayed when user clicks on either arrow that alters a player's score
const AlterScoreModal = (props) => {

    //A state is used to determine if modal should be displayed
    let [isVisible, setVisible] = useState(false);

    function showModal() {
        setVisible(true);
    };

    function hideModal() {
        setVisible(false);
    };

    //Update table using the funciton parameter that was sent in Table.js
    function handleValueChange() {
        props.action();
        hideModal();
    }
    let icon;
    if(props.scoreType ==='wins'){
        icon = <ArrowUpOutlined onClick={showModal}></ArrowUpOutlined>
    } else if(props.scoreType === 'losses'){
        icon = <ArrowDownOutlined onClick={showModal}></ArrowDownOutlined>;
    };
    
    let body =
        <Modal
            title="Alter score"
            visible={isVisible}
            onCancel={hideModal}
            onOk={handleValueChange}
            closable={false}
            okText="Yes"
            cancelText="No"
        >Are you sure you want to adjust the {props.scoreType} for this player?
        </Modal>;

    return (
        <>
            {icon}
            {body}
        </>
    )
}

export default AlterScoreModal;