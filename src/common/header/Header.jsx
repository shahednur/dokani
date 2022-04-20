import React from 'react'
import Search from './Search'
import Navbar from './Navbar'
import Head from './Head'

import './Header.css'

const Header = ({CartItem}) => {
  return (
    <>
        <Head />
        <Search CartItem={CartItem} />
        <Navbar />
    </>
  )
}

export default Header