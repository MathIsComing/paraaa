
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Header from "./components/Header";
import Basket from './components/Basket'
import products from "./products.json"
import Card from 'react-bootstrap/Card';
import Product from "./components/Product"
import { Button } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup'

import ListGroup from 'react-bootstrap/ListGroup';




function App() {

  const [money, setMoney] = useState(10000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const resetBasket = () => {
    setBasket([])
  }

  useEffect(() => {

    setTotal(basket.reduce((acc, item) => {
      return acc + (item.amount * (products.find(products => products.id === item.id).price))
    }, 0));

  }, [basket])

  return (
    <>

      <Header total={total} money={money} />

      <CardGroup>

        {products.map(product => (
          <Product key={product.id} total={total} money={money} basket={basket} setBasket={setBasket} product={product} />

        ))}
      </CardGroup>



      <br></br>
      <h1>Normal state ile sepet</h1>
      <Basket total={total} product={products} basket={basket} />
      <button onClick={resetBasket}> Verileri sıfırla</button>

      <h1>Redux 1 ile Sepetimiz</h1>

      <button onClick={resetBasket}> Verileri sıfırla</button>
    </>



  );
}

export default App;
