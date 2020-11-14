import React from "react"; // rfc kisaltmasi ile direk sablon yazilabilir

const Navbar =(props) => {
  return(
      <div>
        <h3>{props.title}</h3>
      </div>
  )
}
export default Navbar;
