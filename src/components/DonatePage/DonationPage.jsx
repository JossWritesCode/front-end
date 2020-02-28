import React,{useState} from 'react'
import Header from '../Header/Header'
import {useDispatch} from 'react-redux';
import {initialState, rootReducer} from '../../redux/reducers/reducer'
import {donateMoney} from '../../redux/actions/action'
import {useSelector} from 'react-redux'
import {Button}from '..'
import DonateButton from '../Button/DonateButton/DonateButton'

const DonationPage = (props) => {
    const [amount, setAmount] = useState(0);
    const dispatch = useDispatch()
    const user = useSelector(amount => amount.InitialState)
    // const money = useDispatch()   //then write inline function...

    const handleChange= (e)=> {
      setAmount({...amount, [e.target.name]:e.target.value});
      console.log(e)
    }

    const handleSubmit = (e, value) =>{
        e.preventDefault();
        setAmount(value);
        dispatch(donateMoney(amount))
        setAmount(0)
    }

    const showAmount = (dollar) =>{
      setAmount(dollar)
    }

    

    return (
      
        <div>
          <Header title="Donate Now" />
          <form onSubmit={handleSubmit}>
            <h2>Choose an Amount</h2>
            <Button><input type='button'value={20} onClick={(e) => showAmount(e.target.value)} /></Button>
            <Button><input type='button'value={10} onClick={(e) => showAmount(e.target.value)} /></Button>
            <Button><input type='button'value={50} onClick={(e) => showAmount(e.target.value)} /></Button>
            <Button><input type='button'value={100} onClick={(e) => showAmount(e.target.value)} /></Button>
            <Button><input type='button'value={200} onClick={(e) => showAmount(e.target.value)} /></Button>
            
            <h3>Other Amount</h3>
            <input
               type='tel'
               name='custom amount'
               placeholder='$ other amount'
               onChange={handleChange}
               />

              <div>
                <DonateButton onSubmit={handleSubmit}/>
              </div>
              {console.log(amount)}
            </form>
            <div>${amount}</div>
        </div>
     
    
    );

}


export default DonationPage;