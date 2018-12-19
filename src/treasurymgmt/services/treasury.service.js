import { authHeader,fetchHelper } from '../../_helpers';
import { alertConstants } from '../../common/constants/alert.constants'; 
import FromData from 'form-data';
export const treasuryService = {
    fetchReport 
};


function fetchReport() { 
    var user = JSON.parse(localStorage.getItem('user'));
    var filtObj = new FromData();
    let _reportData; 
     var pathname = window.location.pathname.replace("/report/","")
     
    if(user[0].token !== undefined){
        filtObj.set("token",user[0].token);
       // filtObj["token"] =user[0].token;
        _reportData = fetchHelper.httpFormPost(alertConstants.URL+'/'+pathname+'.do',filtObj);
        
    }
    return _reportData;
}
 