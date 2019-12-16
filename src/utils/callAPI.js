import axios from 'axios';
import * as Config from '../constants/Config';

export default function callAPI(endpoint, method = 'GET',body = 'null'){
    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data:body
        }).catch(err=>{
            console.log(err);
        })
}