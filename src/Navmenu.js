import React from 'react'
import {Navbar, Container, Nav, Badge} from 'react-bootstrap'
import {Link } from 'react-router-dom';
import {Row, Col, Button, Form} from 'react-bootstrap'
import { useSelector } from 'react-redux';

function Navmenu(){
    let countvalue = useSelector((state) => {
      //console.log('state====',state)
        if(state &&  state.Reducer && state.Reducer.carditems )
        return  state.Reducer.carditems 
        else return {}
    })
    let count = Object.values(countvalue);
    let totalitems = count.reduce((x, value)=> {
  return x + value['cartCount'];
    },0 )

    console.log("cartitems===>", count, totalitems)

    return(
        <div>
          
    <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home"> Logo Here </Navbar.Brand>
    <Nav className="me-auto menu">
    <Link to="/Cart"> <i class="fa fa-shopping-cart"></i> <Badge bg="secondary"> {totalitems}</Badge></Link> 
     
       <Link to="/">Home</Link> 
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact Us </Link> 

      <Link to="/Login">Login </Link>
      <Link to="/Register"> Register </Link> 
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}
 
export default Navmenu;

