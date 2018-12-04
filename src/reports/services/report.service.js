import { authHeader,fetchHelper } from '../../_helpers';
import { alertConstants } from '../../common/constants/alert.constants'; 
export const reportService = {
    fetchReport,
    fetchReportTable
};


function fetchReport() { 
    var user = JSON.parse(localStorage.getItem('user'));
    var filtObj = {};
    let _reportData; 
     var pathname = window.location.pathname.replace("/report/","")
     
    if(user[0].token !== undefined){
        filtObj["token"] =user[0].token;
        _reportData = fetchHelper.httpPost(alertConstants.URL+'/'+pathname+'.do',filtObj);
        
    }
    return _reportData;
}
function fetchReportTable(bodyFormData) { 
    var user = JSON.parse(localStorage.getItem('user'));
    
    let _reportTableData;
      
    var pathname = window.location.pathname.replace("/report/","")

    if(user[0].token !== undefined){
        bodyFormData.set("token",user[0].token)
        bodyFormData.set("reactJSActionFlag","GO")
        _reportTableData = fetchHelper.httpFormPost(alertConstants.URL+'/'+pathname+'.do',bodyFormData);
    }
    return _reportTableData;
}