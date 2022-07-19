import { useState } from "react";

import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
function Product({product,basket,setBasket, total, money}) {
  
  const basketItem= basket.find(item=> item.id===product.id);
  
  const addBasket = () => {
    
    const checkBasket=basket.find(item=> item.id===product.id)
    if(checkBasket){
      checkBasket.amount +=1
      setBasket([...basket.filter(item=> item.id !== product.id), checkBasket])
    }else{
      setBasket([...basket, {
        id:product.id,
        amount:1
      }])
    }
  }
  const removeBasket = () => {
    
    const currentBasket = basket.find(item=> item.id ===product.id)
    const basketWithoutCurrent = basket.filter(item=> item.id !==product.id)
    currentBasket.amount -=1
    if(currentBasket.amount===0){
      setBasket([...basketWithoutCurrent])
      
    }else{
      setBasket([...basketWithoutCurrent, currentBasket])
    }
  }
  



  
    return (
<>
<div className="product1">
<img src={product.image}></img>
<h3>{product.title}</h3>
<div className="price">${product.price}</div>

<div className="">


    <Button disabled={!basketItem} variant="danger" onClick={removeBasket}>Sat</Button>
    <span className="amount"></span>
    <Button disabled variant="outline-primary">{basketItem && basketItem.amount || 0}</Button>
    <Button disabled={total+product.price>money} variant="success"onClick={addBasket}>Satın al</Button>

    

</div>

</div>
 
</>

  );
}

export default Product;
