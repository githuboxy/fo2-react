import React from 'react'; 
import DatePicker from 'react-datepicker'; 
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css'; 

class Filters extends React.Component {
    constructor () { 
        super() 
        this.state = { 
          startDate: moment(),
          endDate: moment()
        }; 
        this.handleStartDateChange = this.handleStartDateChange.bind(this); 
        this.handleEndDateChange = this.handleEndDateChange.bind(this); 
        
      } 
      handleStartDateChange(date) {  
         this.setState({startDate:date});
      }
      handleEndDateChange(date) {  
        this.setState({endDate:date});
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
                           filter.values.map((obj) => {
                              return <option key={obj.id} value={obj.id}>{obj.name}</option>
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
                     <DatePicker dateFormat="MMM DD, YYYY" ref={ filter.name } name={filter.name} className="form-control"     onChange={this.handleStartDateChange} />
                   </div>
                 );
                }else if(filter.name === "toDate"){
                 return (
                   <div className="form-group col-md-2 col-sm-2" key={filter.id.toString()}>
                       <label> { filter.label }:</label>
                     <DatePicker dateFormat="MMM DD, YYYY" ref={ filter.name } name={filter.name} className="form-control"    onChange={this.handleEndDateChange} />
                   </div>
                 );
                }
              }else if(filter.type === "button"){
                return (
                 <div  className="form-group col-md-2 col-sm-2 mt" key={filter.id.toString()}>
                      <a title="Go" onClick={this.props.method} className="btn btn-primary btn-xs">{ filter.name }</a> 
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