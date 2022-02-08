import React,{useState} from 'react';
import {Row, Col, Button, Container} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {incrementCount, decrementCount }  from './reduxstore/Action'

function Carttable(props){

    //const [counter, setCounter] = useState(0);

    let countvalue = useSelector((state) => {
    
        //console.log('state====',state)
        if(state &&  state.Reducer && state.Reducer.carditems )
        return  state.Reducer.carditems 
        else return {}
    })
    let dispatch = useDispatch();

const increment =()=>{
    let count = countvalue[props.productDetails?.title]?. cartCount ?countvalue[props.productDetails?.title]?.cartCount+1:countvalue[props.productDetails?.title]?.cartCount ==0?1:0;
    //console.log("countvalue2---", count, props.title);
    dispatch(incrementCount(count, props.productDetails) )
}
const decrement =()=>{
    let count = countvalue[props.productDetails?.title]?. cartCount ? countvalue[props.productDetails?.title]?.cartCount-1:countvalue[props.productDetails?.title]?.cartCount==0?1:0;
    dispatch(decrementCount(count, props.productDetails))
}

    return(     
    <tr>
      <td> {props.index+1}</td>
      <td> <img className="img-product-cart" src={props.productDetails.imgurl}/> </td>
      <td> {props.productDetails.title}</td>
      <td>
      <Row>
             <Col xs={3}> 
             <Button onClick={decrement} className="w-100" variant="primary">  - </Button>
              </Col>
             <Col xs={6}> {countvalue[props.productDetails.title]?.cartCount || 0}</Col>
             <Col xs={3}> 
             <Button onClick={increment} className="w-100" variant="primary"> + </Button>
             </Col>
        </Row>
      </td>
      <td> {props.productDetails.price}</td>
      <td> {props.productDetails.price * props.productDetails.cartCount} </td>
    </tr>
       
    )
}

export default Carttable;