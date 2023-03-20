import React, { useState } from 'react';

import Cart from "../Cart/Cart";

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { Link } from 'react-router-dom';

import "./Navbar.scss";
import "../../app.scss"




function Navbar() {

    const [open, setOpen] = useState(false);

  return (
    <div className="navbar lg:ml-8 xl:ml-[135px]">
        <div className="wrapper">
            <div className="left">
            
                <div className="logo">
               
                <Link className="link" to="/">DSCM</Link>
                </div>
                 
            </div>
            
            <div className="right">
                <div className="item">
                     <Link className="link" to="/">Homepage</Link>
                </div>
                <div className="item">
                     <Link className="link" to="/">
                        About
                     </Link>
                </div>
                <div className="item">
                     <Link className="link" to="/drugs/:id">Drugs</Link>
                </div>

                <div className="item">
                     <Link className="link" to="/stores/:id">Stores</Link>
                </div>
                <div className="icons">
                    <SearchOutlinedIcon />
                    <PersonOutlineOutlinedIcon/>
                    <div className="cartIcon" onClick={() => setOpen(!open)}>
                        <AddShoppingCartOutlinedIcon/>
                        <span>0</span>
                    </div>
                    
                </div>
            </div>
        </div>
        {open && <Cart/>}
    </div>
  )
}

export default Navbar