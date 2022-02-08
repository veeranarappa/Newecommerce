import React from 'react';

function Overviewtable(props){
    
   
    return(     
        <tr>
          <td> {props.index+1}</td>
      <td> <img className="img-product-cart" src={props.productDetails.imgurl}/> </td>
          <td> {props.productDetails.title}</td>
          <td> {props.productDetails.cartCount}</td>
          <td> {props.productDetails.price * props.productDetails.cartCount} </td>
        </tr>
           
        )

}

export default  Overviewtable;