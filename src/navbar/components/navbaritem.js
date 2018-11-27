import React from 'react';
import { Link } from 'react-router-dom';
class NavBarItem extends React.Component {
    render(){
        return(
            <li className="active" ><Link to={this.props.name}>{this.props.name}</Link></li>
        );
    }
}

export default NavBarItem;