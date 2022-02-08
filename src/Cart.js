import React from 'react';
import {Row, Col,Table, Button,Container} from 'react-bootstrap';

import {Link } from 'react-router-dom';
import Carttable from './Carttable';
import Productsgrid from './Products/Productsgrid';
import {useSelector} from 'react-redux';

function Cart(){
  let cartItems = useSelector((state) => {
    if(state &&  state.Reducer && state.Reducer.carditems )
    return  state.Reducer.carditems 
    else return {}
})

let cartData = Object.values(cartItems);
   
        return(
            <div>
                <h3> ShoppingCart </h3>
                 <Button variant="secondary"> Clear </Button>
               <br/>
             <Table striped bordered hover>
  <thead>
    <tr>
      <th> S.No</th>
      <th> Product Image</th>
      <th> Title </th>
      <th> Qty</th>
      <th> Price</th>
      <th> Total Price</th>
    </tr>
  </thead>
  <tbody>

    {cartData?.map((products,index)=>
    <Carttable index={index} productDetails={products}/>
    // <Carttable 
    //  products=[ {
    //     imgurl: products.imageUrl,
      //  price :products.price,
      //  title :products.title
    //    },
    //   {
    //     price :products.price
    //   },
    //   {
    //     title :products.title
    //   }
    //   
    // />
    )}
  </tbody>
</Table>

<Row>
<Col xs={6}> 

<Link to="/Checkout">  <Button variant="success"> Checkout</Button> </Link> 
 
 </Col>
<Col xs={6}> 
<h3> Grand Total : 5000</h3>
 </Col>
</Row>
  </div>
        )
}
   
export default Cart;