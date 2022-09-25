const postsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            console.log('got to reducer create')
            return [...state, action.payload];
        case 'DELETE':
            return state.filter((post) => post._id !== action.payload);
        default:
            return state;
    }
}

export default postsReducer;

