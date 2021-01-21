export function updateStore(item, type){
    switch (type) {
        case 'SET_DATA_USERS':
            let users = item
            return{
                type: type,
                users
            }
        case 'SET_NAVIGATION_PANEL':
            let navigationPanel = !item
            return {
                type: type,
                navigationPanel
            }
        default:
            throw new Error('Error on dispatch function in store. Type dispatch: ' + type);
    }
}

export default updateStore