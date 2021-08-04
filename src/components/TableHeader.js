import React from 'react';
import { Col, Row} from 'antd';
import AddPlayerButton from './AddPlayerButton';

const TableHeader = (data) => {
    
    const body = (
        <Row style={{
            padding: '5px',
            marginTop: '15px',
            textAlign: 'center',
            border: '1px solid black'
        }}>
            <Col span={12}>
                <h1>Scoreboard</h1>
            </Col>
            <Col span={12}>
                <AddPlayerButton></AddPlayerButton>
            </Col>
        </Row>
    );

    return (
        <div>
            {body}
        </div>
    )
}

export default TableHeader;