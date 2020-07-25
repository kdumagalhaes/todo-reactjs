import React, { Component } from "react";
import styles from "./Form.module.css";

class Form extends Component {
  state = { term: "" };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.term === "") return;
    this.props.onFormSubmit(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <div className={styles.form}>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Insert your todo here and press Enter..."
            autoFocus
            value={this.state.term}
            onChange={(e) => {
              this.setState({ term: e.target.value });
            }}
          />
        </form>
      </div>
    );
  }
}

export default Form;
