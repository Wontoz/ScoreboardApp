import React, { useState } from 'react';
import AddPlayerButton from './AddPlayerButton';
import { Row, Col } from 'antd';

const TableHeader = (props) => {

  return (
    <Row className={"row"}>
      <Col span={12}>
        <h1>Scoreboard</h1>
      </Col>
      <Col span={12}>
        <AddPlayerButton action={props.action}></AddPlayerButton>
      </Col>
    </Row>
  )
}

export default TableHeader;