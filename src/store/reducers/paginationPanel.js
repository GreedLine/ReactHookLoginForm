export default function paginationPanel(state = [], action) {
    switch (action.type) {
        case 'SET_PAGINATION_PANEL':
            return action.paginationPanel
        default:
            return state
    }
}