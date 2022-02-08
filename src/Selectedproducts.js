import React from 'react';

function Selectedproducts(props){
    
   
    return(     
        <tr>
          <td> {props.index+1}</td>
          <td> {props.productDetails.title}</td>
         <td> {props.productDetails.price}</td>
          <td> {props.productDetails.price * props.productDetails.cartCount} </td>
        </tr>
           
        )

}

export default  Selectedproducts;