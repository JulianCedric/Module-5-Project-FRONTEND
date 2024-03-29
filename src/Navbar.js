import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() { 
        return (  
            <div className="Navbar">
                <div className="ui inverted borderless large menu">
                    <a className="item">
                        <Link to="/" className="link"><i className="big home icon"></i></Link>
                    </a>
                    
                    <a className="item">
                        <Link to="/dashboard" className="link">Dashboard</Link>
                    </a>
                    
                    <a className="item">
                        <Link to="/lab" className="link">Lab</Link>
                    </a>

                    <a className="item">
                        <Link to="/lab2" className="link">Lab2</Link>
                    </a>

                    <div className="right menu">
                        <a className="item">
                        {
                            this.props.loggedIn
                            ? <Link to="/login" onClick={this.props.setLogin} className="link">Logout</Link>
                            : <Link to="/login" className="link">Login | Sign Up</Link>
                        }
                    </a>
                    </div>
                </div>
            </div>
        );
    };
};

export default Navbar;