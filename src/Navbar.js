import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() { 
        return (  
            <div className="Navbar">
                <div class="ui inverted borderless large menu">
                    <a class="item">
                        <Link to="/" className="link">Home</Link>
                    </a>
                    <div class="right menu">
                        <a class="item">
                        </a>
                    </div>
                </div>
            </div>
        );
    };
};

export default Navbar; 