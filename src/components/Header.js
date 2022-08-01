import { useState } from "react";
import { moneyFormat } from '../helpers'
import Alert from 'react-bootstrap/Alert';

function Header(props) {


  return (
    <>

      <div className="header" >
        <Alert >
          Satın almak için ürün seçiniz

          Harcamak için {moneyFormat(props.money)}$ paranız var.
          <br></br>
          Harcanılan para {moneyFormat(props.total)}$
          <br></br>
          Kalan paranız {moneyFormat(props.money - props.total)}$
          <br></br>
          {0 == (props.money - props.total) && ("paran bittti !!!!!!") || ("Paranız var")}


        </Alert>

      </div>

    </>

  );
}

export default Header;
