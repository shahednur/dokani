import React from 'react'
import { Home, FlashDeals, TopCate, NewArrivals, Discount, Shop, Announcement, Wrapper } from '../components'

const Pages = ({productItems, addToCart, shopItems}) => {
  return (
    <>
        <Home />
        <FlashDeals productItems={productItems} />
        <TopCate />
        <NewArrivals />
        <Discount />
        <Shop shopItems={shopItems} addToCart={addToCart} />
        <Announcement />
        <Wrapper />
    </>
  )
}

export default Pages