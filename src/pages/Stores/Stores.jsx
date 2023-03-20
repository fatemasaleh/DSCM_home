import React , { useState }from 'react';
import { useParams } from 'react-router-dom';

import "./Stores.scss"

import List from '../../Components/StoreList/StoreList'

export default function Stores() {
  
    const cartId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(100000);

  const [sort, setSort] = useState(null)

  

  return (
    <div className="drugs">


      <div className="right">
        <List 
        cartId={cartId} 
        maxPrice={maxPrice} 
        sort={sort}
        />
      </div>
    </div>
  )
}

