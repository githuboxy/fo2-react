import { authHeader,fetchHelper } from '../../_helpers';

export const reportService = {
    fetchReport,
    fetchReportTable
};


function fetchReport() { 
    let _reportData = fetchHelper.httpGet('http://localhost:8081/reportdata');
    return _reportData;
}
function fetchReportTable() { 
    let _reportTableData = fetchHelper.httpGet('http://localhost:8081/reportdatatable');
    return _reportTableData;
}