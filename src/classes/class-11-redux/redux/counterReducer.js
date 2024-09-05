const initialState = {
    count: 0
}
const counterReducer = (state=initialState, action) => {
    console.log(action, "state.count: ", state.count)
    const newState = {...state};
    switch(action.type) {
        case "INCREASE":
             newState.count = state.count + 1;
             return newState
        case "DECREASE":
            newState.count = state.count - 1;
            return newState
            default:
                return newState;
    }

}
export default counterReducer;