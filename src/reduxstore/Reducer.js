import {INCREMENT, DECREMENT} from './Actiontype'

let initialState = {count : 1 , carditems: {} }

export const Reducer = (state = initialState, action)=>{
    switch(action.type){
        case INCREMENT:
            state = {
                ...state,
                carditems : { ...state.carditems, [action.payload.key.title]: {...action.payload.key, cartCount : action.payload.value} }
            }
            break;
            case DECREMENT:
            state = {
                ...state,
                carditems : { ...state.carditems, cartCount : {...action.payload.key, [action.payload.key.title]: action.payload.value} }
            }
            break;
    }
    return state;

}