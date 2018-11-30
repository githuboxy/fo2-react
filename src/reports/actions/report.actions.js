import { reportConstants } from '../constants/report.constants';
import { reportService } from '../services/report.service';

export const reportActions = {
    fetchReportData,
    fetchReportTableData
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

function fetchReportTableData(){ 
    return dispatch => {
        dispatch(request());

        reportService.fetchReportTable()
            .then(
                reportdatatable => dispatch(success(reportdatatable)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: reportConstants.GETREPORTTBLDATA_REQUEST } }
    function success(reportdatatable) { return { type: reportConstants.GETREPORTTBLDATA_SUCCESS, reportdatatable } }
    function failure(error) { return { type: reportConstants.GETREPORTTBLDATA_FAILURE, error } }
 
}