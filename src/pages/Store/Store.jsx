import React, {useState}from 'react'
import "./Store.scss";

import Drugs from "../Drugs/Drugs";

import jaish from "../../assets/jjlogo.jpg"

import { useDispatch } from "react-redux";


import { AddShoppingCart } from '@mui/icons-material';
import  List from '../../Components/List/List';



const Store = () => {


  const [quantity , setQuantity] = useState(1);

  const dispatch = useDispatch();

  return (
    <div className="store">
      <div className="left">


        <div className="mainImage">
          <img src={jaish} alt="" />
        </div>
      </div>


      <div className="right">
        <h1>Seller name</h1>
        <h3>Address</h3>
        <h5>role</h5>
        
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla magnam eos totam veritatis quibusdam illo,
           esse eveniet harum repellat, 
           vitae recusandae molestias, animi facilis. 
           Facilis ea voluptatibus amet ipsam recusandae?
        </p>
        

        <div className="info">
            <span>Seller: Al-Jaish</span>
            <span>Drug Type : Painkiller </span>
            <span>Tag: Painkiller, Pills</span>
            <hr />
        </div>
      </div>

      <div className="sellerDrugs">
        <h1>Seller Drugs</h1>
        <div className="drugsList">
            <List/>
        </div>
      </div>
    </div>
  )
}

export default Store;