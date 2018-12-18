import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Switch } from 'react-router';
import { history } from '../_helpers';
import { alertActions } from '../rootindex/actions';
import { PrivateRoute } from '../rootindex/components';
import { HomePage } from '../rootindex/pages';
import { LoginPage } from '../rootindex/pages';
import { RegisterPage } from '../rootindex/pages';
import { ReportTemplate } from '../reports/components/ReportTemplate';
import { ReportMultiTemplates } from '../reports/components/ReportMultiTemplate';
import { TradeEntry } from '../tradeentry/components/TradeEntry'; 

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() { 
        const { alert } = this.props;
        
        return (
            
                <div className="container-fluid"> 
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                        
                            <Switch>
                                
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                                <Route path="/DEALENT" component={TradeEntry} />
                                <Route path="/report/*" component={ReportTemplate} />
                                <Route path="/reportM/*" component={ReportMultiTemplates} />
                            </Switch>
                        </Router>
                </div>
            
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 