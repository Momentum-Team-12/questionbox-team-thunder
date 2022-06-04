import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

function Navbar(){
    return (
        <header className={classes.header}>
            <div>RanDOM Thunder</div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Homepage</Link>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}

export default Navbar;