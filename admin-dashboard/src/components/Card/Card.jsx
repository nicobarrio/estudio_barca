import './Card.css'

const Card = (props) => {
    return (
        <div className="card_box">
            <p> {props.number} </p>
            <p>{props.category}</p>
        </div>
    )
}

export default Card