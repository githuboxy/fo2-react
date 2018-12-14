import React from 'react'; 
import { NavBar } from '../../navbar/components/navbar';
import { Link } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../../user/css/App.css';
import { connect } from 'react-redux';
import { SelectProduct } from './SelectProduct';
import EnterTrade from './EnterTrade';
import ConfirmTrade from './ConfirmTrade';
import { tradeActions } from '../actions/trade.actions';
import FormData from 'form-data';

class TradeEntry extends React.Component {
    constructor() {
        super();
        this.state = { tabIndex: 0, enterdata: '' };
        this.tradeSubmit = this.tradeSubmit.bind(this); 
        this.fixedTradeSubmit = this.fixedTradeSubmit.bind(this); 
        this.reviewSubmit = this.reviewSubmit.bind(this);
        this.confirmSubmit = this.confirmSubmit.bind(this);
      }
      componentDidMount(){
        this.props.dispatch(tradeActions.fetchTradeData());
      }
      tradeSubmit(obj){
        this.state.enterdata = obj;
        this.setState({ tabIndex:1 })
         
        var arr = [];
        for(var k in obj){
            arr.push({
                "rowNumber" : k
            });
        }
        var results2;
       
        this.props.tradedata.tradedata.map((item,index) => {
            if(item.name === "data")
                results2 = item.values;
        })
       var bodyFormdata = new FormData();
        results2.map((item,index) => {
             for(var i=0 ;i <arr.length;i++){
                if(arr[i].rowNumber === item.rowNumber){
                    for(var k in item){
                        if(k === "fromPage" || k === "mmmfDealListSize")
                            bodyFormdata.set(k,item[k]) 
                        else
                            bodyFormdata.set(k+item.rowNumber,item[k])
                     }
                }
             }
        });

        this.props.dispatch(tradeActions.fetchTradeReviewData(bodyFormdata));
      }
      fixedTradeSubmit(obj){
        this.state.enterdata = obj;
        this.setState({ tabIndex:1 })
         
        var arr = [];
        for(var k in obj){
            arr.push({
                "rowNumber" : k
            });
        }
        var results2;
       
        this.props.tradedata.tradedata.map((item,index) => {
            if(item.name === "data")
                results2 = item.values;
        })
       var bodyFormdata = new FormData();
        results2.map((item,index) => {
             for(var i=0 ;i <arr.length;i++){
                if(arr[i].rowNumber === item.rowNumber){
                    for(var k in item){
                        if(k === "fromPage" || k === "mmmfDealListSize")
                            bodyFormdata.set(k,item[k]) 
                        else
                            bodyFormdata.set(k+item.rowNumber,item[k])
                     }
                }
             }
        });

        this.props.dispatch(tradeActions.fetchTradeReviewData(bodyFormdata));
      }

      reviewSubmit(){        
        this.setState({ tabIndex:2 })
      }
      confirmSubmit(obj){ 
        var arr = [];
        for(var k in obj){
            arr.push({
                "rowNumber" : k
            });
        }
        var results2;
       
        this.props.tradedata.tradedata.map((item,index) => {
            if(item.name === "data")
                results2 = item.values;
        })   
        var bodyFormdata = new FormData();
        results2.map((item,index) => {
             for(var i=0 ;i <arr.length;i++){
                if(arr[i].rowNumber === item.rowNumber){
                    for(var k in item){
                        if(k === "fromPage" || k === "mmmfDealListSize")
                            bodyFormdata.set(k,item[k]) 
                        else
                            bodyFormdata.set(k+item.rowNumber,item[k])
                     }
                }
             }
        });
        this.props.dispatch(tradeActions.fetchTradeConfirmData(bodyFormdata));
      }

    render(){
        const{ tradedata } = this.props.tradedata;
        const{ tradereviewdata } = this.props.tradereviewdata; 
        const{ tradeconfirmdata } = this.props.tradeconfirmdata; 
        
        let results,results1,columns;
        if(tradedata !== undefined)
        tradedata.map((item,index) => {
            if(item.name === "data")
                results = item.values
            if(item.name === "Columns")
                columns = item.values
        })  

        if(tradereviewdata !== undefined)
        tradereviewdata.map((item,index) => { 
            if(item.name === "data")
                results1 = item.values
            
        })   
        
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
                                <SelectProduct method1={this.tradeSubmit.bind(this)} fixedmethod={this.fixedTradeSubmit.bind(this)} data={results} columns={columns}/>
                            </TabPanel>
                            <TabPanel>
                                <EnterTrade method={this.reviewSubmit.bind(this)} selectedRows={this.state.enterdata} data={results1}/>
                            </TabPanel>
                            <TabPanel>
                                <EnterTrade flag="confirm" method2={this.confirmSubmit.bind(this)} selectedRows={this.state.enterdata} data={results1}/>
                            </TabPanel>
                        </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) { 
    const { tradedata,tradereviewdata,tradeconfirmdata } = state;
    return { tradedata,tradereviewdata,tradeconfirmdata };
}

const connectedTradeEntry = connect(mapStateToProps)(TradeEntry);
export { connectedTradeEntry as TradeEntry };