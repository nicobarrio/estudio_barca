import './RecentOrders.css'

const RecentOrders = (props) => {
    return (
        <div className="panel_box">
            <p>{props.title}</p>
            <div className="">
                <p> {props.name} </p>
                <p> {props.date} </p>
                <p> {props.status} </p>
            </div>
        </div>
    )
}

export default RecentOrders