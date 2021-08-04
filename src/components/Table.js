import React from 'react';
import { Table, Button, Row, Col, Modal, Input} from 'antd';

class ConfirmModal extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      visible: false
    }
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return(
      <>
      <p onClick={this.showModal}>Add {this.props.type}</p>
      <Modal
      title="Alter Score"
      visible={this.state.visible}
      onOk={this.hideModal}
      onCancel={this.hideModal}
      okText="Yes"
      cancelText="No">
        Are you sure you want to adjust the score of {this.props.row}?
      </Modal>
      </>
    )
  }
}

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
          render: (key, record,) => (
            <ConfirmModal row={record.participant} type="win" onClick={this.handleDeleteRow.bind(this, record.key)}></ConfirmModal>
          )
        },
        {
          title: 'Add loss',
          dataIndex: 'addLoss',
          key: 'addLoss',
          render: (participant, record,) => (
            <ConfirmModal row={record.participant} type="loss"></ConfirmModal>
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
      ],
      isModalVisible: false,
      playerName: ('')
    }
  }

  handleWinIncrease(key) {
    const {players} = this.state;
    alert(players[key]);
  }

  handleDeleteRow(key) {
    const {players} = this.state;
    const newPlayers = players.filter((item) => item.key !== key);
    this.setState({players: newPlayers})
  }
  
    showModal(){
      this.setState({isModalVisible: true})
  }

hideModal(){
    this.setState({isModalVisible: false})
} 
changePlayerName(e) {
    this.setState({playerName: e.target.value})
}

  //Denna ska parent node ha
  addPlayer(name) {
    const {players} = this.state;
    const newPlayerStat = [{ key: (players.length + 1), participant: this.state.playerName, wins: 0, losses: 0}]
    const joined = this.state.players.concat(newPlayerStat);
    this.setState({players: joined})
    this.hideModal();
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
              <Button type="primary" onClick={this.showModal.bind(this)}>
                    Add Person
                </Button>
                <Modal title="Add player" visible={this.state.isModalVisible} onOk={this.addPlayer.bind(this)} onCancel={this.hideModal.bind(this)}>
                    <Input size="large" placeholder="Enter name:" onChange={this.changePlayerName.bind(this)}/>
                </Modal>
            </Col>
            
        </Row>
        <Table columns={this.state.columns} dataSource={this.state.players} pagination={false} ></Table>
      </>
    );
  }
}

export default TableBody;