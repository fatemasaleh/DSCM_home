import React from 'react'
import "./FeaturedStores.scss"

import StoreCard from '../StoreCard/StoreCard'




import aljaish from '../../assets/jjlogo.jpg'
import shiphako from '../../assets/shphako.jpg'
import saba from "../../assets/sab'a.webp"
import hland from '../../assets/hland.jfif'


const data=[
    {
        id:1,
        
        img2: aljaish,
        isNew: true,
        name:'Al-jaish pharma',
        disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        address: "Sana'a.Yemen"
    },
    {
        id:2,
       
        img2: saba,
        isNew: true,
        name:"Sab'a Pharma",
        disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        address: "Sana'a.Yemen"
    },
    {
        id:3,
       
        img2: shiphako,
        isNew: true,
        name:'shephaco',
        disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        address: "Sana'a.Yemen"
    },
    {
        id:4,
       
        img2: hland,
        isNew: true,
        name:'Heaven Land',
        disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        address: "Sana'a.Yemen"
    },
    
    
]

function FeaturedStores() {
  return (
    <div className="featuredStores">
        <div className="top">
            <h1>Stores to buy from </h1>
            <p>
                Choose multy drugs from diffrent stores. 
            </p>
        </div>
        <div className="bottom">

        {data.map(item => (
            <StoreCard
                key={item.id}
                item={item}
            />
        ))}
        </div>
        
    </div>

    
  )
}

export default FeaturedStores


