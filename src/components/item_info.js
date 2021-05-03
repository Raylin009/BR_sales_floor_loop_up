import React from "react";
import Display_style from "./display_style"
import Location from "./location"

const Item_info = (props) => (
  <div>
    <h5>This is Item_info</h5>
    <Location />
    <Display_style />
    {/* <h6>{console.log(props)}</h6> */}
  </div>
)

export default Item_info