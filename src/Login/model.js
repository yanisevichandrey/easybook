const INITIAL_STATE = {
    users: [
        {id: 1, name: 'ANdrey'}
    ],
}

export const users = {
    name: 'users',

    state: INITIAL_STATE,
    reducers: {
        addUser(state, payload) {
            return {...state, users: [...payload]}
        }
        
    },
    effects: (dispatch) => ({
       
        
    })
};