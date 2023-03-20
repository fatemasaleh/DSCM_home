import React from 'react'

import Hero from '../../Components/Hero/Hero'
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts'
import FeaturedStores from '../../Components/Featured_Stores/FeaturedStores'
import Categories from '../../Components/Categories/Categories'
function Home() {
  return (
    <div>
      <div className="gradient-06 z-[0]" />
      <Hero />
     
      <div className="gradient-04 z-[-1]" />
      <FeaturedProducts />
      <Categories />
      <FeaturedStores />
    </div>
  )
}

export default Home
