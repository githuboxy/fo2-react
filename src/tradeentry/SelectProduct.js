import React from 'react'; 
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../user/css/App.css';
import TradeTable from './TradeTable';
class SelectProduct extends React.Component {
    constructor() {
        super();
        this.state = { tabIndex: 0 };
      }
    render(){
        return(
            <div className="col-md-12">
                <label>Product Category : </label>
                
                <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                            <TabList>
                            <Tab>Money Funds</Tab>
                            <Tab>Interest Bearing</Tab>
                            <Tab>Fixed Term</Tab>
                            <Tab>Yield Matrix</Tab>
                            </TabList>
                            <TabPanel>
                                <div className="col-md-8">
                                    <TradeTable />
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="col-md-8">
                                    <TradeTable />
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="col-md-8">
                                    <TradeTable />
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="col-md-8">
                                    <TradeTable />
                                </div>
                            </TabPanel>
                        </Tabs>
            </div>
        );
    }
}

export default SelectProduct;