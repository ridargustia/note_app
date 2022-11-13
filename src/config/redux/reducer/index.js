const initState = {
    isPopup: false,
    isLogin: false,
    isLoading: false,
    // user: 'Ridar Gustia'
    user: {}
}

const reducer = (state=initState, action) => {
    if (action.type === 'CHANGE_POPUP') {
        // console.log('Reducer change popup');
        return {
            ...state,
            isPopup: action.value,
        }
    }
    if (action.type === 'CHANGE_LOGIN') {
        // console.log('Reducer change login');
        return {
            ...state,
            isLogin: action.value
        }
    }
    if (action.type === 'CHANGE_USER') {
        // console.log('Reducer change user');
        return {
            ...state,
            user: action.value
        }
    }
    if (action.type === 'CHANGE_LOADING') {
        // console.log('Reducer loading');
        return {
            ...state,
            isLoading: action.value
        }
    }
    return state;
}

export default reducer;