import './Card.css'

const Card = (props) => {
    return (
        <div className="card_box">
            <p class="category"> {props.category} </p>
            <p class="number"> {props.number} </p> 
        </div>
    )
}

export default Card