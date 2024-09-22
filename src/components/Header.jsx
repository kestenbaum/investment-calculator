import React from 'react';
import Logo from "../../public/investment-calculator-logo.png";
const Header = () => {
    return (
        <header className="header">
            <h1>Investment Calculator</h1>
            <img src={Logo} alt="logo"/>
        </header>
    );
};

export default Header;