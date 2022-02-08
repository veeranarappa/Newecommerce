import React,{useState, useEffect} from 'react'
import {Row, Col, Button, Container} from 'react-bootstrap'
import './allcategories.css'
import {useLocation } from 'react-router-dom';
import Productsgrid from './Productsgrid';
import Axios from 'axios'


const Allcategories =()=>{

  const [products, setProducts] = useState(null);
    
    useEffect(()=>{
        Axios.get('http://localhost:3000/data')
        .then(res => {
            console.log(' Data ==>', res.data)
            setProducts(res.data);   
        }) 
    },[]) 

 const location = useLocation();
 console.log("datalocation==>", location);

  return(
    <div>
     <Row>
    
      { products?.filter(x => location.pathname  !== '/Allcategories' ?   (`/${x.category}` === location.pathname) : true).map((products) =>{
   
   return <Productsgrid imgurl={products.imageUrl} price={products.price}  title={products.title} ></Productsgrid>
     
        })
      }   
 </Row>
    
</div>
  )
}

 export default Allcategories;
