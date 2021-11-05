import React from 'react';
import AddPlayerButton from './AddPlayerButton';
import { Row, Col } from 'antd';

const TableHeader = (props) => {

  //Sends handleNewPlayer to AddPlayerButton, where the function will be executed after a "Yes"-click (AddPlayerButton contains a modal)
  return (
    <Row className={"row"}>
      <Col span={12}>
        <h2>Scoreboard</h2>
      </Col>
      <Col span={12}>
        <AddPlayerButton action={props.action}/>
      </Col>
    </Row>
  )
}

export default TableHeader;