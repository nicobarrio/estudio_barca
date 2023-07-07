import './Content.css'
import Topbar from '../../components/Topbar/Topbar.jsx';
import Button from '../../components/Button/Button.jsx';
import Card from '../../components/Card/Card.jsx';
import Panel from '../../components/Panel/Panel.jsx';

const Content = () => {
    return (
        <div className="content_box">
            <Topbar name='Nicolás' />    
            <Button button='Create new product'/>
            <div class="cards">
                <Card number='30' category='Products'/> 
                <Card number='23' category='Orders'/>
                <Card number='$250.000' category='Profit'/>
            </div>
            <Panel />    

        </div>
    )
}

export default Content