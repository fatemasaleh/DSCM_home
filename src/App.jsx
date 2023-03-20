import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import React, { children } from 'react';

import Home from './pages/Home/Home';
import Drugs from './pages/Drugs/Drugs';
import Drug from './pages/Drug/Drug';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Stores from './pages/Stores/Stores';
import Store from './pages/Store/Store'; 

import "./app.scss"

const Layout = () =>{
  return (
    <div className="app">
        <Navbar/>
        <Outlet />
        <Footer />
    </div>
  )
  }


const router = createBrowserRouter([
  { 
    path:"/", 
    element:<Layout/>,
    children:[
      { 
        path:"/", 
        element:<Home/>
      },
      { 
        path:"/drugs/:id", 
        element:<Drugs/>
      },
      { 
        path: '/drug/:id', 
        element:<Drug/>
      },
      { 
        path: '/stores/:id', 
        element:<Stores/>
      },
      { 
        path: '/store/:id', 
        element:<Store/>
      },
    
    ]
},
 
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />

    </div>
  )
}

export default App
