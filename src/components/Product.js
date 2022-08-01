import { useState } from "react";

import { Button, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


function Product({ product, basket, setBasket, total, money }) {

  const basketItem = basket.find(item => item.id === product.id);

  const addBasket = () => {

    const checkBasket = basket.find(item => item.id === product.id)
    if (checkBasket) {
      checkBasket.amount += 1
      setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
    } else {
      setBasket([...basket, {
        id: product.id,
        amount: 1
      }])
    }
  }
  const removeBasket = () => {

    const currentBasket = basket.find(item => item.id === product.id)
    const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
    currentBasket.amount -= 1
    if (currentBasket.amount === 0) {
      setBasket([...basketWithoutCurrent])

    } else {
      setBasket([...basketWithoutCurrent, currentBasket])
    }
  }





  return (
    <>
      <div class="col-lg-3 h-100 col-md-4">
        <div class="row">

          <Card >
            <Card.Img weigh="11px" variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title} ${product.price}</Card.Title>
              <Card.Text>
                <Button disabled={!basketItem} variant="danger" onClick={removeBasket}>Sat</Button>
                <span className="amount"></span>
                <Button disabled variant="outline-primary">{basketItem && basketItem.amount || 0}</Button>

                <Button disabled={total + product.price > money} variant="success" onClick={addBasket}>Satın al</Button>
              </Card.Text>

            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </div>
      </div>




    </>

  );
}

export default Product;
