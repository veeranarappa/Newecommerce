import React,{useState} from 'react'
import {Row, Col, Button, Form} from 'react-bootstrap'
import {Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import Selectedproducts from './Selectedproducts';

function Checkout(props){

  const [userData, setUserData ] = useState({name: '', mobile: '', email: '', city:'', message:''})
  
  let dispatch = useDispatch();
  
  let cartItems = useSelector((state) => {
    if(state &&  state.Reducer && state.Reducer.carditems )
    return  state.Reducer.carditems 
    else return {}
})
let cartData = Object.values(cartItems);

  const handleName =(e) => {
    console.log("data" , e)
    setUserData((preState) => {
        return {
            ...preState,
         [e.target.name]  : e.target.value
        }
    })
}

const handleSubmitForm = (e) => {
  e.preventDefault();
  alert(JSON.stringify(userData, null, 3));
  props.history.push('/Success');
  console.log('submitform', e)
}

    return(
    <div>
<Row>
<Col xs={6}> 
<Form onSubmit={handleSubmitForm}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label> Name </Form.Label>
    <Form.Control type="text" placeholder="Enter Name" name="name" required value={userData.name} onChange={handleName}/> 
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label> Mobile  </Form.Label>
    <Form.Control type="text" placeholder="Enter Mobile" name="mobile" required value={userData.mobile} onChange={handleName} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label> Email </Form.Label>
    <Form.Control type="email" placeholder="Enter Email" name="email" required value={userData.email} onChange={handleName} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>  City </Form.Label>
  <Form.Select name='city' value={userData.city}  onChange={handleName}>
  <option> Select City </option>
      <option> Anantapur</option>
      <option> Hyderabad</option>
      <option> Banglore</option>
  </Form.Select>
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Address</Form.Label>
    <Form.Control as="textarea" rows={3} name="message"  required value={userData.message} onChange={handleName} />
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <Link to="/Success">  <Button variant="success"> Submit </Button> </Link>
</Form>
</Col>
<Col xs={6}> 
<div className="box-cart">
<h2> Selected Products</h2>
<div>
  
  <table>
  {cartData?.map((products,index)=>
    <Selectedproducts index={index} productDetails={products}/>
  )}
  
  </table>
</div>
</div>
</Col>
</Row>
   </div>
    )
}
export default Checkout;