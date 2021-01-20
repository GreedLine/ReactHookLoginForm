import {useDispatch, useSelector} from "react-redux";

export function Header() {

    function updateStore(item, type) {
        switch (type) {
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

    const navigationPanel = useSelector(state => state.navigationPanel);
    const dispatch = useDispatch();

    return (
        <div className='header'>
            <button className="header__button"
                    onClick={ ()=>dispatch(updateStore(navigationPanel, 'SET_NAVIGATION_PANEL'))}>
                <span role="img" aria-label="menu" >
                    <svg viewBox="64 64 896 896" focusable="false" data-icon="menu" width="1em"
                         height="1em"
                         fill="currentColor" aria-hidden="true">
                        <path
                            d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z">
                        </path>
                    </svg>
                </span>
                <span>Меню</span></button>
        </div>
    )
}

export default Header;