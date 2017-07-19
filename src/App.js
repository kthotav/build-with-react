import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { BrowserRouter, NavLink } from 'react-router-dom'

import Commits from './pages/Details';
import List from './pages/List';

class MessageComponent extends Component {
  render() {
    return (
      <div>{this.props.message}</div>
    )
  }
}

class VacancySign extends Component {
  render() {
    var text;
    if(this.props.hasvacancy) {
      text = "Vacancy";
    } else {
      text = "No Vacancy";
    }
    return (
      <div>{text}</div>
    )
  }
}

class ChildComponent extends Component {
  render() {
    return (
      <div>
        <div>Add a click handle</div>
        <button onClick={this.props.onMagicClick}>Magic Button</button>
      </div>
    )
  }
}

class ParentComponent extends Component {
  performMagic() {
      alert('TAADAH!');
  }
  render() {
    return (
      <div>
        <ChildComponent onMagicClick={this.performMagic}/>
      </div>
    )
  }
}
class CounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
    }
  }
  clickMe() {
    this.setState({
      clicks: this.state.clicks + 1
    })
  }
  render() {
    return (
      <div>
        <div>Click: {this.state.clicks}</div>
        <button onClick={() => this.clickMe()}>click me</button>
      </div>
    )
  }
}

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div></div>
          <ol></ol>
        </div>
      </div>
    )
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}



class App extends Component {
  
  render() {
    var ipsumText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.';
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Karthik. Hello World</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <a>Button</a>
          <div>{ipsumText}</div>
        </div>
        
        <MessageComponent message="hello!"/>
        <VacancySign hasvacancy={false}/>
        <ParentComponent/>
        <CounterComponent/>
        <Game />
        
        <BrowserRouter>
          <div>
            <Route path='/details' component={Commits} />
          </div>
        </BrowserRouter>
        <List/>
      </div>
    );
  }
}



export default App;
