import React from 'react'
import Search from '../components/Product/Search'
import CardProduct from '../components/Product/CardProduct'
import Categories from '../components/Product/Categories'
import FooterProduct from '../components/Product/FooterProduct'
const Product = () => {
  return (
    <div>
      <Search></Search>
      <Categories></Categories>
      <CardProduct></CardProduct>
      <FooterProduct></FooterProduct>
    </div>
  )
}

export default Product