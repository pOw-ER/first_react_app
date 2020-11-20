import { Component } from 'react';
import './App.css';
import Navbar from "./components/navbar";
import Users from "./components/Users";

class App extends Component {

  deleteUser = (id) => { // bu silme fonksiyonunu props olrak users a geciemmiz gerekir. bunun icin asagida users kismina ekliycem
    this.setState({
      users : this.state.users.filter(user => id !== user.id)
    })
  }

  render(){
  return (// yalnizca bir tane parent element yazabiliriz icine örengin burda bir div var ve altina istedigimiz kadar children element ekleyebiliirz ancak ikinci bir ana element olusturamayiz.
    <div className="container">
      <Navbar title="User App"/>
      <hr/>
      <Users
        deleteUser= {this.deleteUser}
        users = {this.state.users}
      />
      {/* <h4>{1+1}</h4>
      <h4>{"murat".toUpperCase()}</h4>
      <h4>{test}</h4>
      <div>
        {
          isAuth ? <p>Kullanici kayitli</p>
          : null
        }
      </div> */}
      {/* <h4 style={{color:'blue',fontSize:"30px"}}>App Component</h4> */}
      {/* <User/>
      <User/>
      <User/> */}
    </div>
    );
  }
}
// class degil JSX te className
// labeldaki for JSX te htmlFor
// JSX icinde {} icine direk javascript hesaplamalari yazilabilir.
// inline css yukardaki gibi :  style={{color:'blue',fontSize:"30px"}}
// app.css icinde de css external css yazabiliriz
// bootstrap cdn ile index html icine yazilabilir. npm ile de yüklenebilir.
export default App;
