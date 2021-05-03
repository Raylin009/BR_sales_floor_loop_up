import React, { useState } from "react";
import NavBar from "./components/nav_bar"
import Item_info from "./components/item_info"


const App = () => {
  const [item_info, get_info] = useState([]);
  

  return (<div>
    <NavBar />
    <div>
      <Item_info />
    </div>
  </div>)
}

export default App;