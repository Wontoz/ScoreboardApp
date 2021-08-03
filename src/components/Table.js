import React from 'react';
import { Table, Button} from 'antd';
import ArrowUpOutlined from '@ant-design/icons';
import { Content } from 'antd/lib/layout/layout';

const columns = [
  {
    title: 'Participants',
    dataIndex: 'participant',
    key: 'participant',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Wins',
    dataIndex: 'wins',
    key: 'wins',
  },
  {
    title: 'Losses',
    dataIndex: 'losses',
    key: 'losses',
  },
  {
    title: 'Add Win',
    dataIndex: 'addWin',
    key: 'addWin',
    render: (record) => (
      <span>
        <p>Add win</p>
      </span>
    )
  },
  {
    title: 'Add loss',
    dataIndex: 'addLoss',
    key: 'addLoss',
    render: (record) => (
      <span>
        <p>Add loss</p>
      </span>
    )
  },
  {
    title: 'Delete',
    key: 'delete',
    render: (key, record) => (
      <Button>
            Delete {record.key}
      </Button>
    ),
  },
];

const data = [
  {
    key: '1',
    participant: 'William Isaksson',
    wins: 20,
    losses: 0,
  },
  {
    key: '2',
    participant: 'Christian Elmhäll',
    wins: 0,
    losses: 20,
  },
  {
    key: '3',
    participant: 'Gustav Svensson',
    wins: 10,
    losses: 10,
  }
];

const TableBody = () => {
    return(
            <Table columns={columns} dataSource={data} pagination={false} ></Table>
    )
}

export default TableBody;