import React from 'react';  
class EnterTrade extends React.Component {
     
    render(){
        var obj = this.props.selectedRows;
        var arr = [];
        for(var k in obj){
            arr.push({
                "rowNumber" : k
            });
        }
        let entertrademarkup = arr.map((item,index) => {
            return <table key={index} width="100%" className="table table-bordered">
            <tbody>
                <tr>
                    <td width="5%" className="paddAll">{item.rowNumber}</td>
                    <td className="paddAll">
                        <div  className="form-group">
                            <label> Fund 3 </label>
                        </div>
                        <div className="clearfix"></div>
                        <div  className="form-group">
                            <label className="pull-left"> Yesterday's Rate: </label>
                            <label className="pull-right TxtNrml">5.00%</label>
                        </div>
                        <div className="clearfix"></div>
                        <div  className="form-group">
                            <label> EOD Cut-Off Time: </label>
                            <label className="pull-right TxtNrml">11:59 PM (GMT+0:0) </label>
                        </div>
                    </td>
                    <td className="paddAll">
                        <div  className="form-group">
                            <label> Money Fund Account 7012000001   </label>
                        </div>
                        <div  className="form-group">
                            <label> Funding Account  201801020201    </label>
                        </div>
                        <div  className="form-group">
                            <label>Current Balance(NAV=1.00,  Shadow NAV=1.002):    </label>
                        </div>
                        <div  className="form-group">
                            <label>NAV Type:    </label>
                            <label className="pull-right TxtNrml">CNAV </label>
                        </div>
                        <div  className="form-group">
                            <label>Cash (EUR):     </label>
                            <label className="pull-right TxtNrml">1,000,000.0000  </label>
                        </div>
                        <div  className="form-group">
                            <label>Shares:      </label>
                            <label className="pull-right TxtNrml">0.000  </label>
                        </div>
                    </td>
                    <td className="paddAll">
                        <div  className="form-group">
                            <label> Investment:   </label>
                        </div>
                        <div  className="form-group">
                             <select>
                                 <option>Purchase</option>
                                 <option>Redeem</option>
                                 <option>Close</option>
                             </select>
                             <input type="text" />
                             <label>EUR in Cash </label>
                        </div>
                        <div  className="form-group">
                            <a> Add notes (Optional)   </a>
                        </div>
                    </td>
                    <td  width="5%">5</td>
                </tr>
            </tbody>
        </table>
        });
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
                <button className="btn btn-primary btn-xs mt pull-right">Review Trade</button>
            </div>
        );
    }
}

export default EnterTrade;