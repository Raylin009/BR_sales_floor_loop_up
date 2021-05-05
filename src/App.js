import React, { useState } from "react";
import NavBar from "./components/nav_bar"
import Item_info from "./components/item_info"


const App = () => {
  const [item_info, get_info] = useState([]);
  const [targetSKU, setSKU] = useState(111222333);
  const handleSearch = (event) => {
    event.preventDefault()
    get_info([...item_info,
      targetSKU
    ])
  }
  

  return (<div>
    <NavBar setSKU={setSKU} targetSKU={targetSKU} handleSearch={handleSearch}/>
    <div>
      <Item_info />
      {item_info.forEach((ele)=>{<div>{ele}</div>})}
    </div>
  </div>)
}

export default App;