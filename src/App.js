// import logo from './logo.svg';
import "./App.css";

import React from "react";
import ListItems from "./ListItems";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setupdate = this.setupdate.bind(this);
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== " ") {
      const newitems = [...this.state.items, newItem];
      this.setState({
        items: newitems,
        currentItem: {
          text: " ",
          key: " ",
        },
      });
    }
  }
  deleteItem(key) {
    const filterItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filterItems,
    });
  }
  setupdate(text,key)
  {
    const items = this.state.items;
    items.map(item =>{
      if(item.key===key)
      {
        item.text = text;
      }
    })
    this.setState({
      items:items
    })
  }
  render() {
    return (
      <div className="App">
        <header>
          <form action="" id="to-do-form" onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="Enter text"
              value={this.state.currentItem.string}
              onChange={this.handleInput}
            />
            <button type="submit">Add</button>
          </form>
        </header>
        <ListItems
          items={this.state.items}
          deleteItem={this.deleteItem}
          setupdate = {this.setupdate}
        ></ListItems>
      </div>
    );
  }
}

export default App;
