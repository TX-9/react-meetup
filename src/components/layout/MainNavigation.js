import { useContext } from 'react';
import { Link } from 'react-router-dom';
import FavoritesContext from '../../store/favorite-context';
import classes from './MainNavigation.module.css';

function MainNavigation() {
    const favoriteCtx = useContext(FavoritesContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>jMeetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All</Link>
                     </li>
                     <li>
                        <Link to='/new-meetups'>Add New Meetup</Link>
                     </li>
                     <li>
                        <Link to='/favorites'>Favorites
                        <span className={classes.badge}>{favoriteCtx.totalFavorites}</span></Link>
                     </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;