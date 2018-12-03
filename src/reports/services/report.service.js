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
    
    if(user[0].token !== undefined){
        filtObj["token"] =user[0].token;
        _reportData = fetchHelper.httpPost('https://192.168.21.45:2222/fotrd/TRDINQR.do',filtObj);
        
    }
    return _reportData;
}
function fetchReportTable(bodyFormData) { 
    var user = JSON.parse(localStorage.getItem('user'));
    
    let _reportTableData;
    // console.log("_reportTableData")
    // console.log(user)
    if(user[0].token !== undefined){
        bodyFormData.set("token",user[0].token)
        bodyFormData.set("jsonActionFlag","GO")
 
        console.log("bodyFormData--->")
        console.log(bodyFormData.get("clientFirm"))
     

        _reportTableData = fetchHelper.httpPost('https://192.168.21.45:2222/fotrd/TRDINQR.do',bodyFormData);
       
        // console.log(_reportTableData)
    }
    return _reportTableData;
}