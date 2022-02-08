import {INCREMENT, DECREMENT} from './Actiontype'

export const incrementCount = (value, key) => {
    return {
        type : INCREMENT,
        payload : {value, key}
    } 
}

export const decrementCount =(value,key)=>{
    return {
        type : DECREMENT,
        payload :{value, key}
    }
}