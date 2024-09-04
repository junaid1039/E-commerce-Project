import React, { useContext, useState } from 'react';
import './navbar.css';
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineAccountCircle, MdMenu } from "react-icons/md";
import { Link } from 'react-router-dom';
import logo from '../Media/logo.png';
import { Shopcontext } from '../../Context/Shopcontext';

const Navbar = () => {
    const [menu, setmenu] = useState("shop");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const { gettotalcartitems } = useContext(Shopcontext);
    
    return (
        <>
            <div className='navbar'>
                <div className='logo'>
                    <Link to="/"><img src={logo} alt='logo' /></Link>
                </div>
                <div className={`menu-container ${isMenuOpen ? 'menu-open' : 'menu-closed'}`}>
                    <ul className='menu'>
                        <li onClick={() => { setmenu("shop"); closeMenu(); }}><Link to="/">Shop</Link>{menu === "shop" && <hr />}</li>
                        <li onClick={() => { setmenu("men"); closeMenu(); }}><Link to="/men">Men</Link>{menu === "men" && <hr />}</li>
                        <li onClick={() => { setmenu("women"); closeMenu(); }}><Link to="/women">Women</Link>{menu === "women" && <hr />}</li>
                        <li onClick={() => { setmenu("kids"); closeMenu(); }}><Link to="/kids">Kids</Link>{menu === "kids" && <hr />}</li>
                    </ul>
                </div>
                <div className='login-cart'>
                    <Link to="/cart">
                        <div className='cart'>
                            <IoCartOutline />
                            <div className='cart-count'>{gettotalcartitems()}</div>
                        </div>
                    </Link>
                    <Link to="/login">
                        <div className='acc'><MdOutlineAccountCircle /></div>
                    </Link>
                    <div className='hamburger-menu' onClick={toggleMenu}>
                    <MdMenu />
                </div>
                    </div>
                
                
            </div>
        </>
    );
};

export default Navbar;
