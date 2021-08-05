import React from 'react';
import { Table, Button, Row, Col, Modal, Input } from 'antd';

class TableBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditModalVisible: false,
      playerToEdit: '',
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
            <>
            <p onClick={this.showEditModal.bind(this, record.key)}>
              Add win to player {record.key}
            </p>
            <Modal
            title="Alter score"
            visible={this.state.isEditModalVisible}
            onCancel={this.hideEditModal.bind(this)}
            onOk={this.handleWinIncrease.bind(this, this.state.playerToEdit)}
            closable={false}
            okText="Yes"
            cancelText="No"
            >Are you sure you want to adjust the score for player {this.state.playerToEdit}?
            </Modal>
            </>
          )
        },
        {
          title: 'Add loss',
          dataIndex: 'addLoss',
          key: 'addLoss',
          render: (key, record,) => (
            <>
            <p onClick={this.showEditModal.bind(this, record.key)}>
              Add win to player {record.key}
            </p>
            <Modal
            title="Alter score"
            visible={this.state.isEditModalVisible}
            onCancel={this.hideEditModal.bind(this)}
            onOk={this.handleLossIncrease.bind(this, this.state.playerToEdit)}
            closable={false}
            okText="Yes"
            cancelText="No"
            >Are you sure you want to adjust the score for player {this.state.playerToEdit}?
            </Modal>
            </>
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
    this.hideEditModal()
  }

  handleLossIncrease(playerKey) {
    const newArr = this.state.players.slice()
    newArr[playerKey].losses++;
    this.setState({ players: newArr })
    this.hideEditModal()
  }


  handleDeleteRow(key) {
    const { players } = this.state;
    const newPlayers = players.filter((item) => item.key !== key);
    this.setState({ players: newPlayers })
  }
  
  showEditModal(key) {
    this.setState({ isEditModalVisible: true})
    this.setState({playerToEdit: key})
  }
  hideEditModal() {
    this.setState({ isEditModalVisible: false})
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