export default function dataUsers(state = [], action) {
    switch (action.type) {
        case 'SET_DATA_USERS':
            return  action.users
        default:
            return state
    }
}