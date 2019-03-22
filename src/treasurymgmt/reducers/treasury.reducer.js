import { treasuryConstants } from '../constants/treasury.constants';

export function reportdata(state = {}, action) {
    switch (action.type) {
      case treasuryConstants.GETTREASURYDATA_REQUEST:
        return {
          loading: true
        };
      case treasuryConstants.GETTREASURYDATA_SUCCESS:
        return {
            reportdata: action.reportdata
        };
      case treasuryConstants.GETTREASURYDATA_FAILURE:
        return { 
          error: action.error
        };
      
      default:
        return state
    }
  }

   