import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = ({ handleLogout, isLoggedIn}) => {
    
    return (
        <header className={classes.header}>
            <div className={classes.logo}>RanDOM Thunder</div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Homepage</Link>
                        </li>
                        {!isLoggedIn ? (
                        <li>
                            <Link to='/login'>Login/Register</Link>
                        </li>
                        ) : (
                            <Link to='/' onClick={handleLogout}>Logout</Link>
                        )
                        }
                        <li>
                            <Link to='/ask'>Ask</Link>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}

export default Navbar;