import React,{useReducer} from 'react'
import Header from '../Header/Header'
import {connect} from 'react-redux';
import {initialState, rootReducer} from '../../redux/reducers/reducer'
import {donateMoney} from '../../redux/actions/action'
//import {useSelector} and {useDispatch} from react-redux
import {Button}from '..'
import DonateButton from '../Button/DonateButton/DonateButton';

const DonationPage = (props) => {
     const [state, dispatch] = useReducer(rootReducer, initialState);
    //const state = useSelctor(state => state.InitialState)
    //const donateMoney = useDispatch()   then write inline function...



    console.log(props);

    

    return (
      <div>
        <div>
          <Header title="Donate Now" />
          <h2>Choose an Amount</h2>
            <Button text='$5'/>
            <Button text='$10'/>
            <Button text='$20'/>
            <Button text='$50'/>
            <Button text='$100'/>
            <Button text='$200'/>

            <h3>Other Amount</h3>
            <input
                type='tel'
                placeholder='$ Other Amount'
            />

            <DonateButton/>
          
            {console.log(state)}
        </div>
      </div>
    );

}


export default DonationPage;