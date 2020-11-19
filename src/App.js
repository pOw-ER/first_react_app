import { Component } from 'react';
import './App.css';
import Navbar from "./components/navbar";
import Users from "./components/Users";

class App extends Component {
  state = { // biz state olusturduk. bunu props olrak users a aktaricaz. bu normalde kullnamaamiz gereken bir yöntem ama ögrenmek icin yapiyoruz

    users : [
      {
        id:1,
        name: "Enes Yilmaz",
        salary : "5000",
        department : "Informatik"
      },
      {
        id:2,
        name: "Büsra Yilmaz",
        salary : "5000",
        department : "Lehrerin"
      },
      {
        id:3,
        name: "Enes Kement",
        salary : "6000",
        department : "Gebäudetechniker"
      }
    ]
  }

  render(){
  return (// yalnizca bir tane parent element yazabiliriz icine örengin burda bir div var ve altina istedigimiz kadar children element ekleyebiliirz ancak ikinci bir ana element olusturamayiz.
    <div className="container">
      <Navbar title="User App"/>
      <hr/>
      <Users
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
