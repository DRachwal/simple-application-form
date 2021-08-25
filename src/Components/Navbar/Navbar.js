import { useState, Fragment } from 'react';
import Backdrop from '../Backdrop/Backdrop';

import classes from './Navbar.module.css';

const Navbar = () => {
    const [showMobileNav, setShowMobileNav] = useState(false);

    const toggleMobileNavHandler = () => {
        setShowMobileNav(prevState => !prevState);
    };

    console.log(showMobileNav);

    return <header className={classes.header}>
        <div>
            <button className={classes['toggle-button']} onClick={toggleMobileNavHandler}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <a href='/'>Strona główna</a>
                </li>
                <li>
                    <a href='/privacy-policy'>Polityka prywatności</a>
                </li>
            </ul>
        </nav>
        {showMobileNav && <Fragment>
            <Backdrop onClick={toggleMobileNavHandler}/>
            <nav className={classes['mobile-nav']}>
                <ul>
                    <li>
                        <a href='/'>Strona główna</a>
                    </li>
                    <li>
                        <a href='/privacy-policy'>Polityka prywatności</a>
                    </li>
                </ul>
            </nav>
        </Fragment>}
    </header>
}

export default Navbar;