import { tradeConstants } from '../constants/trade.constants';
import { tradeService } from '../services/trade.service';

export const tradeActions = {
    fetchTradeData,
    fetchTradeReviewData,
    fetchTradeConfirmData,
    fetchFixedData,
    fetchFixedTradeReviewData,
    fetchFixedTradeConfirmData
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

function fetchFixedTradeReviewData(bodyFormData){ 
    console.log("fetchFixedTradeReviewData")
    return dispatch => {
        dispatch(request());

        tradeService.fetchFixedReviewData(bodyFormData)
            .then(
                fixedtradereviewdata => dispatch(success(fixedtradereviewdata)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: tradeConstants.GETFIXEDTRADEREVIEWDATA_REQUEST } }
    function success(fixedtradereviewdata) { return { type: tradeConstants.GETFIXEDTRADEREVIEWDATA_SUCCESS, fixedtradereviewdata } }
    function failure(error) { return { type: tradeConstants.GETFIXEDTRADEREVIEWDATA_FAILURE, error } }
 
}

function fetchTradeConfirmData(bodyFormData){  
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

function fetchFixedData() {
    return dispatch => {
        dispatch(request());

        tradeService.fetchFixedTableData()
            .then(
                fixedtradedata => dispatch(success(fixedtradedata)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: tradeConstants.GETFIXEDDATA_REQUEST } }
    function success(fixedtradedata) { return { type: tradeConstants.GETFIXEDDATA_SUCCESS, fixedtradedata } }
    function failure(error) { return { type: tradeConstants.GETFIXEDDATA_FAILURE, error } }
}

function fetchFixedTradeConfirmData(bodyFormData){  
    return dispatch => {
        dispatch(request());

        tradeService.fetchFixedConfirmData(bodyFormData)
            .then(
                fixedtradeconfirmdata => dispatch(success(fixedtradeconfirmdata)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: tradeConstants.GETFIXEDTRADECONFIRMDATA_REQUEST } }
    function success(fixedtradeconfirmdata) { return { type: tradeConstants.GETFIXEDTRADECONFIRMDATA_SUCCESS, fixedtradeconfirmdata } }
    function failure(error) { return { type: tradeConstants.GETFIXEDTRADECONFIRMDATA_FAILURE, error } }
 
}