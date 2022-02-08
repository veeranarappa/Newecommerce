import React from 'react'
import {Row, Col, Button, Form} from 'react-bootstrap'
import {Link } from 'react-router-dom';

function Success(){
    return(
        <div>
<Row>
<Col xs={3}> </Col>
<Col xs={6}> 
<h2 className='green'> Order Success</h2>
<b> Your Order Will be proces next 24 Hours</b>

<p> See Your  Order Details <Link to="/Orderinfo"> Here </Link> </p>
<Link to="/Allcategories">  <Button variant="success"> Checkout</Button> </Link>
</Col>
</Row>
        </div>
    )
}
export default Success;