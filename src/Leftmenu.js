import React from 'react'
import {Link } from 'react-router-dom';
import {Allcategories} from './Products/Allcategories'
import { useLocation } from 'react-router-dom';

function Leftmenu(){
    const { pathname } = useLocation();
    return(
        <div>
            <div className="menu-left">
                <Link to="/Allcategories" className={`${(pathname === '/Allcategories' || pathname === '/') ? 'active' : ''}`} > All Categories </Link>
                <Link to="/Bread" className={`${pathname === '/Bread' ? 'active' : ''}`}> Bread </Link>
                <Link to="/Dairy" className={`${pathname === '/Dairy' ? 'active' : ''}`}> Dairy </Link>
                <Link to="/Fruits" className={`${pathname === '/Fruits' ? 'active' : ''}`}> Fruits </Link>
                <Link to="/Vegetables" className={`${pathname === '/Vegetables' ? 'active' : ''}`}> Vegetables </Link>
            </div>
        </div>
    )
}

export default Leftmenu;