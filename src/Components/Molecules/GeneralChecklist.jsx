//react needs a parent element always. So if you have no elements but simple syntax you want to pass, then
//nest it within empty element brackets. 
//

import React from 'react'
import ChecklistItem from '../Atoms/ChecklistItem'

function GeneralChecklist() {
    const checklistItems = ['Item One','Item Two', 'Item Three'];
    
  return (
    <>
    {checklistItems.map(checklistItem => (
        <ChecklistItem ItemName={checklistItem}/>
      ))}
    </>
    
  )
}

export default GeneralChecklist