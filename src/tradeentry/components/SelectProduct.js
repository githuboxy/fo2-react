import React from 'react'; 
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../../user/css/App.css';
import TradeTable from './TradeTable';
import FixedTradeTable from './FixedTradeTable';
import { connect } from 'react-redux';
import { tradeActions } from '../actions/trade.actions';

class SelectProduct extends React.Component {
    constructor() {
        super();
        this.state = { tabIndex: 0 };
        this.selectTradeSubmit = this.selectTradeSubmit.bind(this);
        this.selectFixedTradeSubmit = this.selectFixedTradeSubmit.bind(this);
        this.fixedTerm = this.fixedTerm.bind(this); 
      }
       
      selectTradeSubmit(obj){ 
         this.props.method1(obj);
      }
      selectFixedTradeSubmit(obj){ 
        this.props.fixedmethod(obj);
     }
      componentDidMount(){
        this.props.dispatch(tradeActions.fetchFixedData());
      }
      fixedTerm(){
           
      }
    render(){ 
        const{ fixedtradedata } = this.props.fixedtradedata; 
        let results,results1,columns;
        if(fixedtradedata !== undefined)
        fixedtradedata.map((item,index) => {
            if(item.name === "data")
                results = item.values
            if(item.name === "Columns")
                columns = item.values
        })  

        if(fixedtradedata !== undefined)
        fixedtradedata.map((item,index) => { 
            if(item.name === "data")
                results1 = item.values
            
        })   

        return(
            <div className="col-md-12">
                <label>Product Category : </label>
                
                <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                            <TabList>
                            <Tab>Money Funds</Tab>
                            <Tab>Interest Bearing</Tab>
                            <Tab onClick={this.fixedTerm.bind(this)}>Fixed Term</Tab>
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
                                    <FixedTradeTable method={this.selectFixedTradeSubmit.bind(this)} columns={columns} tdata={results1}/>
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
function mapStateToProps(state) { 
    const { fixedtradedata } = state;
    return { fixedtradedata };
}

const connectedSelectProduct = connect(mapStateToProps)(SelectProduct);
export { connectedSelectProduct as SelectProduct };