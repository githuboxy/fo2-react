import React from 'react'; 
import DatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css'; 
var dateFormat = require('dateformat');
class Filters extends React.Component {
    constructor () { 
        super() 
        this.state = { 
          startDate: new Date(),
          endDate: new Date()
        }; 
        this.handleStartDateChange = this.handleStartDateChange.bind(this); 
        this.handleEndDateChange = this.handleEndDateChange.bind(this); 
        
      } 
      componentWillMount(){
        console.log("componentWillMount")
        this.doChange();
      }
      componentWillReceiveProps(){
        if(this.props.data.reportdata !== undefined){            
         this.props.data.reportdata.map((filter,index) => { 
          if(filter.type === "datepicker"){
            if(filter.name === "fromDate")
                this.state.startDate=new Date(filter.value)
          }
         });
        }
             
      }
      handleStartDateChange(date) {  
         this.setState({startDate:date});
      }
      handleEndDateChange(date) {  
        this.setState({endDate:date});
     }
     doChange(e){ 
      
      var filtObj = {};
     if(this.props.data.reportdata !== undefined)      
      for(var i =0; i<this.props.data.reportdata.length; i++){
         var temp = this.props.data.reportdata[i].name; 
         
          if((this.props.data.reportdata[i].type !== "data") && (this.props.data.reportdata[i].type !== "Title") && (this.props.data.reportdata[i].type !== "datepicker") && (this.props.data.reportdata[i].type !== "Button") && (this.props.data.reportdata[i].type !== "newline")){
            filtObj[this.props.data.reportdata[i].name] = this.refs[temp].value; 
          }
 
          if(this.props.data.reportdata[i].type === "datepicker"){ 
              if(this.props.data.reportdata[i].name === "fromDate")
                filtObj[this.props.data.reportdata[i].name] = dateFormat(this.state.startDate,"mmm d, yyyy");  
              if(this.props.data.reportdata[i].name === "toDate")
                filtObj[this.props.data.reportdata[i].name] = dateFormat(this.state.endDate,"mmm d, yyyy");  
           }
          }  
            this.props.method(filtObj);
     }
      
    render(){ 
      
        const { data } = this.props;
        let filetermarkup; 
        if(data.reportdata !== undefined){            
        filetermarkup = data.reportdata.map((filter,index) => { 
            if(filter.type === "Select"){
             return(    
              <div className="form-group col-md-2 col-sm-2" key={filter.id.toString()}>
                   <label> { filter.label } :</label>
                   <select ref={ filter.name }  name={filter.name} className="form-control input-sm">
                      {
                           filter.values.map((obj,index) => { 
                              return <option key={index} value={obj.id}>{obj.name}</option>
                          })
                       } 
                   </select>
               </div>
               );
            }else if(filter.type === "datepicker"){
                if(filter.name === "fromDate"){
                   
                  
                 return (
                   <div className="form-group col-md-2 col-sm-2" key={filter.id.toString()}>
                       <label> { filter.label }:</label>
                      <DatePicker dateFormat="MMM dd, YYYY" ref={ filter.name } name={filter.name} className="form-control"   selected={this.state.startDate}  onChange={this.handleStartDateChange} />
                   </div>
                 );
                }else if(filter.name === "toDate"){
                
                 return (
                   <div className="form-group col-md-2 col-sm-2" key={filter.id.toString()}>
                       <label> { filter.label }:</label>
                      <DatePicker dateFormat="MMM dd, YYYY" ref={ filter.name } name={filter.name} className="form-control"  selected={this.state.endDate}   onChange={this.handleEndDateChange} />
                   </div>
                 );
                }
              }else if(filter.type === "Button"){
                return (
                 <div  className="form-group col-md-2 col-sm-2 mt" key={filter.id.toString()}>
                      <a title="Go" onClick={(e)=>{this.doChange();}} className="btn btn-primary btn-xs">{ filter.name }</a> 
                  </div>
               );
              }else if(filter.type === "input"){
               return (
                 <div  className="form-group col-md-2 col-sm-2" key={filter.id.toString()}>
                      <label> { filter.label } :</label>
                     <input ref={filter.name}  defaultValue={filter.name}/>
                  </div>
               );      
              }else if(filter.type === "checkbox"){
               return (
                 <div  className="form-group col-md-2 col-sm-2" key={filter.id.toString()}>
                      <label> { filter.label } :</label>
                     <input type="checkbox" ref={filter.name}/>
                  </div>
               );      
              }else if(filter.type === "radio"){
               return (
                 <div  className="form-group col-md-2 col-sm-2" key={filter.id.toString()}>
                      <label> { filter.label } :</label>
                     <input type="radio" ref={filter.name}/>
                  </div>
               );     
              }else if(filter.type === "textarea"){
               return (
                 <div  className="form-group col-md-2 col-sm-2" key={filter.id.toString()}>
                      <label> { filter.label } :</label>
                     <input type="textarea" className="form-control input-sm" ref={filter.name} />
                  </div>
               );      
              }else if(filter.type === "newline"){
                return  <div key="newline" className="clearfix"></div>        
              } 
        });
    }
 
        return(
            <div>
                {filetermarkup}
            </div>
        );
    }
}

export default Filters;