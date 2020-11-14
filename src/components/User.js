import React, { Component } from 'react'

// bu sekilde de olabilir

// class User extends Component {
//   render() {
//     return (
//       <div>
//         <ul>
//           <li>Name : {this.props.name} </li>
//           <li>Abteilung : {this.props.salary}</li>
//           <li>Gehalt : {this.props.department}</li>
//         </ul>
//       </div>
//     )
//   }
// }

// Destructing yapisi ile
class User extends Component {
  render() {
    //Destructing
    const {name,salary,department} = this.props; // = sonrasina nereden alacagimizi yaziyoruz this.props tan aliyoruz
    return (
      <div>
        <ul>
          <li>Name : {name} </li>
          <li>Abteilung : {salary}</li>
          <li>Gehalt : {department}</li>
        </ul>
      </div>
    )
  }
}

export default User;
