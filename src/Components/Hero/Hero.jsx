import React from 'react'
import styles from "../../style";

import hero from '../../assets/hero.png'
import '../../index.css'

function Hero() {
  return (
    <section className=' mb-8 xl:mb-24 '>
         <div className='flex flex-col lg:flex-row'>
            <div className='lg:ml-4 xl:ml-[135px] flex flex-col items-center 
            lg:items-start text-center lg:text-left pt-[200px] 
            flex-1 px-4 lg:px-0'>
               <div
        className="flex flex-row items-center 
        py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-8"
      >
        
        <p className={`${styles.paragraph} ml-2 `}>
          <span className="text-green-600">20%
          </span> DISCOUNT FOR {" "} 
          <span className="text-green-600">1 MONTH
          </span> ACCOUNT
        </p>
      </div>
                <h1 className='text-4xl lg:text-[58px] font-semibold
                 leading-none mb-6 '>
                    <span className='text-green-600'>Drug </span>Supply Chain Management.
                </h1>
                <p className='max-w-[600px] mb-2 '>
                Everything you need in one place, all kinds of medicines from various points of sale, in addition to that, your order reaches you wherever you are throughout the Republic of Yemen.
                You can reach it Any Time , Any Where!
                Driving everywhere to find the quantity of mony you need, DSCM solved the problem.
                </p>
                <button className="rounded-full border-color: bg-green-600 w-[25%] p-2 mt-8 text-white">Shop Now</button>
                
            </div>
            {/*image*/}
            <div className="hidden flex-1 lg:flex ml-20 mt-9 ">
            <div className="absolute w-[450px] h-[700px] hero-gradient rounded-tl-[300px] z-[0] top-[10px]" />
                <img src={hero} alt="DSCM" className=" flex  mt-[50px] pl-10   w-[430px] h-[700px]  " />
            </div>
         </div>
        
    </section>
   
  )
}

export default Hero