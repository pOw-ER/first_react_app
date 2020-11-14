import './App.css';
import Navbar from "./components/navbar"
function App() {
  const test = 34;
  const isAuth = true;
  return (// yalnizca bir tane parent element yazabiliriz icine örengin burda bir div var ve altina istedigimiz kadar children element ekleyebiliirz ancak ikinci bir ana element olusturamayiz.
    <div className="container">
      <Navbar/>

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
// class degil JSX te className
// labeldaki for JSX te htmlFor
// JSX icinde {} icine direk javascript hesaplamalari yazilabilir.
// inline css yukardaki gibi :  style={{color:'blue',fontSize:"30px"}}
// app.css icinde de css external css yazabiliriz
// bootstrap cdn ile index html icine yazilabilir. npm ile de yüklenebilir.
export default App;
