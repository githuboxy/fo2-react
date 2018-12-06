import React from 'react'; 
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../../user/css/App.css';
import TradeTable from './TradeTable';
class SelectProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tabIndex: 0 };
        this.selectTradeSubmit = this.selectTradeSubmit.bind(this); 
      }
      selectTradeSubmit(obj){ 
         this.props.method1(obj);
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
                                    <TradeTable method={this.selectTradeSubmit.bind(this)} columns={this.props.columns} tdata={this.props.data}/>
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