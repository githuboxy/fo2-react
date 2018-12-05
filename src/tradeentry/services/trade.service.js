import { authHeader,fetchHelper } from '../../_helpers';
import { alertConstants } from '../../common/constants/alert.constants'; 
export const tradeService = {
    fetchReportTable
};

 
function fetchReportTable() { 
    var user = JSON.parse(localStorage.getItem('user'));
    var filtObj = {}; 
     var pathname = window.location.pathname;
     let _tradeData; 
    if(user[0].token !== undefined){
        filtObj["token"] =user[0].token;
        _tradeData = fetchHelper.httpPost(alertConstants.URL+'/'+pathname+'.do',filtObj);
    }
    return _tradeData;
}