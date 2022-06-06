import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

function Navbar(){
    return (
        <header className={classes.header}>
            <div className={classes.logo}>RanDOM Thunder</div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Homepage</Link>
                        </li>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                        <li>
                            <Link to='/ask'>Ask</Link>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}

export default Navbar;