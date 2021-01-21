import {useSelector} from "react-redux";
import {Link} from "react-router-dom";


export  function NavigationPanel(){

    const navigationPanel = useSelector(state => state.navigationPanel);

    return (
        <div
            className={`navigation-panel ${navigationPanel ? 'navigation-panel_active' : ''}`}
        >
            <h1 className='navigation-panel__h1'>Меню</h1>
            <ul className='navigation-panel__ul'>
                <li className='navigation-panel__li'><Link to="/signin">Sign In</Link></li>
                <li className='navigation-panel__li'><Link to="/signup">Sign Up</Link></li>
                <li className='navigation-panel__li'><Link to="/admin/user">Admin Panel</Link></li>
            </ul>
        </div>
    )

}

export default NavigationPanel;