import React from 'react';
import "./StoreList.scss";
import Card from '../StoreCard/StoreCard';






const List= ()=> {

    const data=[
        {
            id:1,
            name: "Al-jaish",
            address: "Saba'a Street , Sana'a.Yemen",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        },
        {
            id:2,
            name: "Al-jaish",
            address: "Saba'a Street , Sana'a.Yemen",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        },
        {
            id:3,
            name: "Al-jaish",
            address: "Saba'a Street , Sana'a.Yemen",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        },
        {
            id:4,
            name: "Al-jaish",
            address: "Saba'a Street , Sana'a.Yemen",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        },
       
    ];

    
  return (
    <div className="list">
        {data.map(item =>(
            <Card 
                key={item.id}
                item={item}
            />
        ))}
    </div>
  )
}


export default List