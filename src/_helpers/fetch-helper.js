import { authHeader } from  './auth-header';
import { alertConstants } from '../common/constants/alert.constants';
import axios from 'axios'; 

export const fetchHelper = {
		httpGet,
		httpPost,
		httpFormPost,
		httpPut,
		httpDelete,
		logout,
		login
};

function httpGet(url,extraHeaders=null) {
	  const requestOptions = {
	        method: 'GET',
	        headers: { ...authHeader(),...extraHeaders,'Content-Type': 'application/json' },
	    };
	    return fetch(url,requestOptions).then(handleResponse);
}

function httpPost(url,jsonBody,extraHeaders=null) {
	   const requestOptions = {
	        method: 'POST',
	        headers: { ...authHeader(),...extraHeaders,'Content-Type': 'application/json' },
	        body: JSON.stringify(jsonBody)
	    };
	   return fetch(url,requestOptions).then(handleResponse);
}

function httpFormPost(url,jsonBody,extraHeaders=null) {
	const requestOptions = {
		 method: 'POST',
		 headers: { ...authHeader(),...extraHeaders,'Content-Type': 'application/x-www-form-urlencoded' },
		 //body: "clientFirm=ALL&"//+jsonBody.get("clientFirm")
		 body:JSON.stringify(jsonBody)
	 };
	 //return fetch(url,requestOptions).then(handleResponse);
	return axios({
		method: 'post',
		url:url,
		data: jsonBody,
		config: { headers: {'Content-Type': 'multipart/form-data' }}
		}).then(handleFormResponse);
}

function httpPut(url,jsonBody,extraHeaders=null) {
	   const requestOptions = {
	        method: 'PUT',
	        headers: { ...authHeader(),...extraHeaders,'Content-Type': 'application/json' },
	        body: JSON.stringify(jsonBody)
		};
		

	  return fetch(url,requestOptions).then(handleResponse);
}

function httpDelete(url,extraHeaders=null) {
	      
	    const requestOptions = {
		        method: 'DELETE',
		        headers: { ...authHeader(),...extraHeaders,'Content-Type': 'application/json' }
		};
	    return fetch(url,requestOptions).then(handleResponse);
}

function handleResponse(response) {  
  return response.text().then(text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
          if (response.status === 401) {
              // auto logout if 401 response returned from api
              logout();
              window.location.reload(true);
          }

          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
      }

      return data;
  }); 
  
}
function handleFormResponse(response) { 
		return response.data;
  }


function login(username,password) {
	return  fetchHelper.httpPost(alertConstants.URL+'/reactjs/reactJSUtil.jsp?actionFlag=VALIDATE_LOGIN', 
	    	{ 'loginName':username, 'noOneKnows':password}).then(user => {
			// login successful if there's a jwt token in the response
		 
	        if (user[0].token) {
	            // store user details and jwt token in local storage to keep user logged in between page refreshes
				localStorage.setItem('user', JSON.stringify(user));
	        }

	        return user;
	    });
}


function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}
  
  