import { authHeader,fetchHelper } from '../../_helpers';
import { alertConstants } from '../../common/constants/alert.constants'; 
import FromData from 'form-data';
export const tradeService = {
    fetchTradeTable,
    fetchReviewData,
    fetchConfirmData
};

 
function fetchTradeTable() { 
    var user = JSON.parse(localStorage.getItem('user'));
    var filtObj = new FromData(); 
     var pathname = window.location.pathname;
     let _tradeData; 
    if(user[0].token !== undefined){
        //filtObj["token"] =user[0].token;
        filtObj.set("token",user[0].token);
        _tradeData = fetchHelper.httpFormPost(alertConstants.URL+'/'+pathname+'.do',filtObj);
    }
    return _tradeData;
}

function fetchReviewData(bodyFormData) { 
    var user = JSON.parse(localStorage.getItem('user'));
    
    let _tradeReviewData;
      
    // var pathname = window.location.pathname;

    if(user[0].token !== undefined){
        bodyFormData.set("token",user[0].token)  
        
        _tradeReviewData = fetchHelper.httpFormPost(alertConstants.URL+'/MULTIMMFDEALING.do',bodyFormData);
    }
    return _tradeReviewData;
}

function fetchConfirmData(bodyFormData) { 
    var user = JSON.parse(localStorage.getItem('user'));
    
    let _tradeConfirmData;
      
    // var pathname = window.location.pathname;

    if(user[0].token !== undefined){
        bodyFormData.set("token",user[0].token)  
        
        _tradeConfirmData = fetchHelper.httpFormPost(alertConstants.URL+'/MULTIMMFINSERTTRADE.do',bodyFormData);
    }
    return _tradeConfirmData;
}