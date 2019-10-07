import React, { Component } from 'react';
import './App.css';
import CircleSelector from './CircleSelector/CircleSelector';
import Circles from './Circles/Circles'

const btns = [1, 2, 3, 4];

class App extends Component {

  state = {
    selected: 1
  }

  selectBtn = (evt) => {
    this.setState({
      selected: evt.target.name
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            selectBtn={this.selectBtn}
            btns={btns}
            selected={this.state.selected}
          />
          <Circles
            btns={btns}
            selected={this.state.selected}
          />
        </main>
      </div>
    );
  }
}

export default App;