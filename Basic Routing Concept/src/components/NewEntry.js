import React, { Component } from "react";
import {useParams} from "react-router-dom";

export default class NewEntry extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            errorMessage: "",
            category: ""
        }
    }

    componentDidMount(){
        let { id } = this.props.match.params;
        let category = this.props.categories[id]
        if(!category){
            return this.setState({errorMessage: "Invalid Category"})
        }else {
            return this.setState({category})
        }
    }

    render() {
        const {errorMessage, category} = this.state
        return (
            <div>
                {errorMessage}
                {}
                {
                category &&
          
                    <h1> Make an Entry to {category} Category </h1>
         
                }
            </div>
        )
    }
}