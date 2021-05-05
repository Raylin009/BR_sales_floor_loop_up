import React from "react";
const NavBar = (props) => (
  <div>
    <h5>This is nav</h5>
    <form>
      <input 
        type="number"
        value={props.targetSKU}
        onChange={(event)=> {props.setSKU(event.target.value)}}>
      </input>
      <button onClick={(e)=>{props.handleSearch(e)}}>search</button>
    </form>
  </div>
)

export default NavBar