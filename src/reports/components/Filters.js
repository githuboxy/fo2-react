import React from 'react'; 
class Filters extends React.Component {
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
            }else if(filter.type === "button"){
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