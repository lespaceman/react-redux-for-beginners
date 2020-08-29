import React, { Component } from 'react';
import IdCard from './Ninjas'
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    ninjas: [
      { name: "Loki", age: "699", belt: "black", id: "1" },
      { name: "Nadeem", age: "25", belt: "black", id: "2" },
      { name: "Yorki", age: "12", belt: "White", id: "3" }
    ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Hello ya all
          </h1>
          <IdCard ninjas={this.state.ninjas} />
          <AddNinja />
        </header>
      </div>
    );
  }

}

export default App;
