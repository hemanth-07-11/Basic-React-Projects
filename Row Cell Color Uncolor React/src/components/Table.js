import React, { Component } from "react";
import TableRow from "./TableRow";
import ReactDOM from 'react-dom';

class Table extends Component {
  constructor() {
    super();
    this.state = {
      numRows: 1,
      numCols: 1,
      selectedColor: "red"
    }
    
    this.grid = React.createRef();

  }

  addRow = () => {
    this.setState(state => {
        return {numRows: state.numRows + 1}
    });
  }

  addColumn = () => {
    this.setState(state => {
        return {numCols: state.numCols + 1}
    });
  }

  removeRow = () => {
    this.setState(state => {
      return { numRows: state.numRows <= 1 ? 1: state.numRows - 1} //if numRows is greater than or equal to 1
    });
  }

  removeCol = () => {
    this.setState(state => {
      return {numCols: state.numCols <= 1 ? 1: state.numCols - 1}
    });
  }

  fillU = () => {
    let table = ReactDOM.findDOMNode(this.grid.current).childNodes;

    table.forEach(row => {
      for(let i = 0; i < this.state.numCols; i++) {
        let backgroundColor = row.childNodes[i].style.backgroundColor
        
        if(backgroundColor === "")
          row.childNodes[i].style.backgroundColor = this.state.selectedColor
          
      }
    });
  }
  
  fillAll = () => {
    let row = document.getElementsByTagName("tr")
    for(const element of row)
    {
      let col = element.getElementsByTagName("td");
      for(let j = 0; j < this.state.numCols; j++)
      {
        col[j].style.background = this.state.selectedColor;
      }
    }
  }

  clearAll = () => {
    let table = ReactDOM.findDOMNode(this.grid.current).childNodes; 
    
    table.forEach(row => {
      for(let i = 0; i < this.state.numCols; i++) { 
        let backgroundColor = row.childNodes[i].style.backgroundColor
        
        if(backgroundColor !== "")
          row.childNodes[i].style.backgroundColor = ""
          
      }
    });
  }

  handleColorChange = (event) => {
    this.setState({selectedColor: event.target.value});
  }

  handleApplyColor = (event) => {
    event.target.style.backgroundColor = this.state.selectedColor;
  }

  render() {
    let rows = [];

    for (let i = 0; i < this.state.numRows; i++) {
      rows.push(<TableRow numCols={this.state.numCols} handleApplyColor={this.handleApplyColor} />);
    }

    return (
      <div>
        <button onClick={this.addRow}>Add Row</button>
        <button onClick={this.addColumn}>Add Column</button>
        <button onClick={this.removeRow}>Remove Row</button>
        <button onClick={this.removeCol}>Remove Col</button>
        <button onClick={this.fillU}>Fill All Uncolored</button>
        <button onClick={this.fillAll}>Fill All</button>
        <button onClick={this.clearAll}>Clear</button>
        <select onChange={this.handleColorChange}>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="purple">Purple</option>
        </select>
        <table ref={this.grid}>
          {rows}
        </table>
      </div>
    )
  }
}

export default Table;