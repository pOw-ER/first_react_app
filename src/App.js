import User from "./components/User"
import './App.css';

function App() {
  const test = 34;
  const isAuth = true;
  return (// yalnizca bir tane parent element yazabiliriz icine örengin burda bir div var ve altina istedigimiz kadar children element ekleyebiliirz ancak ikinci bir ana element olusturamayiz.
    <div className="App">
      {/* <h4>{1+1}</h4>
      <h4>{"murat".toUpperCase()}</h4>
      <h4>{test}</h4>
      <div>
        {
          isAuth ? <p>Kullanici kayitli</p>
          : null
        }
      </div> */}
      <h4>App Component</h4>
      <User/>
      <User/>
      <User/>
    </div>
  );
}
// class degil JSX te className
// labeldaki for JSX te htmlFor
// JSX icinde {} icine direk javascript hesaplamalari yazilabilir.
export default App;
