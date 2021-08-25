import { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

import Backdrop from './Backdrop/Backdrop';
import Clock from './Clock';

const Navbar = () => {  
    const [showMobileNav, setShowMobileNav] = useState(false);

    const toggleNavHandler = () => {
        setShowMobileNav(prevState => !prevState);
    };

    return (
        <Fragment>
            {showMobileNav && <Backdrop onClick={toggleNavHandler}/>}
            <nav className='navbar fixed-top navbar-expand-lg navbar-light bg-light mb-4'>
                <div className='container'>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation' onClick={toggleNavHandler}>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className={`collapse navbar-collapse ${ showMobileNav && 'show' }`} id='navbarNav'>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <Link to='/' className='nav-link'>Strona główna</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/privacy-policy' className='nav-link'>Polityka prywatności</Link>
                            </li>
                        </ul>
                        <Clock />
                    </div>
                </div>
            </nav>
        </Fragment>
    );
}

export default Navbar;