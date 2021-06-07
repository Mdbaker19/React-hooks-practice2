
import field from '../../assets/stadium.png';
import classes from './Nav.module.css';

const Nav = props => {

    return <>
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">React Card Store</a>
                <ul id="nav-mobile" className="right">
                    <li><button className="btn waves-effect">Your Cart <span>2.99</span></button></li>
                </ul>
            </div>
        </nav>

        <div>
            <img className={classes.headerImage} src={field} alt="football field" />
        </div>
    </>

}

export default Nav;