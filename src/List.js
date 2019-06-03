import React from 'react';
const List = props =>(
<div class = "listContainer">
   <ul>
      {console.log(props.feildValue)}
      {props.feildValue.map((item,index) => (
         
                <li key = {index}  id={`list-${index}`}>  
                     <input type = "button" onClick = {props.updateValue(this,index)} class = "send-button" value = "update"/>
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