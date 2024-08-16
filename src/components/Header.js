import React from 'react';
import './Header.css';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="logo-text">
                <div className="logo">
                    <MenuOutlinedIcon className="sidebar-icon" />
                </div>
                <div>
                    <h1><b>&nbsp;&nbsp;SmartHarvest</b></h1>
                </div>
            </div>
            <nav className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/weatherapp">Weather</Link></li>
                    <li><Link to="/sma">Nutrient Advice</Link></li>
                   
                </ul>
            </nav>
        </header>
    );
};

export default Header;
