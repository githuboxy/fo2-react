import { reportConstants } from '../constants/report.constants';
import { reportService } from '../services/report.service';

export const reportActions = {
    fetchReportData
};

function fetchReportData() {
    return dispatch => {
        dispatch(request());

        reportService.fetchReport()
            .then(
                reportdata => dispatch(success(reportdata)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: reportConstants.GETREPORTDATA_REQUEST } }
    function success(reportdata) { return { type: reportConstants.GETREPORTDATA_SUCCESS, reportdata } }
    function failure(error) { return { type: reportConstants.GETREPORTDATA_FAILURE, error } }
}