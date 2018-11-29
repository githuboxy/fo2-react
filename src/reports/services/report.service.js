import { authHeader,fetchHelper } from '../../_helpers';

export const reportService = {
    fetchReport
};


function fetchReport() { 
    let _reportData = fetchHelper.httpGet('http://localhost:8081/reportdata');
    return _reportData;
}