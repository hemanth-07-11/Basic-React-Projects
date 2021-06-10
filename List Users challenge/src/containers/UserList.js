import React from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'

import User from '../components/User'

import { getUsers } from '../actions'

class UserList extends React.Component {

  componentDidMount() {
    this.props.getUsers()
  }

  render() {
    return (
      <div className="userList">
        {
          this.props.users.map(user => {
            return (
              <User key={uuid()} {...user} />
            )
          })
        }
      </div>
    )
  }
}

export default connect(state => state, { getUsers })(UserList)