//rfce - creates function with same name as file.
import React from 'react' 

function ChecklistItem(props) {
    return (
      <label>
        <input type="checkbox" name=""/>
        {props.ItemName}
      </label>
    );
  }
  
  
  export default ChecklistItem;
  