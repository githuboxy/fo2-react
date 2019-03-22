import React from 'react';
import '../css/App.css'; 
import '../css/index.css';
import '../css/custom.css';
import '../css/layout.css'; 
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { NavBar } from '../../navbar/components/navbar';
import { userActions } from '../actions/user.actions';
 

class HomePage extends React.Component {
    componentDidMount() {
        // this.props.dispatch(userActions.getAll()); 
    }
    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }
    render() { 
        const { user, users } = this.props;
        return (
            <div>
                <NavBar/>
                <div className="pull-right btn btn-danger">
                    <Link to="/login" style={{color:'#fff'}}>Logout</Link>
                </div>
                <div className="clearfix"></div>
                <h1>Home Page</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users 
    };
}
 
const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };