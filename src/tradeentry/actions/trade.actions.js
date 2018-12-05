import { tradeConstants } from '../constants/trade.constants';
import { tradeService } from '../services/trade.service';

export const tradeActions = {
    fetchTradeData 
};

function fetchTradeData() {
    return dispatch => {
        dispatch(request());

        tradeService.fetchReportTable()
            .then(
                tradedata => dispatch(success(tradedata)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: tradeConstants.GETTRADEDATA_REQUEST } }
    function success(tradedata) { return { type: tradeConstants.GETTRADEDATA_SUCCESS, tradedata } }
    function failure(error) { return { type: tradeConstants.GETTRADEDATA_FAILURE, error } }
}

 