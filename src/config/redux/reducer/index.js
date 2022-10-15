const initState = {
    isPopup: false,
    isLogin: false,
    isLoading: false,
    user: 'Ridar Gustia'
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
    if (action.type === 'CHANGE_USER') {
        return {
            ...state,
            user: action.value
        }
    }
    if (action.type === 'CHANGE_LOADING') {
        return {
            ...state,
            isLoading: action.value
        }
    }
    return state;
}

export default reducer;