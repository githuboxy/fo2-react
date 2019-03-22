import { authHeader,fetchHelper } from '../../_helpers';
import { alertConstants } from '../../common/constants/alert.constants';
import FormData from 'form-data';
export const navbarService = {
    fetchNavbar
};


function fetchNavbar() { 
    var user = JSON.parse(localStorage.getItem('user')); 
    var filtObj = new FormData();
        filtObj.set("token",user[0].token)
        // filtObj["token"] =user[0].token;

    let _navLinks = fetchHelper.httpFormPost(alertConstants.URL+'/reactjs/reactJSUtil.jsp?actionFlag=TOPPANEL',filtObj);
    return _navLinks;
}