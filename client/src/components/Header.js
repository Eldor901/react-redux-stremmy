import React, {Component} from 'react';
import {Link} from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

class Header extends Component {


    render() {
        return (
            <div className="ui fixed inverted menu">
                <div className="ui container">
                    <a href="#" className="header item">
                        Streammy
                    </a>
                    <Link to={"/"}  className="item"><i className="home icon"></i>Home</Link>
                    <GoogleAuth/>
                </div>
            </div>
        );
    }
}

export default Header;
