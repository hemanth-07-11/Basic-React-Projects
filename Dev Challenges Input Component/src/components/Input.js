import './_input.scss'
import React, { Component } from 'react'

class Input extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            value: '',
            classList: `input
            ${props.hover ? 'input--hover' : ''}
            ${props.focus ? 'input--focus' : ''}
            ${props.size === 'sm' ? 'input--sm' :
                (props.size === 'md' ? 'input--md' :
                (props.size === 'lg' ? 'input--lg' : ''))}
            ${props.fullWidth ? 'input--fullWidth' : ''}
            ${props.startIcon ? 'input--start-icon' : ''}
            ${props.endIcon ? 'input--end-icon' : ''}
            ${props.multiline ? 'input--multiline' : ''}
            ${props.disabled ? 'input--disabled' : ''}
            ${props.error ? 'input--error' : ''}
        `
        }
    }

    //Arrow fx for binding
    onChange = (event) => {
        this.setState({value: event.target.value})
        
    }

    render(){
        return (
            <div className={this.state.classList}>
                <label>{this.state.label}</label>
                {this.state.startIcon && <i className="material-icons startIcon">{this.state.startIcon}</i>}
                {this.state.multiline ? 
                    <textarea onChange={this.onChange} placeholder={this.state.placeHolderText} value={this.state.value} rows={this.state.row} /> :
                    <input onChange={this.onChange} placeholder={this.state.placeHolderText} value={this.state.value} />}
                {this.state.endIcon && <i className="material-icons endIcon">{this.state.endIcon}</i>}
    
                {this.state.helperText && <p className="helperText">{this.state.helperText}</p>}
            </div>
        )
    }
}

Input.defaultProps = {
    placeHolderText: 'Placeholder',
}

export default Input