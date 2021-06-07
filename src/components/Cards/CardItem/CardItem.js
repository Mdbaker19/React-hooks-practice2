import classes from './CardItem.module.css';

const CardItem = props => {

    return <div className="row">
        <div className="col s12">
            <div className="card blue-grey darken-1">
                <div className={classes.cardPadding}>
                    <p className="card-title">{props.name}</p>
                    <p>{props.description}</p>
                    <button className="right btn waves-effect">Order {props.price}</button>
                </div>
            </div>
        </div>
    </div>

}

export default CardItem;