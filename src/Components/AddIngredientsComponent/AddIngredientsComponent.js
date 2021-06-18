import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class AddIngredientsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      list: [],
    };
  }
  updateInputValue(value) {
    this.setState({
      userInput: value,
    });
  }
  addIngredient() {
    if (this.state.userInput !== "") {
      const userInput = {
        id: Math.random(),
        value: this.state.userInput,
      };
      const list = [...this.state.list];
      list.push(userInput);
      this.props.addCustomIngredients(userInput);
      this.setState({
        list,
        userInput: "",
      });
    }
  }

  deleteIngredient(key) {
    const list = [...this.state.list];

    const newList = list.filter((item) => item.id !== key);

    this.setState({
      list: newList,
    });
  }

  render() {
    console.log("this.state", this.state.list);
    return (
      <>
        <span style={{ padding: "20px" }}>
          <TextField
            margin="dense"
            name="Add Ingredients"
            value={this.state.userInput}
            onChange={(item) => this.updateInputValue(item.target.value)}
            fullWidth
          />
        </span>
        <Button onClick={() => this.addIngredient()} color="primary">
          Add
        </Button>
        <>
          <ul>
            {this.state.list.map((ele, idx) => (
              <li>{ele.value}</li>
            ))}
          </ul>
        </>
      </>
    );
  }
}

export default AddIngredientsComponent;
