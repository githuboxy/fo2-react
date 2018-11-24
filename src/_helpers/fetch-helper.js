import { authHeader } from  './auth-header';



export const fetchHelper = {
		httpGet,
		httpPost,
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


function login(username,password) {
	return  fetchHelper.httpPost('http://localhost:8081/login', 
	    	{ 'email':username, 'password':password}).then(user => {
	        // login successful if there's a jwt token in the response
	        if (user.token) {
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
  
  