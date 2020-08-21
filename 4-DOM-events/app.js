class App extends React.Component {
  state = {
    name: "Nadeem",
    age: 25,
  };

  handleClick(e) {
    console.log(e.target);
  }

  handleMoveseOver(e) {
    console.log(e.target, e.pageX);
  }

  handleCopy(e) {
    console.log("Try being original dude");
  }

  render() {
    return (
      <div className="app-content">
        <h1> Hey, hackers</h1>
        <p>
          My name is {this.state.name}. My age is {this.state.age}
        </p>
        <button onClick={this.handleClick}>Click Me</button>
        <button onMouseOver={this.handleMoveseOver}>Hover Me</button>
        <p onCopy={this.handleCopy}>What we think, we become</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
