import { navbarConstants } from '../constants/navbar.constants';
import { navbarService } from '../services/navbar.service';

export const navbarActions = {
    fetchNavlinks
};

function fetchNavlinks() {
    return dispatch => {
        dispatch(request());

        navbarService.fetchNavbar()
            .then(
                navlinks => dispatch(success(navlinks)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: navbarConstants.GETNAVLINKS_REQUEST } }
    function success(navlinks) { return { type: navbarConstants.GETNAVLINKS_SUCCESS, navlinks } }
    function failure(error) { return { type: navbarConstants.GETNAVLINKS_FAILURE, error } }
}