import React from 'react'; 
import { NavBar } from '../navbar/components/navbar';
import { Link } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../user/css/App.css';
import SelectProduct from './SelectProduct';
import EnterTrade from './EnterTrade';
import ConfirmTrade from './ConfirmTrade';
class TradeEntry extends React.Component {
    constructor() {
        super();
        this.state = { tabIndex: 0 };
      }
    render(){
        return(
            <div>
                <NavBar />
                <div className="pull-right btn btn-danger">
                    <Link to="/login" style={{color:'#fff'}}>Logout</Link>
                </div>
                <div className="clearfix"></div>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h4 className="panel-title">Trade Entry</h4>
                    </div>
                    <div className="panel-body">
                        <div className="col-md-12 col-sm-12">
                        <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                            <TabList>
                            <Tab>1. Select Product</Tab>
                            <Tab>2. Enter Trade </Tab>
                            <Tab>3. Confirm Trade  </Tab>
                            </TabList>
                            <TabPanel>
                                <SelectProduct />
                            </TabPanel>
                            <TabPanel>
                                <EnterTrade />
                            </TabPanel>
                            <TabPanel>
                                <ConfirmTrade />
                            </TabPanel>
                        </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TradeEntry;