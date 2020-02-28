import React,{useReducer} from 'react'
import Header from '../Header/Header'
import {connect} from 'react-redux';
import {initialState, rootReducer} from '../../redux/reducers/reducer'
import {donateMoney} from '../../redux/actions/action'
//import {useSelector} and {useDispatch} from react-redux


const DonationPage = (props) => {
     const [state, dispatch] = useReducer(rootReducer, initialState);
    //const state = useSelctor(state => state.InitialState)
    //const donateMoney = useDispatch()   then write inline function...
    console.log(props);

    

    return (
      <div>
        <div>
          <Header title="Donate" />
            {console.log(state)}
        </div>
      </div>
    );

}


export default DonationPage;