import React, { Component } from 'react';
import './GameTable.css';
import Spot from '../../components/Spot/Spot.js';
import ResetButton from '../../components/ResetButton/ResetButton.js';
import FinalModal from '../../components/FinalModal/FinalModal.js';

class GameTable extends Component {
  state = {
    player: true,
    isFinished: false,
    isRedWinner: false,
    isBlueWinner: false,
    boxes: {
      topLeft: {
        team: 'Spot'
      },
      topCenter: {
        team: 'Spot'
      },
      topRight: {
        team: 'Spot'
      },
      centerLeft: {
        team: 'Spot'
      },
      centerCenter: {
        team: 'Spot'
      },
      centerRight: {
        team: 'Spot'
      },
      downLeft: {
        team: 'Spot'
      },
      downCenter: {
        team: 'Spot'
      },
      downRight: {
        team: 'Spot'
      }
    }
  }

  endingGameCheck = () => {
    // Here we check every possible combination for the Red Team's victory
    // Horizontal
    if(( (this.state.boxes.topLeft.team === 'Spot RedTeam')    && (this.state.boxes.topCenter.team === 'Spot RedTeam')    && (this.state.boxes.topRight.team === 'Spot RedTeam'))
    || ( (this.state.boxes.centerLeft.team === 'Spot RedTeam') && (this.state.boxes.centerCenter.team === 'Spot RedTeam') && (this.state.boxes.centerRight.team === 'Spot RedTeam'))
    || ( (this.state.boxes.downLeft.team === 'Spot RedTeam')   && (this.state.boxes.downCenter.team === 'Spot RedTeam')   && (this.state.boxes.downRight.team === 'Spot RedTeam'))
    // Vertical
    || ( (this.state.boxes.topLeft.team === 'Spot RedTeam')    && (this.state.boxes.centerLeft.team === 'Spot RedTeam')   && (this.state.boxes.downLeft.team === 'Spot RedTeam'))
    || ( (this.state.boxes.topCenter.team === 'Spot RedTeam')  && (this.state.boxes.centerCenter.team === 'Spot RedTeam') && (this.state.boxes.downCenter.team === 'Spot RedTeam'))
    || ( (this.state.boxes.topRight.team === 'Spot RedTeam')   && (this.state.boxes.centerRight.team === 'Spot RedTeam')  && (this.state.boxes.downRight.team === 'Spot RedTeam'))
    // Diagonal
    || ( (this.state.boxes.topLeft.team === 'Spot RedTeam')    && (this.state.boxes.centerCenter.team === 'Spot RedTeam') && (this.state.boxes.downRight.team === 'Spot RedTeam'))
    || ( (this.state.boxes.topRight.team === 'Spot RedTeam')   && (this.state.boxes.centerCenter.team === 'Spot RedTeam') && (this.state.boxes.downLeft.team === 'Spot RedTeam'))

  ) {
      this.setState(state => ({
        isFinished: !state.isFinished,
        isRedWinner: !state.isRedWinner
      }));
    // And here we are checking if there has been any final move for the Blue Team
            // Horizontal
    } else if (( (this.state.boxes.topLeft.team === 'Spot BlueTeam')    && (this.state.boxes.topCenter.team === 'Spot BlueTeam')    && (this.state.boxes.topRight.team === 'Spot BlueTeam'))
            || ( (this.state.boxes.centerLeft.team === 'Spot BlueTeam') && (this.state.boxes.centerCenter.team === 'Spot BlueTeam') && (this.state.boxes.centerRight.team === 'Spot BlueTeam'))
            || ( (this.state.boxes.downLeft.team === 'Spot BlueTeam')   && (this.state.boxes.downCenter.team === 'Spot BlueTeam')   && (this.state.boxes.downRight.team === 'Spot BlueTeam'))
            // Vertical
            || ( (this.state.boxes.topLeft.team === 'Spot BlueTeam')    && (this.state.boxes.centerLeft.team === 'Spot BlueTeam')   && (this.state.boxes.downLeft.team === 'Spot BlueTeam'))
            || ( (this.state.boxes.topCenter.team === 'Spot BlueTeam')  && (this.state.boxes.centerCenter.team === 'Spot BlueTeam') && (this.state.boxes.downCenter.team === 'Spot BlueTeam'))
            || ( (this.state.boxes.topRight.team === 'Spot BlueTeam')   && (this.state.boxes.centerRight.team === 'Spot BlueTeam')  && (this.state.boxes.downRight.team === 'Spot BlueTeam'))
            // Diagonal
            || ( (this.state.boxes.topLeft.team === 'Spot BlueTeam')    && (this.state.boxes.centerCenter.team === 'Spot BlueTeam') && (this.state.boxes.downRight.team === 'Spot BlueTeam'))
            || ( (this.state.boxes.topRight.team === 'Spot BlueTeam')   && (this.state.boxes.centerCenter.team === 'Spot BlueTeam') && (this.state.boxes.downLeft.team === 'Spot BlueTeam'))

  ) {
      this.setState(state => ({
        isFinished: !state.isFinished,
        isBlueWinner: !state.isBlueWinner
      }));
    }
  }


  redPlayerColor = (id) => {
    let colors = ['Spot'];
    let team = this.state.boxes[id].team;
    if(team !== 'Spot RedTeam' && team !== 'Spot BlueTeam'){
      colors.push('RedTeam');
      colors = colors.join(' ');
    }

    let cloneState = {
      ...this.state.boxes
    }

    cloneState = {
      ...cloneState,
      [id]: {
        team: colors
      }
    };

    // Here we switch to the opponent
    let player = this.state.player;
    this.setState({
      player: !player,
      boxes: cloneState
    });

    // Here we check if there is this move has been the final move
    this.endingGameCheck();
  }

  bluePlayerColor = (id) => {
    let colors = ['Spot'];
    let team = this.state.boxes[id].team;
    if(team !== 'Spot BlueTeam' && team !== 'Spot RedTeam'){
      colors.push('BlueTeam');
      colors = colors.join(' ');
    }

    let cloneState = {
      ...this.state.boxes
    }

    cloneState = {
      ...cloneState,
      [id]: {
        team: colors
      }
    };

    // Here we switch to the opponent
    let player = this.state.player;
    this.setState({
      player: !player,
      boxes: cloneState
    });

    // Here we check if there is this move has been the final move
    this.endingGameCheck();
  }

  changePlayerHandler = (id) => {
    // Here we check who is gonna play next
    if(this.state.player){
      this.redPlayerColor(id);
    } else {
      this.bluePlayerColor(id);
    }
  }

  resetHandler = (e) => {
    e.preventDefault();
    const resetState = {...this.state.boxes};
    for(let key in resetState){
      resetState[key] = {team: 'Spot'};
    }
    this.setState({boxes: resetState});
    if(this.state.isFinished) {
      this.setState(state => ({
        isFinished: !state.isFinished
      }));
    }
    if (this.state.isRedWinner){
      this.setState(state => ({
        isRedWinner: !state.isRedWinner
      }));
    } else if (this.state.isBlueWinner){
      this.setState(state => ({
        isBlueWinner: !state.isBlueWinner
      }));
    }
  }

  render(){
    const boxes = [];
    for(let key in this.state.boxes){
      boxes.push({
        id: key,
        config: this.state.boxes[key],
        functions: this.changePlayerHandler
      });
    }

    let spots = boxes.map((b, i) => (
      <Spot key={b.id} box={b} func={() => this.changePlayerHandler(b.id)} color={this.state.classes}  />
    ));

    // This is the title that says which player is gonna move next
    const redPlayerTurn = <h1 className="RedPlayerTurn">Now it's Red Player Turn!</h1>;
    const bluePlayerTurn = <h1 className="BluePlayerTurn">Now it's Blue Player Turn!</h1>;


    return (
      <div className="Wrapper">
        { this.state.player ? redPlayerTurn : bluePlayerTurn }
        <div className="GameTable">
          { spots }
        </div>
        <ResetButton reset={this.resetHandler} />
        { this.state.isFinished ? <FinalModal
                                    reset={(e) => this.resetHandler(e)}
                                    red={this.state.isRedWinner}
                                    blue={this.state.isBlueWinner}
                                   />
                                : null }
      </div>
    );
  }
}

export default GameTable;
