import classes from './Card.module.css';
const Card = props => {
    return <div className={classes.myCard}>{props.children}</div>
}
export default Card;