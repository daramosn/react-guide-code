import './Card.css'

//In this case, Card works like a shell
// It will be useful when I need shells with more jsx complex, like Modals or alerts.
function Card(props) {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
}

export default Card;