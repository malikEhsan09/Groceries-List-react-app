// import React, { useState } from 'react'

import ItemsList from './ItemsList';

const Content = (props) => {
  const {handleChecked , handleDelete , items} = props;
return (
    <>
      {items.length ? (
            <ItemsList 
            items={items}
            handleChecked={handleChecked}
            handleDelete = {handleDelete}/>
      ) : (
        <p style={{marginTop: '2rem'}}>Your list is Empty</p>
      )}
    </>
  )
}

export default Content;
