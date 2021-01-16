export default function currentPage(state = 0, action) {
    switch (action.type) {
        case 'SET_CURRENT_PAGE':
            return action.currentPage
        default:
            return state
    }
}