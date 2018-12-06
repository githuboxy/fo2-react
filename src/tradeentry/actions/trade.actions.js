import { tradeConstants } from '../constants/trade.constants';
import { tradeService } from '../services/trade.service';

export const tradeActions = {
    fetchTradeData,
    fetchTradeReviewData,
    fetchTradeConfirmData
};

function fetchTradeData() {
    return dispatch => {
        dispatch(request());

        tradeService.fetchTradeTable()
            .then(
                tradedata => dispatch(success(tradedata)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: tradeConstants.GETTRADEDATA_REQUEST } }
    function success(tradedata) { return { type: tradeConstants.GETTRADEDATA_SUCCESS, tradedata } }
    function failure(error) { return { type: tradeConstants.GETTRADEDATA_FAILURE, error } }
}

function fetchTradeReviewData(bodyFormData){ 
    console.log("fetchTradeReviewData")
    return dispatch => {
        dispatch(request());

        tradeService.fetchReviewData(bodyFormData)
            .then(
                tradereviewdata => dispatch(success(tradereviewdata)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: tradeConstants.GETTRADEREVIEWDATA_REQUEST } }
    function success(tradereviewdata) { return { type: tradeConstants.GETTRADEREVIEWDATA_SUCCESS, tradereviewdata } }
    function failure(error) { return { type: tradeConstants.GETTRADEREVIEWDATA_FAILURE, error } }
 
}

function fetchTradeConfirmData(bodyFormData){ 
    console.log("fetchTradeConfirmData")
    return dispatch => {
        dispatch(request());

        tradeService.fetchConfirmData(bodyFormData)
            .then(
                tradeconfirmdata => dispatch(success(tradeconfirmdata)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: tradeConstants.GETTRADECONFIRMDATA_REQUEST } }
    function success(tradeconfirmdata) { return { type: tradeConstants.GETTRADECONFIRMDATA_SUCCESS, tradeconfirmdata } }
    function failure(error) { return { type: tradeConstants.GETTRADECONFIRMDATA_FAILURE, error } }
 
}