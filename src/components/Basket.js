import React from 'react'
import BasketItem from './BasketItem'
export default function Basket({basket, product, total}) {


    
  return (
    <>
    {basket.map(item => (
        <BasketItem total={total }item={item} product={product.find(p=>p.id===item.id)}/>
    ))}
    
        Toplam harcanılan para ${total}
        <br></br>
    </>
  )
}
