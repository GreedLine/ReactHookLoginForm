export default function countPages(state = 0, action) {
    switch (action.type) {
        case 'SET_COUNT_PAGES':
            return action.countPages
        default:
            return state
    }
}