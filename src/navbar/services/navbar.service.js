import { authHeader,fetchHelper } from '../../_helpers';

export const navbarService = {
    fetchNavbar
};


function fetchNavbar() { 
    let _navLinks = fetchHelper.httpGet('http://localhost:8081/navlinks');
    return _navLinks;
}