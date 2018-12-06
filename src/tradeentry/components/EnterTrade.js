import React from 'react';  
 
class EnterTrade extends React.Component {
    constructor(props) {
		super(props);
	 
        this.doSubmit = this.doSubmit.bind(this); 
        this.doConfirm = this.doConfirm.bind(this); 
    }
    doSubmit(){ 
		this.props.method() 
    }
    doConfirm(){ 
		this.props.method2(this.props.selectedRows) 
	}
    render(){ 
        var data;
        if(this.props.data !== undefined)
         data = this.props.data;
  
       var arr1 =[];
        for(var k in data){
            arr1.push(data[k])
        }
         
        var obj = this.props.selectedRows;
        var arr = [];
        let entertrademarkup;
        for(var k in obj){
            arr.push({
                "rowNumber" : k
            });
        }
        let buttonMarkup;
        if(this.props.flag !== "confirm"){
            buttonMarkup =  <button className="btn btn-primary btn-xs mt pull-right" onClick={this.doSubmit.bind(this)}>Review Trade</button>
        }else{
            buttonMarkup =  <button className="btn btn-primary btn-xs mt pull-right" onClick={this.doConfirm.bind(this)}>Confirm Trade</button>
        }

        if(data !== undefined){
         entertrademarkup = arr1.map((item,index) => { 
            var obj = item;
            let selectMarkup;
            
             
             if(this.props.flag !== "confirm"){
                selectMarkup =  <div>
                <div  className="form-group">
                            <label> Investment:   </label>
                        </div>
                <div  className="form-group">
                <select>
                    {
                       obj.transTypes.map((obj,index) => { 
                           return <option key={index} value={obj.id}>{obj.value}</option>
                       })
                   }
                </select>
                <input type="text" name={"tempAmount"+obj.rowNumber.toString()} />
                <label>{obj.CurrencyCode} in Cash </label>
           </div>
            <div  className="form-group">
                <a> Add notes (Optional)   </a>
            </div></div>
             }else{
                selectMarkup =  <div><div  className="form-group">
                        <label>Purchase</label>
                    </div>
                    <div className="clearfix"></div>
                    <div  className="form-group">
                        <label className="pull-left"> Cash ({obj.CurrencyCode}):</label>
                        <label className="pull-right TxtNrml">{obj.abdbal}</label>
                    </div>
                    <div className="clearfix"></div>
                    <div  className="form-group">
                        <label className="pull-left">Shares:</label>
                        <label className="pull-right TxtNrml">{obj.Shares}</label>
                    </div>
                </div>
             }
            return <table key={index} width="100%" className="table table-bordered">
            <tbody>
                <tr>
                    <td width="5%" className="paddAll">{obj.rowNumber}</td>
                    <td className="paddAll">
                        <div  className="form-group">
                            <label> {obj.prodName} </label>
                        </div>
                        <div className="clearfix"></div>
                        <div  className="form-group">
                            <label className="pull-left"> Yesterday's rate: </label>
                            <label className="pull-right TxtNrml">{obj["Yesterday's rate"]}</label>
                        </div>
                        <div className="clearfix"></div>
                        <div  className="form-group">
                            <label> EOD Cut-Off Time: </label>
                            <label className="pull-right TxtNrml">{obj["EOD Cut-Off Time"]}</label>
                        </div>
                    </td>
                    <td className="paddAll">
                        <div  className="form-group">
                            <label> Money Fund Account {obj["Money Fund Account"]}  </label>
                        </div>
                        <div  className="form-group">
                            <label> Funding Account  {obj["Funding Account"]}    </label>
                        </div>
                        <div  className="form-group">
                            <label>Current Balance(NAV={obj.NAV},  Shadow NAV={obj.Shadow}):    </label>
                        </div>
                        <div  className="form-group">
                            <label>NAV Type:    </label>
                            <label className="pull-right TxtNrml">{obj["NAV Type"]}</label>
                        </div>
                        <div  className="form-group">
                            <label>Cash ({obj.CurrencyCode}):     </label>
                            <label className="pull-right TxtNrml">{obj.abdbal}</label>
                        </div>
                        <div  className="form-group">
                            <label>Shares:      </label>
                            <label className="pull-right TxtNrml">{obj.Shares}</label>
                        </div>
                    </td>
                    <td className="paddAll">
                        
                       {selectMarkup}
                        
                    </td>
                    <td  width="5%">5</td>
                </tr>
            </tbody>
        </table>
        });
    }
        return(
            <div className="col-md-12">
                <div className="panel panel-primary"> 
                    <div className="panel-heading">
                        <h4 className="panel-title">Enter Trade</h4>
                    </div>
                    <div className="panel-body">
                            {entertrademarkup}
                    </div>
                </div>
               {buttonMarkup}
            </div>
        );
    }
}

export default EnterTrade;