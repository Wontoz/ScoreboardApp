import React from 'react';
import { Table } from 'antd';
import AlterScoreModal from './AlterScoreModal';
import TableHeader from './TableHeader';
import { ArrowUpOutlined, ArrowDownOutlined, CloseOutlined } from '@ant-design/icons';

class TableBody extends React.Component {
  constructor(props) {
    super(props);

    //Initialize 3 players along with all table which is to be displayed
    this.state = {
      players: [
        { key: 0, participant: 'Name 1', wins: 5, losses: 0 },
        { key: 1, participant: 'Name 2', wins: 4, losses: 0 },
        { key: 2, participant: 'Name 3', wins: 3, losses: 0 },
      ],
      columns: [
        {
          title: 'Participants',
          dataIndex: 'participant',
          key: 'participant',
          defaultSortOrder: 'descend',
          sorter: (a, b) => (a.wins - a.losses) - (b.wins - b.losses),
          align: 'center'
        },
        {
          title: 'Wins',
          dataIndex: 'wins',
          key: 'wins',
          align: 'center'
        },
        {
          title: 'Losses',
          dataIndex: 'losses',
          key: 'losses',
          align: 'center'
        },
        {
          title: <ArrowUpOutlined />,
          dataIndex: 'addWin',
          key: 'addWin',
          render: (key, record) => (
            <AlterScoreModal scoreType="wins" action={this.handleWinIncrease.bind(this, record.key)}></AlterScoreModal> //Modal which triggers when up-arrow is clicked
          ),
          align: 'center'
        },

        {
          title: <ArrowDownOutlined />,
          dataIndex: 'addLoss',
          key: 'addLoss',
          render: (key, record,) => (
            <AlterScoreModal scoreType="losses" action={this.handleLossIncrease.bind(this, record.key)}></AlterScoreModal> //Modal which triggers when down-arrow is clicked
          ),
          align: 'center'
        },
        {
          title: <CloseOutlined />,
          key: 'delete',
          render: (key, record) => (
            <CloseOutlined onClick={this.handleDeleteRow.bind(this, record.key)} /> //Icon which triggers handleDeleteRow on click
          ),
          align: 'center'
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
    for (let i = key; i < length; i++) {
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
        <TableHeader action={this.handleNewPlayer.bind(this)}></TableHeader>
        <Table columns={this.state.columns} dataSource={this.state.players} pagination={false} showSorterTooltip={false} style={{ borderBottom: "1px solid #9fad87" }}></Table>
      </>
    );
  }
}

export default TableBody;