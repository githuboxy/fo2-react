import { treasuryConstants } from '../constants/treasury.constants';
import { treasuryService } from '../services/treasury.service';

export const treasuryActions = {
    fetchReportData 
};

function fetchReportData() {
    return dispatch => {
        dispatch(request());

        treasuryService.fetchReport()
            .then(
                reportdata => dispatch(success(reportdata)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: treasuryConstants.GETTREASURYDATA_REQUEST } }
    function success(reportdata) { return { type: treasuryConstants.GETTREASURYDATA_SUCCESS, reportdata } }
    function failure(error) { return { type: treasuryConstants.GETTREASURYDATA_FAILURE, error } }
}
 