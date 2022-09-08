import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div className="header">
            <nav className="navbar">
                <Link className="title" to="/">MyTodo List</Link>
                 <Link className="navAbout" to="/about">About</Link>

            </nav>
        </div>
    );

}

export default Header;
Header.defaultProps = {
    title: "Your Title Here"
}
Header.propTypes = {
    title: PropTypes.string
}