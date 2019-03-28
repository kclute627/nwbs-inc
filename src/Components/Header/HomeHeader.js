import React, { Component } from 'react';
import DropDown from './DropDown';
import logo from "../../assets/NBSI-Logo_v2.png";







class HomeHeader extends Component {


    render(){

        return(
            <div className="header__bottom">
                <div className="header__bottom-logo-box">
                <img src={logo}/>
                </div>
                <div className="header__bottom-nav">
                    <ul className="header__bottom-nav-1">
                        <li className="header__bottom-nav-item"><a className="header__bottom-nav-link" href="#">Home Page</a></li>
                        <li className="header__bottom-nav-item"><a className="header__bottom-nav-link" href="#">About Us</a></li>
                        <li className="header__bottom-nav-item"><a className="header__bottom-nav-link" href="#">Our Screening Services</a>
                           <DropDown
                           text={['Pricing', 'Our Services', "Contact Us"]}/>
                        </li>
                        <li className="header__bottom-nav-item"><a className="header__bottom-nav-link" href="#">Client Login</a></li>
                        <li className="header__bottom-nav-item"><a className="header__bottom-nav-link" href="#">Contact Us</a></li>
                    </ul>

                </div>
            </div>
        )
    }
}




export default HomeHeader;