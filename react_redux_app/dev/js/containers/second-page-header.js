import React, { Component } from 'react';
import './second-page-header.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class Header extends Component {

    render() {

        return (
            <div className="header_body">
                <div className="user-logout"><Link to ="/" className="logout-color"> logout</Link></div>
                <div className="display_heading">Cafe</div>
                <div className="display_user">Name:{this.props.users[0].name}</div>
               { this.props.totalQuantityDisplay}
            </div>

        );
    }
}
function mapStatetoProps(state) {
    return {
        users: state.users,
        itemsSelected:state.itemsSelected
    }
}
export default connect(mapStatetoProps)(Header);