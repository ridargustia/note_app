const initState = {
    isPopup: false,
    isLogin: false,
}

const reducer = (state=initState, action) => {
    if (action.type === 'CHANGE_POPUP') {
        return {
        ...state,
        isPopup: action.value,
        }
    }
    if (action.type === 'CHANGE_LOGIN') {
        return {
        ...state,
        isLogin: action.value
        }
    }
    return state;
}

export default reducer;