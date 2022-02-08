import React,{useState} from 'react'
import {Row, Col, Button, Form} from 'react-bootstrap'

function Register(props){

  const [userData, setUserData ] = useState({name: '', mobile: '', email: '', password :'', confirmpassword:'', city:'', message:''})

  const registerForm =(e) => {
    console.log("data" , e)
    setUserData((preState) => {
        return {
            ...preState,
         [e.target.name]  : e.target.value
        }
    })
}

const registerSubmit = (e) => {
  e.preventDefault();
  alert(JSON.stringify(userData, null, 3));
  props.history.push('/Login')
  console.log('submitform', e)
}

    return(
        <div>
<Row>
<Col xs={3}> </Col>
<Col xs={6}> 
<Form onSubmit={registerSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label> Name </Form.Label>
    <Form.Control type="text" placeholder="Enter Name" name="name" value={userData.name} onChange={registerForm}/> 
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label> Mobile  </Form.Label>
    <Form.Control type="text" placeholder="Enter Mobile" name="mobile" value={userData.mobile} onChange={registerForm} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label> Email </Form.Label>
    <Form.Control type="text" placeholder="Enter Email" name="email" value={userData.email} onChange={registerForm} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label> Password </Form.Label>
    <Form.Control type="password" placeholder="Enter password" name="password" value={userData.password} onChange={registerForm} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label> Confirm Password </Form.Label>
    <Form.Control type="password" placeholder="Enter Confirm Password" name="confirmpassword" value={userData.confirmpassword} onChange={registerForm} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>  City </Form.Label>
  <Form.Select name='city' value={userData.city} onChange={registerForm}>
  <option> Select City </option>
      <option> Anantapur</option>
      <option> Hyderabad</option>
      <option> Banglore</option>
  </Form.Select>
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Address</Form.Label>
    <Form.Control as="textarea" rows={3} name="message" value={userData.message} onChange={registerForm} />
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Col>

</Row>
        </div>
    )
}
export default Register;