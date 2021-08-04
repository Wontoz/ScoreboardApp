import React from 'react';
import { Table, Button, Row, Col} from 'antd';
import AddPlayerButton from './AddPlayerButton';

class TableBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players : [
        { key: 1, participant: 'Player 1', wins: 1337, losses: 0},
        { key: 2, participant: 'Player 2', wins: 1337, losses: 0},
        { key: 3, participant: 'Player 3', wins: 1337, losses: 0},
      ],
      columns: [
        {
          title: 'Participants',
          dataIndex: 'participant',
          key: 'participant',
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
            <Button onClick ={this.handleDeleteRow.bind(this, record.key)}>
              Delete {record.key}
            </Button>
          ),
        },
      ]
    }
  }

  handleDeleteRow(key) {
    const {players} = this.state;
    const newPlayers = players.filter((item) => item.key !== key);
    this.setState({players: newPlayers})
  }
  
  render() {
    return(
      <>
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
                <AddPlayerButton players={this.state.players}></AddPlayerButton>
            </Col>
        </Row>
        <Table columns={this.state.columns} dataSource={this.state.players} pagination={false} ></Table>
      </>
    );
  }
}

export default TableBody;