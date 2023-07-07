import './TopProducts.css'

const TopProducts = (props) => {
    return (
        <div className="panel_products">
            <p>{props.title}</p>

            <div className="products">
                <ul>
                    <p>Product name</p>
                    <li> {props.product} </li>
                </ul>
                <ul>
                    <p>Price</p>
                    <li> {props.price} </li>
                </ul>
            </div>
        </div>
    )
}

export default TopProducts