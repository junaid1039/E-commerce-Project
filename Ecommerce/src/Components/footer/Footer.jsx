import React from "react";
import './footer.css';
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import {Link} from 'react-router-dom';


const Footer =()=>{

    return(
        <div className="container">
            <div className="sub-c">
            <div className="b1">
                <h2>Information</h2>
                <p className="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate placeat ipsam nisi molestiae corrupti deleniti reiciendis suscipit incidunt sequi temporibus.</p>
            </div>
            <div className="b2">
                <h2>Catagories</h2>
                <div className="sub-b2">
                    <Link to="/"><p>Shop</p></Link>
                    <Link to="/men"><p>Men</p></Link>
                    <Link to="/women"><p>Women</p></Link>
                    <Link to="kids"><p>Kids</p></Link>
                </div>
            </div>
            <div className="b3">
                <h2>Contact</h2>
                <div className="mail"><CiMail /> junaiddev101@gmail.com</div>
                <div className="ph"><FiPhone /> +92-302-1725822</div>
                <div className="social-icons"><FaFacebookF/><SlSocialInstagram/><FiYoutube/><FaXTwitter/></div>
            </div>
            </div>
            <div className="ftr-botm">© 2024 | All Rights Reserved | junaiddev101@gmail.com</div>
        </div>

    )
};

export default Footer;