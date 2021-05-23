import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class CategorySelection extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
  
    render() {
        let {categories} = this.props
        return (
            <div>
                <h1>Pick a Category</h1>
                {categories.map((category, index) => <li key={category}>
                    <Link to={`/new/${index}`}>{category}</Link>
                </li>
                )}
            </div>
        )
    }
}