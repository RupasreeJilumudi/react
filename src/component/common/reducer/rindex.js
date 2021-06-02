const intialState = {
    data:[]
}
const mainReducer = (state= intialState, action) => {
    if(action.type==="SELECTED_VALUE"){                
        return{
            ...state,selectValue: action.region         
        }
    }else{
        return{
            ...state
        }
    }
}
export default mainReducer;