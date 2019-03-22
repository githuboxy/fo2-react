import React from 'react'; 

import ReactTable from "react-table";
import { array } from 'prop-types';
class MultiTable extends React.Component {
	constructor(props) {
        super(props);
    }
    render(){
        const data1 = this.props.data1;
        const data2 = this.props.data2;
        var columns=[];
        if(data2 !== undefined) { 
            data2.map((item,index) => {
                if(index === 0){
                    var s =  item;                     
                    for(var k in s) {
                    
                        columns.push({
                        Header: k,
                        accessor: k 
                        });
                
                    }
                }
            }); 
           
        }
         var arr=[];
         for(var k in data1){
             arr.push({name:k,value:data1[k]})
         }
           

        let tbody = arr.map((item,index)=>{
            if(item.name !== "rowNumber")
                 return( 
                    <div  className="col-md-4 col-sm-4" key={index}>
                        <label> { item.name } :</label>
                        <label className="TxtNrml"> { item.value } </label>
                    </div>
                );
         });

        return(
            <div className="col-md-12 col-sm-12 head-cls backwhite">
                <div className="panel">
                    <div className="panel-heading clearfix">
                        <h4 className="panel-title pull-left col-md-1">Client Firm:{data1.ClientFirm}</h4>
                    </div>
                </div>
                
                    {tbody} 
           
                <div className="col-md-12 col-sm-12 head-cls backwhite">
                    <div className="panel">
                        <div className="panel-heading clearfix">
                            <h4 className="panel-title pull-left col-md-1">Search Results</h4>
                        </div>
                    </div>
                    <ReactTable showPagination={false} resizable={false} noDataText="No Data Found" data={this.props.data2} columns={columns}  className="table table-striped" />
                </div>
            </div>
        );
    }
}

export default MultiTable;
