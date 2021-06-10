import React from 'react'
import { connect } from 'react-redux'
import { toggleInterest } from '../actions'

const User = (props) => {

  const capitalize = (arr) => {
    return arr.map(str => {
      const capitalizedStr = str[0].toUpperCase() + str.slice(1)
      return capitalizedStr
    }).join(' ')
  }

  return (
    <div onClick={() => props.toggleInterest(props)} className="user" style={{border: props.interest ? '15px green solid' : null}}>
      <div className="picture">
        <img src={props.picture.large} alt={capitalize([props.name.first, props.name.last])} />
      </div>
      <div className="info">
        <div className="name">
          <span>{capitalize([props.name.title])} </span>
          <span>{capitalize([props.name.first])} </span>
          <span>{capitalize([props.name.last])} </span>
        </div>
        <div className="email">
          <span>{props.email}</span>
        </div>
        <div className="phone">
          <span>{props.phone}</span>
        </div>
      </div>
    </div>
  )
}

export default connect(null, {toggleInterest})(User)
