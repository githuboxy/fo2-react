import React from 'react'; 
import DatePicker from 'react-datepicker'; 
import { withStyles } from '@material-ui/core/styles';
import 'react-datepicker/dist/react-datepicker.css'; 
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
});
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
        // this.doChange();
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
      console.log(this.refs)
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
      const { classes } = this.props;
        const { data } = this.props;
        let filetermarkup; 
        
        if(data.reportdata !== undefined){            
        filetermarkup = data.reportdata.map((filter,index) => { 
            if(filter.type === "Select"){
             return(    
                <Grid item  key={filter.id.toString()}>
                  <InputLabel shrink htmlFor="age-native-label-placeholder">
                    { filter.label } :
                  </InputLabel> 
                    <NativeSelect
                      ref={ filter.name }  name={filter.name}
                      >
                        {filter.values.map((obj,index) => { 
                                return <option key={index} value={obj.id}>{obj.name}</option>
                            })}
                      </NativeSelect>
                </Grid>
               );
            }else if(filter.type === "datepicker"){
                if(filter.name === "fromDate"){
                 return (
                  <Grid item  key={filter.id.toString()}>
                       <InputLabel> { filter.label }:</InputLabel>
                      <TextField type="date" ref={ filter.name } name={filter.name}     selected={this.state.startDate}  onChange={this.handleStartDateChange} />
                   </Grid>
                 );
                }else if(filter.name === "toDate"){
                 return (
                  <Grid item  key={filter.id.toString()}>
                       <InputLabel> { filter.label }:</InputLabel>
                      <TextField type="date" ref={ filter.name } name={filter.name}   selected={this.state.endDate}   onChange={this.handleEndDateChange} />
                   </Grid>
                 );
                }
              }else if(filter.type === "Button"){
                return (
                <Button size="small" variant="outlined" className={classes.margin}  title="Go" onClick={(e)=>{this.doChange();}} key={filter.id.toString()}>
                  { filter.name }
                </Button>
               );
              }else if(filter.type === "input"){
               return (
                <Grid item  key={filter.id.toString()}>
                      <InputLabel> { filter.label } :</InputLabel>
                     <TextField ref={filter.name}  defaultValue={filter.name}/>
                  </Grid>
               );      
              }else if(filter.type === "checkbox"){
               return (
                <Grid item  key={filter.id.toString()}>
                      <InputLabel> { filter.label } :</InputLabel>
                     <TextField type="checkbox" ref={filter.name}/>
                  </Grid>
               );      
              }else if(filter.type === "radio"){
               return (
                <Grid item  key={filter.id.toString()}>
                      <InputLabel> { filter.label } :</InputLabel>
                     <TextField type="radio" ref={filter.name}/>
                  </Grid>
               );     
              }else if(filter.type === "textarea"){
               return (
                <Grid item  key={filter.id.toString()}>
                      <InputLabel> { filter.label } :</InputLabel>
                     <TextField type="textarea"   ref={filter.name} />
                  </Grid>
               );      
              }else if(filter.type === "newline"){
                return  <div key="newline" className="clearfix"></div>        
              } 
        });
    }
 
        return(
            <Grid container spacing={24} >
                {filetermarkup}
            </Grid>
        );
    }
}

export default withStyles(styles)(Filters);