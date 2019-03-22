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

  export function tradereviewdata(state = {}, action) {
    switch (action.type) {
      case tradeConstants.GETTRADEREVIEWDATA_REQUEST:
        return {
          loading: true
        };
      case tradeConstants.GETTRADEREVIEWDATA_SUCCESS:
        return {
            tradereviewdata: action.tradereviewdata
        };
      case tradeConstants.GETTRADEREVIEWDATA_FAILURE:
        return { 
          error: action.error
        };
      
      default:
        return state
    }
  }
  

  export function tradeconfirmdata(state = {}, action) {
    switch (action.type) {
      case tradeConstants.GETTRADECONFIRMDATA_REQUEST:
        return {
          loading: true
        };
      case tradeConstants.GETTRADECONFIRMDATA_SUCCESS:
        return {
            tradeconfirmdata: action.tradeconfirmdata
        };
      case tradeConstants.GETTRADECONFIRMDATA_FAILURE:
        return { 
          error: action.error
        };
      
      default:
        return state
    }
  }

  export function fixedtradedata(state = {}, action) {
    switch (action.type) {
      case tradeConstants.GETFIXEDDATA_REQUEST:
        return {
          loading: true
        };
      case tradeConstants.GETFIXEDDATA_SUCCESS:
        return {
            fixedtradedata: action.fixedtradedata
        };
      case tradeConstants.GETFIXEDDATA_FAILURE:
        return { 
          error: action.error
        };
      
      default:
        return state
    }
  }

  export function fixedtradereviewdata(state = {}, action) {
    switch (action.type) {
      case tradeConstants.GETFIXEDTRADEREVIEWDATA_REQUEST:
        return {
          loading: true
        };
      case tradeConstants.GETFIXEDTRADEREVIEWDATA_SUCCESS:
        return {
          fixedtradereviewdata: action.fixedtradereviewdata
        };
      case tradeConstants.GETFIXEDTRADEREVIEWDATA_FAILURE:
        return { 
          error: action.error
        };
      
      default:
        return state
    }
  }

  export function fixedtradeconfirmdata(state = {}, action) {
    switch (action.type) {
      case tradeConstants.GETFIXEDTRADECONFIRMDATA_REQUEST:
        return {
          loading: true
        };
      case tradeConstants.GETFIXEDTRADECONFIRMDATA_SUCCESS:
        return {
          fixedtradeconfirmdata: action.fixedtradeconfirmdata
        };
      case tradeConstants.GETFIXEDTRADECONFIRMDATA_FAILURE:
        return { 
          error: action.error
        };
      
      default:
        return state
    }
  }
  

 
 