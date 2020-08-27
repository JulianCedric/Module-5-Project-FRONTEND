import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-copyright text-center py-3" >
                meOS © {new Date().toISOString().substring(0, 4)}
            </div>   
        </div>
    )
}

export default Footer;