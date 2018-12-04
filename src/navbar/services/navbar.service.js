import { authHeader,fetchHelper } from '../../_helpers';
import { alertConstants } from '../../common/constants/alert.constants';

export const navbarService = {
    fetchNavbar
};


function fetchNavbar() { 
    var user = JSON.parse(localStorage.getItem('user')); 
    var filtObj = {};
        filtObj["token"] =user[0].token;

    let _navLinks = fetchHelper.httpPost(alertConstants.URL+'/reactjs/reactJSUtil.jsp?actionFlag=TOPPANEL',filtObj);
    return _navLinks;
}