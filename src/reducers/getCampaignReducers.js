import { GET_ALL_CAMPAIGNS } from './types'
   const initialState = {
    data:[],
   };

export default function (state = initialState, action) {
     switch (action.type) {
       case GET_ALL_CAMPAIGNS:
         return {
           ...state,
           data: action.payload,
        };
       default:
        return state;
    }
}