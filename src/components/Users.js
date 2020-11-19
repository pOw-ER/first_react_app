import React, { Component } from 'react'
import User from "./User"
import PropTypes from 'prop-types'

class Users extends Component {
  render() {
    const {users,deleteUser}=this.props; // users i props olarak buarya aldik

    return (
      <div>
        {
          users.map(user => {
            return (
              <User
                key = {user.id}
                id = {user.id}
                name = {user.name}
                salary = {user.salary} // bu kisma key de vermemiz layim ve bu key hep farkli olamli. o yüzden id veriyoruz.
                department = {user.department}
                deleteUser = {deleteUser}
              />
            )
          })
        }
      </div>
    )
  }
}
// eslint-disable-next-line react/no-typos
Users.PropTypes = {
  users : PropTypes.array.isRequired,
  deleteUser : PropTypes.func.isRequired
}

export default Users;
