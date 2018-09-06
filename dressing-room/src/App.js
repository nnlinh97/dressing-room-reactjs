import React, { Component } from 'react';
import Room from './components/room/Room';
import Show from './components/show/Show';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <hr className="style13" />
          <div className="row">
            <Room />
            <Show />
          </div>
        </div>
        <div>
          <hr className="style13" />
        </div>
      </div>
    );
  }
}

export default App;
