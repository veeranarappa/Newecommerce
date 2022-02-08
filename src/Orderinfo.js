import React from 'react'
import {Row, Col,Table, Button,Container} from 'react-bootstrap'
import {Link } from 'react-router-dom';

function Orderinfo(){
    return(
        <div>
            <h3> Order Information</h3>
            <Table striped bordered hover>
                <tr>
                    <th> Name </th>
                    <th> OrderDate</th>
                    <th> Order Details </th>
                </tr>
                <tr>
                    <td> Veera</td>
                    <td> 26-December-2021</td>
                    <td> <Link to="/Orderview"> View </Link></td>
                </tr>
                <tr>
                    <td> Veera</td>
                    <td> 26-December-2021</td>
                    <td> <Link to="/Orderview"> View </Link></td>
                </tr>
                <tr>
                    <td> Veera</td>
                    <td> 26-December-2021</td>
                    <td> <Link to="/Orderview"> View </Link></td>
                </tr>
                <tr>
                    <td> Veera</td>
                    <td> 26-December-2021</td>
                    <td> <Link to="/Orderview"> View </Link></td>
                </tr>
                <tr>
                    <td> Veera</td>
                    <td> 26-December-2021</td>
                    <td> <Link to="/Orderview"> View </Link></td>
                </tr>
            </Table>
        </div>
    )
} 
export default Orderinfo;