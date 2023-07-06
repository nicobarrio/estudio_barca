import './Panel.css'
import TopProducts from './subcomponents/TopProducts/TopProducts'
import RecentOrders from './subcomponents/RecentOrders/RecentOrders'

const Panel = (props) => {
    return (
        <div className="panel_box">
            <TopProducts product='WALNUTT OAK DINING TABLE' price='700' />
            <RecentOrders name='WALNUTT OAK DINING TABLE' date='05/07/2023' status='Success' /> 
        </div>
    );
}

export default Panel