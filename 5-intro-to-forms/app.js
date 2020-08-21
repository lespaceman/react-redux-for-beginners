class App extends React.Component {
  state = {
    name: "Nadeem",
    age: 25,
  };

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", this.state);
  };

  render() {
    return (
      <div className="app-content">
        <h1> Hey, hackers</h1>
        <p>
          My name is {this.state.name}. My age is {this.state.age}
        </p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
