import React from 'react'

import {Row, Col, Button, Container} from 'react-bootstrap'
import {useLocation } from 'react-router-dom';
import Productbuttons from './Productbuttons';

function Productsgrid(props){
    const location = useLocation();
console.log('data ---->', location) 
    return(
        
             
        <Col xs={4}>
             <div className="grid">
             
    <img className="product-img" src={props.imgurl}/>
      
    <h3>
        {props.title}  
    </h3>
    <h1>
    <i class="fa fa-inr"></i> {props.price}  
    </h1>
    <div className="text-center">
    <Productbuttons productDetails={props}/> 
    </div>
    </div>
    </Col>
    )
}

export default Productsgrid;
