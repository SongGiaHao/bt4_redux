import * as types from './../containers/ActionTypes'

const initialState = [
  {name:"Hao"}  
]


var myReduces=(state =initialState,action)=>{
    switch(action.type)
    {
        case types.GET_TEXT:
           return state; 
        case types.CHANGE_NAME:
          return  [{name: "Hello World"}];
        default:return state
    }

}
export default myReduces