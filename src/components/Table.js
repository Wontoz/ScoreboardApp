import React from 'react';
import { Table, Button, Row, Col, Modal, Input } from 'antd';

class TableBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
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
            <p onClick={this.handleWinIncrease.bind(this, record.key)}>
              Add win to player {record.key}
            </p>
          )
        },
        {
          title: 'Add loss',
          dataIndex: 'addLoss',
          key: 'addLoss',
          render: (key, record,) => (
            <p onClick={this.handleLossIncrease.bind(this, record.key)}>
              Add loss to player {record.key}
            </p>
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
      isModalVisible: false,
      playerName: ('')
    }
  }

  handleWinIncrease(playerKey) {
    const newArr = this.state.players.slice()
    newArr[playerKey].wins++;
    this.setState({ players: newArr })
  }

  handleLossIncrease(playerKey) {
    const newArr = this.state.players.slice()
    newArr[playerKey].losses++;
    this.setState({ players: newArr })
  }


  handleDeleteRow(key) {
    const { players } = this.state;
    const newPlayers = players.filter((item) => item.key !== key);
    this.setState({ players: newPlayers })
  }

  showModal() {
    this.setState({ isModalVisible: true })
  }

  hideModal() {
    this.setState({ isModalVisible: false })
  }
  changePlayerName(e) {
    this.setState({ playerName: e.target.value })
  }

  //Denna ska parent node ha
  addPlayer() {
    const { players } = this.state;
    const newPlayerStat = [{ key: (players.length), participant: this.state.playerName, wins: 0, losses: 0 }]
    const joined = this.state.players.concat(newPlayerStat);
    this.setState({ players: joined })
    this.hideModal();
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
            <Button type="primary" onClick={this.showModal.bind(this)}>
              Add Person
            </Button>
            <Modal title="Add player" visible={this.state.isModalVisible} onOk={this.addPlayer.bind(this)} onCancel={this.hideModal.bind(this)}>
              <Input size="large" placeholder="Enter name:" onChange={this.changePlayerName.bind(this)} />
            </Modal>
          </Col>

        </Row>
        <Table columns={this.state.columns} dataSource={this.state.players} pagination={false} ></Table>
      </>
    );
  }
}

export default TableBody;