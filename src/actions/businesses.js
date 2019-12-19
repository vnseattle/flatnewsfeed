/*********************************************************
 * Actions are payloads of information that send data 
 * from the application to the store. 
 * They are the only source of information for the store. 
 * You send them to the store using store. dispatch()
 * Author: Henry Ng - Dec 18, 2019
 *********************************************************/
import * as types from '../constants/BusinessesActionType';
import callAPI  from '../utils/callAPI';



/**
 * Fetch businesses after calling API 
 */
export const fetchBusinessesRequest = (bID,catID) => {
    return (dispatch) => {
        return callAPI(`GetAdsNewsFeed.php?crid=${bID}&catid=${catID}`,'GET',null).then(res => { 
            dispatch(updateBusinesses(res.data,catID));
        })
    }
}

/**
 * Update businesses to the store 
 * @param businesses : list of businesses
 * @param catID: category ID of the business 
 */
export const updateBusinesses = (businesses,catID) => {
    return {
        type: types.LIST_BUSINESSES,
        businesses,
        catID  
    }
}


