import { INCREASE_DONATION, 
         CLEAR_DONATION
 } from "../actions/action";


export const initialState = {
    donationAmount: 0,
    button: [
        {id: 1, price: 5},
        {id: 2, price: 10},
        {id: 3, price: 20},
        {id: 4, price: 50},
        {id: 5, price: 100},
        {id: 6, price: 200}
    ] 
        
    

}

export const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case INCREASE_DONATION:
            return{
                ...state,
                donationAmount: state.donationAmount + action.payload.price
            }
        case CLEAR_DONATION:
            return{
                ...state,
                donationAmount: state.donationAmount - action.payload.price
            }
        default:
            return state;
    }

}