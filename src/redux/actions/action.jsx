import axios from 'axios'

export const INCREASE_DONATION = 'INCREASE_DONATION';
export const CLEAR_DONATION = 'CLEAR_DONATION';




export const donateMoney = (donate) => dispatch => {
    //payload for money donated 
    console.log(donate);
    return{
        type: INCREASE_DONATION,
        payload: donate,
    }
}
export const  clearAmount = (donate) => dispatch => {
    //clear the amount of donated money
    console.log(donate);
    return{
        type: CLEAR_DONATION,
        payload: donate,
    }
}
