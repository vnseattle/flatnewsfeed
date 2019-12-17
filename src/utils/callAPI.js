/*********************************************************
 * This file is used to store functions relate to the API
 *********************************************************/
import axios from 'axios';
import * as Config from '../constants/Config';

/**
 * The function is used to call API 
 * @param {string} endpoint the link after the server 
 * @param {string} method methods GET,POST ... 
 * @param {string} body the data send via connection 
 */
export default function callAPI(endpoint, method = 'GET',body = 'null'){
    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data:body
        }).catch(err=>{
            console.log(err);
        })
}