import React, { Component } from 'react'
import User from "./User"

class Users extends Component {
  render() {
    const {users}=this.props; // users i props olarak buarya aldik

    return (
      <div>
        {
          users.map(user => {
            return (
              <User
                key = {user.id}
                name = {user.name}
                salary = {user.salary} // bu kisma key de vermemiz layim ve bu key hep farkli olamli. o yüzden id veriyoruz.
                department = {user.department}
              />
            )
          })
        }
      </div>
    )
  }
}

export default Users;
