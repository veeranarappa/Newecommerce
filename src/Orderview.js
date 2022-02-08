import React from 'react'
import {Row, Col,Table, Button,Container} from 'react-bootstrap'
import {Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import Overviewtable from './Overviewtable'

function Orderview(props){

    let cartItems = useSelector((state) => {
        if(state &&  state.Reducer && state.Reducer.carditems )
        return  state.Reducer.carditems 
        else return {}
    })
    let cartData = Object.values(cartItems);
    return(
        <div>
            <h3> Order Details</h3>
            <Table striped bordered hover>
                <tr><th> S.No </th>
                    <th> Image </th>
                    <th> Title </th>
                    <th> Quantity </th>
                    <th> Total </th>
                </tr>
                
  {cartData?.map((products,index)=>
    <Overviewtable index={index} productDetails={products}/>
  )}
  
  
               
              
               
            </Table>
        </div>
    )
} 
export default Orderview;