import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/popular'
import Offers from '../Components/Offer_banner/Offers'
import NewCollect from '../Components/NewCollect/NewCollect'
import Newsletter from '../Components/NewsLetter/newsletter'
function Shop() {//Home page
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollect/>
        <Newsletter/>
    </div>
  )
}

export default Shop