import React from 'react';
import { Table, Button, Row, Col } from 'antd';
import AlterScoreModal from './AlterScoreModal';
import AddPlayerButton from './AddPlayerButton';

class TableBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      players: [
        { key: 0, participant: 'Player 1', wins: 5, losses: 0 },
        { key: 1, participant: 'Player 2', wins: 4, losses: 0 },
        { key: 2, participant: 'Player 3', wins: 3, losses: 0 },
      ],
      columns: [
        {
          title: 'Participants',
          dataIndex: 'participant',
          key: 'participant',
          defaultSortOrder: 'descend',
          sorter: (a, b) => (a.wins - a.losses) - (b.wins - b.losses), 
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
          render: (key, record) => (
            <AlterScoreModal scoreType="wins" key={record.key} action={this.handleWinIncrease.bind(this, record.key)}></AlterScoreModal>
          )
        },
        {
          title: 'Add loss',
          dataIndex: 'addLoss',
          key: 'addLoss',
          render: (key, record,) => (
            <AlterScoreModal scoreType="losses" key={record.key} action={this.handleLossIncrease.bind(this, record.key)}></AlterScoreModal>
          )
        },
        {
          title: 'Delete',
          key: 'delete',
          render: (key, record) => (
            <Button onClick={this.handleDeleteRow.bind(this, record.key)}>
              Delete {record.key}
            </Button>
          ),
        },
      ],
    }
  }

  //Increment wins at a specific row, determined by the key variable
  handleWinIncrease(playerKey) {
    const newArr = this.state.players.slice()
    newArr[playerKey].wins++;
    this.setState({ players: newArr })
  }

  //Increment losses at a specific row, determined by the key variable
  handleLossIncrease(playerKey) {
    const newArr = this.state.players.slice()
    newArr[playerKey].losses++;
    this.setState({ players: newArr })
  }
  
  //Updates keys after performed deletion
  //E.g. if row 5 is deleted:
  //Row 6 key is updated from 6 --> 5
  //Row 7 key is updated from 7 --> 6 etc.
  updateTable(key) {
    const newArr = this.state.players.slice()
    const length = newArr.length;
    for(let i = key; i < length; i++){
      newArr[i].key--; 
    };
  }

  //Delete a specific row, determined by the key variable
  handleDeleteRow(key) {
    const { players } = this.state;
    const newPlayers = players.filter((item) => item.key !== key);
    this.setState({ players: newPlayers })
    this.updateTable(key);
  }

  //Add new player to table by manipulating the player-state and adding a new row
  handleNewPlayer(input) {
    const { players } = this.state;
    const newPlayerStat = [{ key: (players.length), participant: input, wins: 0, losses: 0 }]
    const joined = this.state.players.concat(newPlayerStat);
    this.setState({ players: joined })
  }

  render() {
    return (
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
            <AddPlayerButton action={this.handleNewPlayer.bind(this)}></AddPlayerButton>
          </Col>

        </Row>
        <Table columns={this.state.columns} dataSource={this.state.players} pagination={false} ></Table>
      </>
    );
  }
}

export default TableBody;