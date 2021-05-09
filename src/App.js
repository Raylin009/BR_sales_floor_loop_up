import React, { useState } from "react";
import NavBar from "./components/nav_bar"
import Item_info from "./components/item_info"
import axios from "axios"


const App = () => {
  const [item_info, get_info] = useState([]);
  const [targetSKU, setSKU] = useState(11122277333);
  const handleSearch = async (event) => {
    event.preventDefault()
    // const data = getSKUData(targetSKU);
    // set state with info
    axios.get(`/item-info`,{ params: {sku:targetSKU} })
      .then(console.log)
      .catch(() => console.log("didn't make it"))
    get_info([...item_info,
      targetSKU
    ],setSKU(0))
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