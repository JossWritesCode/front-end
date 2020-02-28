import React,{useState} from 'react'
import Header from '../Header/Header'
import {connect, useDispatch, useSelector} from 'react-redux';
import {initialState, rootReducer} from '../../redux/reducers/reducer'
import {donateMoney} from '../../redux/actions/action'
//import {useSelector} and {useDispatch} from react-redux
import {Button}from '..'
import DonateButton from '../Button/DonateButton/DonateButton';

const DonationPage = (props) => {
    const [state, setState] = useState(rootReducer, initialState);
    // const state = useSelector(state => state.InitialState)
    // const money = useDispatch()   //then write inline function...

    const onClick= (e)=> {
      state({...state, [e.target.name]:e.target.value});
      console.log(e)
    }

    const handleSubmit = e =>{
        e.preventDefault();
        donateMoney(state);
        setState({
          name: '',
          method: '',
          account: '',
          amount: ''
        })
    }

    console.log(props);

    

    return (
      
        <div>
          <Header title="Donate Now" />
        <form>
          <h2>Choose an Amount</h2>
            <Button onClick={onClick} text='$5'/>
            <Button text='$10'/>
            <Button text='$20'/>
            <Button text='$50'/>
            <Button text='$100'/>
            <Button text='$200'/>

            <h3>Other Amount</h3>
            <input
                type='tel'
                onClick={onClick}
                placeholder='$ Other Amount'
            />

            <div>
               <DonateButton onSubmit={handleSubmit}/>
            </div>
          
            {console.log(state)}
          </form>
        </div>
     
    
    );

}


export default DonationPage;