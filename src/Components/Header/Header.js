import React, { Component } from 'react';
import { ReactComponent as Link } from "../../assets/SVG/linkedin2.svg";
import { ReactComponent as Fb } from "../../assets/SVG/facebook1.svg";
import { ReactComponent as Google } from "../../assets/SVG/google-plus2.svg";




class Header extends Component {

    render(){
        return(
            <div>
                <header className="header">
                    <div className="header__top">
                        <p className="header__top-text">Employee, Tenant &amp; Volunteer Background Checks</p>
                        <div className="header__top-button-box">
                             <button className="header__top-button">
                                <Link
                                className="header__icon "/> 
                             </button>
                             <button className="header__top-button">
                                <Fb
                                className="header__icon "/> 
                             </button>
                             <button className="header__top-button">
                                <Google
                                className="header__icon "/> 
                             </button>
                                                                                 
                                  
                        </div>
                    </div>

                </header>
            </div>
        )
    }
}


export default Header;


