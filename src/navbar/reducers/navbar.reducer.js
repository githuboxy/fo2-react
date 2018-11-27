import { navbarConstants } from '../constants/navbar.constants';

export function navlinks(state = {}, action) {
    switch (action.type) {
      case navbarConstants.GETNAVLINKS_REQUEST:
        return {
          loading: true
        };
      case navbarConstants.GETNAVLINKS_SUCCESS:
        return {
            navlinks: action.navlinks
        };
      case navbarConstants.GETNAVLINKS_FAILURE:
        return { 
          error: action.error
        };
      
      default:
        return state
    }
  }