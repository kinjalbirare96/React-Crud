import React from 'react';
const List = props =>(
<div className = "listContainer">
   <ul>
      {props.feildValue.map((item,index) => (
         
                <li key = {index}  id={`list-${index}`}>  
                    <span className = "input-container"><input type = "button" onClick = {props.updateDataValue.bind(this,index)} class = "send-button" value = "update"/></span>
                    <span> Name : {item.name} </span>
                    <span>Address :  {item.address}</span>
                    <span> Profile Url : {item.profile}</span>
                    <span>editor Data : {item.editor}</span>
               </li>
        ))}
      </ul>
 </div>
)

export default List;