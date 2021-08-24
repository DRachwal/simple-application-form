import classes from './Navbar.module.css';

const Navbar = () => {
    return <header className={classes.header}>
        <nav>
            <ul>
                <li>
                    <a href='/'>Strona główna</a>
                </li>
                <li>
                    <a href='/privacy-policy'>Polityka prywatności</a>
                </li>
            </ul>
        </nav>
    </header>
}

export default Navbar;