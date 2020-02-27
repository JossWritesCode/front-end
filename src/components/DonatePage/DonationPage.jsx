import React,{useReducer} from 'react'
import Header from '../Header/Header'
import {connect} from 'react-redux';
import {initialState, rootReducer} from '../../redux/reducers/reducer'
import {donateMoney} from '../../redux/actions/action'

const DonationPage = (props) => {
     const [state, dispatch] = useReducer(rootReducer, initialState);
    
    console.log(props);

    // function five(){
    //     setData(data )
    // }

    

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