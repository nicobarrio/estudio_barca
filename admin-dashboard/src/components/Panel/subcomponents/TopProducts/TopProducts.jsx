import './TopProducts.css'

const TopProducts = (props) => {
    return (
        <div className="panel_box">
            <p>{props.title}</p>
            <div className="">
                <p>{props.product}</p>
                <p>${props.price}</p>
            </div>
        </div>
    )
}

export default TopProducts