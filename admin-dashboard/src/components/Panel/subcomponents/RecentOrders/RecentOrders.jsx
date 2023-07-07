import './RecentOrders.css'

const RecentOrders = (props) => {
    return (
        <div className="panel_orders">
            <p>{props.title}</p>

            <div className="orders">
                <ul>
                    <p>Order name</p>
                    <li> {props.name} </li>
                </ul>
                <ul>
                    <p>Date</p>
                    <li> {props.date} </li>
                </ul>
                <ul>
                    <p>Status</p>
                    <li> {props.status} </li>
                </ul>
            </div>

        </div>
    )
}

export default RecentOrders