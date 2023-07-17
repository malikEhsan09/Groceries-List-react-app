import React from 'react'
import LineItem from './LineItem'

const ItemsList = ({items , handleChecked, handleDelete}) => {
  return (
    <ul>
       {items.map((item)=>(
          <LineItem 
          key={item.id}
          item={item}
          handleChecked={handleChecked}
          handleDelete={handleDelete}
          />
       ))}
    </ul>
  )
}

export default ItemsList
