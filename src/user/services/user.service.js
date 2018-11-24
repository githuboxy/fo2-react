import { authHeader,fetchHelper } from '../../_helpers';

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};

function login(username, password) {
	return fetchHelper.login(username, password);
}

function getAll() {
    let _getAll = fetchHelper.httpGet('http://localhost:8081/users');
    return _getAll;
}

function getById(id) {
    let _getById = fetchHelper.httpGet('/users/${id}');
    return _getById;
}

function register(user) {
    return fetchHelper.httpPost('/users/register',user);
}

function update(user) {
    return fetchHelper.httpPut('/users/${user.id}',user);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
	return fetchHelper.httpDelete('/users/${id}');
}

function logout() {
	fetchHelper.logout();
}
