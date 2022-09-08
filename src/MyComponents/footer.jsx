import React from "react";

function Footer() {
    let date = new Date();
    const year = date.getFullYear();
    let footerStyle={
        position:"relative",
        top:"100vh",
        width:"100%"
    }
    return (<footer className="bg-dark text-light" style={footerStyle}>
        <p className="text-center"> copyright &copy; {year}</p>
    </footer>);
}

export default Footer;