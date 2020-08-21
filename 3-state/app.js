class App extends React.Component {
  state = {
    name: "Nadeem",
    age: 25,
  };
  render() {
    return (
      <div className="app-content">
        <h1> Hey, hackers</h1>
        <p>
          My name is {this.state.name}. My age is {this.state.age}
        </p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
