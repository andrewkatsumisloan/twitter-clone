const postsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            console.log('got to reducer create')
            return [...state, action.payload];
        case 'DELETE':
            return state.filter((post) => post._id !== action.payload);
        case 'LIKE':
            return state.map((post) => (post._id === action.payload._id ? action.payload :
                post));
        default:
            return state;
    }
}

export default postsReducer;

