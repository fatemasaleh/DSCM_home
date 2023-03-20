import React from 'react';

import panadol from '../../assets/panadol.png';

import solpadien from '../../assets/solpadin.jpg';

import { useSelector } from "react-redux";



import { DeleteOutline } from '@mui/icons-material';

import "./Cart.scss";

function Cart() {

    const drugs = useSelector((state) => state.cart.drugs);
   
    

    /* const data =[
        {
            id:1,
            img: panadol,
            
            isNew: true,
            drugName:'Panadol Advance',
            disc: 'Panadol Advance Tablets with Optizorb Formulation',
            subtitle:'500mg Paracetamol',
            price:1500,
            quantity: 10,
        },
        {
            id:2,
            img: solpadien,
            
            isNew: true,
            drugName:'Panadol Advance',
            disc: 'Panadol Advance Tablets with Optizorb Formulation',
            subtitle:'500mg Paracetamol',
            price:1500,
            quantity: 10,
        },
    ]; */

    const totalPrice = () => {
        let total = 0;
        drugs.forEach((item) => {
          total += item.quantity * item.price;
        });
        return total.toFixed(2);
      };
  return (
    <div className="cart">
        <h1>Drugs in your cart</h1>
        {drugs?.map(item =>(
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.drugName}</h1>
                    <p>{item.disc?.substring(0, 100)}</p>
                    <div className="price">
                        {item.quantity} x ${item.price}
                    </div>
                    <DeleteOutline className="delete"/>
                </div>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>{totalPrice()}YER</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart