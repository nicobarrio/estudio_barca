import './Content.css'
import Topbar from '../../components/Topbar/Topbar.jsx';
import Card from '../../components/Card/Card.jsx'
import Panel from '../../components/Panel/Panel.jsx';

const Content = () => {
    return (
        <div className="content_box">
            <Topbar name='Nicolás' />    
            <div class="cards">
                <Card number='23' category='Orders'/>
                <Card number='$250.000' category='Profit'/>
                <Card number='30' category='Products'/>    
            </div>
            <Panel />    

        </div>
    )
}

export default Content