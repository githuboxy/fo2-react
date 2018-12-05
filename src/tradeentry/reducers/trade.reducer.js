import { tradeConstants } from '../constants/trade.constants';

export function tradedata(state = {}, action) {
    switch (action.type) {
      case tradeConstants.GETTRADEDATA_REQUEST:
        return {
          loading: true
        };
      case tradeConstants.GETTRADEDATA_SUCCESS:
        return {
            tradedata: action.tradedata
        };
      case tradeConstants.GETTRADEDATA_FAILURE:
        return { 
          error: action.error
        };
      
      default:
        return state
    }
  }
 