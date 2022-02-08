import React,{useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {incrementCount, decrementCount }  from '../reduxstore/Action'
import {Row, Col, Button, Container} from 'react-bootstrap'

function Productbuttons(props){
const [addToCartButton, setAddtoCartButton] = useState('true')

function  addtoCartButtonfals(){
    setAddtoCartButton(false);
}

let countvalue = useSelector((state) => {
    
    //console.log('state====',state)
    if(state &&  state.Reducer && state.Reducer.carditems )
    return  state.Reducer.carditems 
    else return {}
})
console.log("count value", countvalue )
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
        <div>
             {
                addToCartButton ? 

              <Button onClick={addtoCartButtonfals} className="w-100" variant="primary"> Add To Cart</Button>
              :
            <Row>
              <Col xs={3}> 
              <Button onClick={decrement} className="w-100" variant="primary">  - </Button>
               </Col>
              <Col xs={6}> {countvalue[props.productDetails.title]?.cartCount || 0} </Col>
              <Col xs={3}> 
              <Button onClick={increment} className="w-100" variant="primary"> + </Button>
              </Col>
            </Row>
        }
         </div>
    )
}
export default Productbuttons;

