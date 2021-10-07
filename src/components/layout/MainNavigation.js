import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
    return (
        <header>
            <div>Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All</Link>
                     </li>
                     <li>
                        <Link to='/new-meetups'>Add New Meetup</Link>
                     </li>
                     <li>
                        <Link to='/favorites'>Favorites</Link>
                     </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;