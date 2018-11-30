import { reportConstants } from '../constants/report.constants';

export function reportdata(state = {}, action) {
    switch (action.type) {
      case reportConstants.GETREPORTDATA_REQUEST:
        return {
          loading: true
        };
      case reportConstants.GETREPORTDATA_SUCCESS:
        return {
            reportdata: action.reportdata
        };
      case reportConstants.GETREPORTDATA_FAILURE:
        return { 
          error: action.error
        };
      
      default:
        return state
    }
  }

  export function reportdatatable(state = {}, action) { 
    switch (action.type) {
      case reportConstants.GETREPORTTBLDATA_REQUEST:
        return {
          loading: true
        };
      case reportConstants.GETREPORTTBLDATA_SUCCESS: 
        return {
          reportdatatable: action.reportdatatable
        };
      case reportConstants.GETREPORTTBLDATA_FAILURE:
        return { 
          error: action.error
        };
      
      default:
        return state
    }
  }