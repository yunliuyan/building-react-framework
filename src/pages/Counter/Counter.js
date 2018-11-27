import React, { Component } from 'react';
import { increment,decrement,reset } from 'reduxRouter/actions/counter';

import { connect } from 'react-redux';

class Counter extends Component {
    render(){
        return (
            <div>
                <div>当前计数为(显示为redux计数):</div>
                <button onClick={()=>this.props.increment()}>+</button>
                <button onClick={()=>this.props.decrement()}>-</button>
                <button onClick={()=>this.props.reset()}>重置</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
};
const mapDispatchToProps = (dispatch) => {
     return {
         increment: ()=>{
             dispatch(increment())
         },
         decrement: ()=>{
             dispatch(decrement())
         },
         reset: ()=> {
             dispatch(reset())
         }
     }
 };

 export default connect(mapStateToProps,mapDispatchToProps)(Counter);