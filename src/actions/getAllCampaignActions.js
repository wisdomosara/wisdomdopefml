import axios from 'axios';
import {
    GET_ALL_CAMPAIGNS
} from '../reducers/types';

let baseURL = 'https://api.fundmylaptop.com/api/campaigns/campaigns';

// const getAuthorization = localStorage.getItem('FMLToken');

export const getCampaigns = (dispatch) => {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('FMLToken');
    axios
        .get(`${baseURL}`)
        .then(res => {
            console.log(res.data)
            dispatch({
                type: GET_ALL_CAMPAIGNS,
                payload: res.data.data
            })
        })
        .catch(err => {
            // console.log(getAuthorization);
            console.log(err)
        })
} 