import React from "react";
const NavBar = (props) => {
  return (
  <div>
    <form>
      <input 
        type="number"
        value={props.targetSKU}
        onChange={(event)=> {props.setSKU(event.target.value)}}>
      </input>
      <button onClick={(e)=>{props.handleSearch(e)}}>search</button>
    </form>
  </div>
)}

export default NavBar