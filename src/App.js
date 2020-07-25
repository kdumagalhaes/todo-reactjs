import React, { Component } from "react";
import "./global-style/global.css";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Form from "./components/Form/Form";

class App extends Component {
  state = { tasks: [] };

  handleSubmit = (task) => {
    this.setState({ tasks: [...this.state.tasks, task] });
  };

  handleDelete = (index) => {
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    this.setState({ tasks: newArr });
  };

  render() {
    return (
      <div className="App">
        <div className="container">

          <Header />
          <Form onFormSubmit={this.handleSubmit} />
          <List tasks={this.state.tasks} onDelete={this.handleDelete}></List>
        </div>
      </div>
    );
  }
}

export default App;
