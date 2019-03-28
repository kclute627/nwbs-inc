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
                             <a 
                             className ="header__top-button-link"
                             href = "https://www.linkedin.com"
                             target = "blank">
                                <button
                                className="header__top-button-1">
                                    <Link
                                    className="header__icon "/> 
                                </button>
                             </a>
                             <a
                             className ="header__top-button-link" 
                             href = "https://www.facebook.com"
                             target = "blank">
                                <button className="header__top-button-2">
                                    <Fb
                                    className="header__icon "/> 
                                </button>
                             </a>
                             <a
                             className ="header__top-button-link"
                             href = "https://www.google.com"
                             target = "blank" >
                                <button className="header__top-button-3">
                                    <Google
                                    className="header__icon"/>                                
                                </button>
                             </a>
                             
                                                                                 
                                  
                        </div>
                    </div>

                </header>
            </div>
        )
    }
}


export default Header;


