import React,{useState} from 'react'
import {Row, Col, Button, Form} from 'react-bootstrap'

function Login(props){

  const [userData, setUserData ] = useState({name: '', password: ''})

  const Loginform =(e) => {
    console.log("data" , e)
    setUserData((preState) => {
        return {
            ...preState,
         [e.target.name]  : e.target.value
        }
    })
}

const loginSubmitForm = (e) => {
  e.preventDefault();
  alert(JSON.stringify(userData, null, 3));
  props.history.push('/')
  console.log('submitform', e)
}

    return(
        <div>
<Row>
<Col xs={3}> </Col>
<Col xs={6}> 
<Form onSubmit={loginSubmitForm}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label> User Name </Form.Label>
    <Form.Control type="text" placeholder="Enter User Name" name="name" value={userData.name} onChange={Loginform}/> 
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label> Password  </Form.Label>
    <Form.Control type="password" placeholder="Enter Password" name="password" value={userData.password} onChange={Loginform} />
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
export default Login;