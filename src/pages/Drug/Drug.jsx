import React, {useState}from 'react'
import "./Drug.scss";

import panadol from '../../assets/panadol.png';
import panadol2 from '../../assets/panadol22.jpg';

import { useDispatch } from "react-redux";


import { AddShoppingCart } from '@mui/icons-material';

const Drug = () => {

  const [selectedImage, setSelectedImage] = useState(panadol);

  const [quantity , setQuantity] = useState(1);

  const dispatch = useDispatch();

  return (
    <div className="drug">
      <div className="left">
        <div className="images">
          <img src={panadol} alt="" onClick={e=> setSelectedImage(panadol)} />
          <img src={panadol2} alt="" onClick={e=> setSelectedImage(panadol2)}/>
        </div>

        <div className="mainImage">
          <img src={selectedImage} alt="" />
        </div>
      </div>


      <div className="right">
        <h1>Drug Trade name</h1>
        <h3>Drug scientific name</h3>
        <h4>Drug Dose</h4>
        <h4>Drug Type</h4>
        <h5>production date</h5>
        <h5>expiration date</h5>
        <span className='price'>24000 YER <span className='price_item'>per Box</span></span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla magnam eos totam veritatis quibusdam illo,
           esse eveniet harum repellat, 
           vitae recusandae molestias, animi facilis. 
           Facilis ea voluptatibus amet ipsam recusandae?
        </p>
        <div className="quantity">
          <button className='minus' onClick={() => setQuantity((prev)=>(prev === 1 ? 1 : prev -1 ))}>-</button>
            {quantity}
          <button className='plus' onClick={() => setQuantity(prev=>prev+1)}>+</button>
        </div>

        <button className="add" 
          onClick={() =>
            dispatch(
              addToCart({
                id,
                drugName,
                disc,
                price,
                img,
                quantity,
              })
            )
          }
        >
          <AddShoppingCart/> ADD TO CART
        </button>

        <div className="info">
            <span>Saler: Al-Jaish</span>
            <span>Tag: Painkiller, Pills</span>
            <hr />
            <div className="details">
              <span>DESCRIPYION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              
            </div>
        </div>
      </div>
    </div>
  )
}

export default Drug