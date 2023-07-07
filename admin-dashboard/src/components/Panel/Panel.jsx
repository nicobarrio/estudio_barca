import './Panel.css'
import TopProducts from './subcomponents/TopProducts/TopProducts'
import RecentOrders from './subcomponents/RecentOrders/RecentOrders'

const Panel = (props) => {
    return (
        <div class="panel">
            <TopProducts title='Top selling products' product='WALNUTT OAK DINING TABLE' price='700' />
            <RecentOrders title='Recent orders' name='WALNUTT OAK DINING TABLE' date='05/07/2023' status='Success' /> 
        </div>
    );
}

export default Panel