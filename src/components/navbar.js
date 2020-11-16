import React from "react"; // rfc kisaltmasi ile direk sablon yazilabilir
import Proptypes from "prop-types";

const Navbar =(props) => { // function component . burada arrow function olarak yazildi.

  return(
      <div>
        <h3>{props.title}</h3>
      </div>
  )
}
Navbar.propTypes = {
  title : Proptypes.string.isRequired // burada prop title icin zorunlu yazdik is required ile ve string ile type ini belirledik. title olmaysa eger navabr componentinde artik hata aliriz.
}
Navbar.defaultProps = {
  title : "Default App" // eger title girilmezse yerine ne yazilacak default props ile belirlenir.
}
export default Navbar;
