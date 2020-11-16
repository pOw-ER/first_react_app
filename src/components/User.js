import React, { Component } from 'react';
import PropTypes from 'prop-types'; // impt ile kisa yoldan eklenebilir


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
  static defaultProps = { // default propslar asagidaki gibi de bu sekilde static olarak ta yazilabilinir
    name : "Keine Information",
    salary : "Keine Information",
    department : "Keine Information"
  }
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

// User.defaultProps = {
//   name : "Keine Information",
//   salary : "Keine Information",
//   department : "Keine Information"
// }

User.propTypes = {
  name : PropTypes.string.isRequired,
  salary : PropTypes.string.isRequired,
  department : PropTypes.string.isRequired
}

export default User;
