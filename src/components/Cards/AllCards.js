import CardItem from "./CardItem/CardItem";
import Card from '../UI/Card';

const CARDS = [
    {
        id: 'c1',
        name: 'Football',
        description: 'A card that is the ball',
        price: 2.99,
    },
    {
        id: 'c2',
        name: 'Grass',
        description: 'Cant play without it!',
        price: .99,
    },
    {
        id: 'c3',
        name: 'Player',
        description: 'There are a lot of them',
        price: 10.99,
    },
    {
        id: 'c4',
        name: 'People',
        description: 'Why play if no one watches?',
        price: 1.99,
    },
];

const AllCards = (props) => {

    const cardList = CARDS.map(card => {
        return <CardItem
            id={card.id}
            key={card.key}
            name={card.name}
            price={card.price}
            description={card.description}/>
    });

    return <section className="container">
        <Card>
            <ul>
                {cardList}
            </ul>
        </Card>
    </section>

}

export default AllCards;