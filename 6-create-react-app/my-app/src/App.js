import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    ninjas: [
      { name: "Loki", age: "699", belt: "black", id: "1" },
      { name: "Nadeem", age: "25", belt: "black", id: "2" },
      { name: "Yorki", age: "12", belt: "White", id: "3" }
    ]
  }

  addNinja = (ninja) => {
    console.log(ninja)
    ninja.id = Math.random()
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })
    this.setState({
      ninjas: ninjas
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Hello ya all
          </h1>
          <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
          <AddNinja addNinja={this.addNinja} />
        </header>
      </div>
    );
  }

}

export default App
