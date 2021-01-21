export default function navigationPanel(state = true, action) {
    switch (action.type) {
        case 'SET_NAVIGATION_PANEL':
            return action.navigationPanel
        default:
            return state
    }
}